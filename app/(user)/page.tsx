import React from "react";
import { client } from '../api/client'
import css from "../../styles/page.module.css";
import { groq } from "next-sanity";


const query = groq`
*[_type == "post"] {
  title,
  slug,
  body,
  publishedAt,
  mainImage {
    asset -> {
      _id,
      url
    },
    alt,
  },
  "name": author -> name,
} | order(publishedAt desc)
`;

export default async function Home() {

  const posts = await client.fetch(query);

  return (
    <>
    <div className={css.container}>
    <h1>Selamat Datang</h1>

    </div>
    </>
  )
}
