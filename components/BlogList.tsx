import css from '../styles/page.module.css';
import Image from 'next/image';
import urlFor from '../lib/urlFor';



type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {

    return (
        <>
        <div className={css.gridPost}>
            {posts.map((post) => (
                <div key={post._id} className={css.blogPost}>
                    <div className={css.Box}>
                    <Image
                    className={css.postImg}
                    src={urlFor(post.mainImage).url()}
                    alt=""
                    width={300}
                    height={300}
                    />
                    <p className={css.blogTitle}>{post.title}</p>
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
            ))}
        </div>
        </>
        );
}

export default BlogList;