import type { MarkdownInstance } from 'astro'
import { Post } from '@/components/types/Post'
import { BlogCard } from './Blog'
import { brandColor } from './Shared/Icon'
import { Card } from './Shared/Card'

type PostsProps = {
  postList: MarkdownInstance<Post>[]
}
const BlogGallery = (props: PostsProps) => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {props.postList.map((post) => (
          <BlogCard
            key={post.url}
            post={post}
            borderColor={`border-[${brandColor[post.frontmatter.icons[0]]}]`}
          />
        ))}
        <Card
          variant='primary'
          className='flex flex-col justify-between min-h-max mb-8 text-center'
        >
          <h2 className='mb-4 text-2xl font-black text-slate-2number00'>
            ¿Quieres ver más posts, sobre desarrollo web?
          </h2>
          <a href='/posts' className='btn-outlined text-slate-300'>
            Ir al blog
          </a>
        </Card>
      </div>
    </section>
  )
}

export { BlogGallery }
