import {previewData} from 'next/headers';
import { groq } from "next-sanity";
import { client } from '../../lib/client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBackground from '../../components/PreviewBlog';
import BlogList from '../../components/BlogList';
import css from "../../styles/page.module.css";


const query = groq`
*[_type == "post"] {
  ...,
  "name": author -> name,
} | order(_createdAt desc)
`;


export default async function Home() {

  if (previewData()) {
    return (
      <PreviewSuspense 
      fallback="Load Data"
    >
      <PreviewBackground query={query} />
    </PreviewSuspense>
      );
  }

  const posts = await client.fetch(query);

  return (
    <>
    <div className={css.container}>
    <BlogList posts={posts}/>
    </div>
    </>
  )
}
