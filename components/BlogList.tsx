import { Post } from '@/typings';
import css from '../styles/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';



type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {

    return (
        <>
        <div className={css.gridPost}>
            {posts.map((post) => (
                <article key={post._id} className={css.blogPost}>
                    <div className={css.Box}>
                      <div className={css.blogContentBox}>
                        <h3 className={css.title}>{post.title}</h3>
                          <div className={css.contentOverlay}>
                            <div className={css.contentText}>
                            {post.categories.map((category) => (
                                <div key={category._id}>
                                <p>{category.title}</p>
                                </div>
                                ))}
                            </div>
                            <span className={css.deskripsi}>
                              <p>{post.description}</p>
                              </span>
                            <Link className={css.buttonLink} href={`/article/${post.slug.current}`} key={post.slug.current}>Lanjut Baca</Link>
                          </div>
                      </div>
                    <Image
                    className={css.postImg}
                    src={urlFor(post.mainImage).url()}
                    alt=""
                    width={580}
                    height={340}
                    />
                    <div className={css.outerBox}>
                        <p className={css.author}>By {post.author.name}</p>
                        <p>
                            {new Date(post._createdAt).toLocaleDateString
                            ("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                  </div>
                </article>
            ))}
        </div>
        </>
        );
}

export default BlogList;