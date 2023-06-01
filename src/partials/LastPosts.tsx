import type { MarkdownInstance } from 'astro'
import { HomeSection } from '@/components'
import { Post } from '@/components/types/Post'
import { BlogGallery } from '@/components/BlogGallery'

type RecentPostsProps = {
  postList: MarkdownInstance<Post>[]
}

const LastPosts = (props: RecentPostsProps) => (
  <HomeSection id='blog' title='Últimos posts' titlePosition='left'>
    <BlogGallery postList={props.postList} />
  </HomeSection>
)

export { LastPosts }
