import { PostImage } from '@/components/PostImage'
import { PostMeta } from '@/components/PostMeta'
import { PullRequest } from '@/components/PullRequest'

type PostHeaderProps = {
  title: string
  date: Date
  tags: string[]
  img: string
}

const PostHeader = (props: PostHeaderProps) => (
  <header className='mb-16'>
    <h1 className='text-4xl font-bold text-slate-100'>{props.title}</h1>
    <PostMeta date={props.date} tags={props.tags} />
    <PullRequest />
    <PostImage src={props.img} />
  </header>
)

export { PostHeader }
