// Astro imports
import { MarkdownInstance } from 'astro'

// Types imports
import { Post } from '@/components/types/Post'

// Components imports
import { BlogCard } from '@/components/Blog'

type PostsListProps = {
  posts: MarkdownInstance<Post>[]
}

const PostsList = (props: PostsListProps) =>
  props.posts.map((post) => <BlogCard post={post} />)

export { PostsList }
