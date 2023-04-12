import { Post } from '@/typings';
import { groq } from "next-sanity";
import { client } from '../../../../lib/sanity.client';
import css from '../../../../styles/page.module.css';

type Props = {
	params: {
		slug: string;
	};
};

async function Article( {params: { slug } }: Props) {
	const query = groq`
		*[_type=='post' && slug.current == $slug][0]
		{
			...,
			author->,
			categories[]->
		}
	`
const post: Post = await client.fetch(query, {
	slug
});


	return  <div className={css.container}>Post: {slug}</div>;
}

export default Article;