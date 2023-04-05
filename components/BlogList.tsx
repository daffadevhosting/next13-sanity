import { Post } from "@/typings";

type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {
    console.log(posts.length);
    return <div>Blog List</div>;
}

export default BlogList;