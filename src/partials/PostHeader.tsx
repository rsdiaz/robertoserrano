import { PostImage } from "@/components/PostImage"
import { PostMeta } from "@/components/PostMeta"
import { PullRequest } from "@/components/PullRequest"
import Typography from "@/components/ui/Text"

type PostHeaderProps = {
  title: string,
  date: Date,
  tags: string[]
  img: string
}

const PostHeader = (props: PostHeaderProps) => (
  <header className="mb-16">
    <Typography size='4xl' className='font-bold text-slate-100'>
      {props.title}
    </Typography>
    <PostMeta date={props.date} tags={props.tags} />
    <PullRequest />
    <PostImage src={props.img} />
  </header>
)

export { PostHeader }
