import { BlogGallery } from "@/components/BlogGallery"
import { Post } from "@/components/types/Post"
import { MarkdownInstance } from "astro"

type PostsProps = {
  posts: MarkdownInstance<Post>[]
};

const Posts = (props: PostsProps) => {
  return (
    <BlogGallery postList={props.posts} />
  )
}

export { Posts }