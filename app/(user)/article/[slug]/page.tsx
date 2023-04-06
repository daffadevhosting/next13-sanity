import { Post } from '@/typings';
import { groq } from "next-sanity";
import { client } from '../../../../lib/client';

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


	return  <div>Post: {slug}</div>;
}

export default Article;