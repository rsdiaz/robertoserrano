import type { MarkdownInstance } from 'astro'
import { PostCard } from '@/components'
import { Post } from '@/components/types/Post'

type PostsProps = {
  postList: MarkdownInstance<Post>[]
};
const BlogGallery = (props: PostsProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {props.postList.map((post) => (
        <PostCard title={post.frontmatter.title} slug={post.frontmatter.slug} tags={post.frontmatter.tags}
          publishDate={post.frontmatter.publishDate} imgSrc={post.frontmatter.imgSrc} />
      ))}
    </div>
  )
}

export { BlogGallery }