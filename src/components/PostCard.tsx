import { formatDate } from '@/utils/FormatDate'
import type { Post } from './types/Post'
import Typography from './ui/Text'

const PostCard = (props: Post) => (

  <article className="bg-screen-secondary rounded shadow-lg">
    <img className="overflow-hidden h-48 w-full object-cover object-center rounded-t" src={props.imgSrc}
      alt="blog cover" />

    <div className="p-6 flex flex-col relative" style={{ minHeight: '168px' }}>
      <Typography as='p' size='xs'>
        <time className="tracking-widest">{formatDate(props.publishDate)}</time>
      </Typography>
      <Typography as='h1' size='lg' className='mt-1.5 text-slate-100'>
        <a href={`/posts/${props.slug}`} className="hover:text-primary">
          {props.title}
        </a>
      </Typography>
      <ul className='flex gap-3 absolute bottom-2'>
        {props.tags.map((tag) => (
          <li>
            <Typography size='sm'>
              <a href={`/posts/${props.slug}`} className={`inline-block bg-[${props.tagColor}] rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-primary`}>
                {tag}
              </a>
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  </article>
)

export { PostCard }