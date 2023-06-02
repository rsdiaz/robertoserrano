// Astro imports
import { MarkdownInstance } from 'astro'

// Types imports
import { Post } from '../types/Post'

// Shared imports
import { Card } from '../Shared/Card'
import Icon from '../Shared/Icon'
import classNames from 'classnames'
import randomColor from '@/utils/ramdomColor'

type PostListProps = {
  post: MarkdownInstance<Post>
  borderColor?: string
}

const CardContent = (props: PostListProps) => (
  <div>
    <h2 className='mb-4 text-2xl font-black'>{props.post.frontmatter.title}</h2>
    <p>
      Un pequeño text de descripción del post... Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
    </p>
  </div>
)

const CardMeta = (props: PostListProps) => (
  <div className='flex justify-between items-end'>
    <div className='flex items-center gap-1'>
      <small className='text-slate-400'>Tags:</small>
      {props.post.frontmatter.icons.map((e: any) => (
        <p key={e}>
          <Icon name={e} width='16' />
        </p>
      ))}
    </div>
    <div>
      <small className='text-slate-400'>Publicado: </small>
      <small>
        <time className='text-xs text-slate-400 font-light'>20/02/2023</time>
      </small>
    </div>
  </div>
)

const BlogCard = (props: PostListProps) => (
  <article>
    <a
      href={`/posts/${props.post.frontmatter.slug}`}
      className='text-slate-300'
    >
      <Card
        variant='primary'
        className={classNames(`mb-8 border-b-4`, props.borderColor)}
      >
        <div className='flex flex-col gap-8'>
          <CardContent post={props.post} />
          <CardMeta post={props.post} />
        </div>
      </Card>
    </a>
  </article>
)

export { BlogCard }
