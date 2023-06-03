import type { MarkdownInstance } from 'astro'
import { Post } from '@/components/types/Post'
import { BlogCard } from './Blog'
import { Card } from './Shared/Card'
import { Colors } from '@/utils/Colors'
import { PortfolioNav } from './PortfolioNav'
import { useState } from 'react'
import { SectionNav } from './Shared/SectionNav'

type PostsProps = {
  postList: MarkdownInstance<Post>[]
}
const BlogGallery = (props: PostsProps) => {
  const [skillType, setSkillType] = useState('javascript')
  const tags = ['javascript', 'typescript']

  return (
    <section>
      <h2 className='hidden mb-7 text-xl font-semibold text-primary md:text-[26px] lg:block'>
        Últimos artículos publicados en el blog
      </h2>
      <p className='font-light leading-loose mb-5'>
        Estos son los últimos, puedes visitar el blog para consultar todo el
        archivo de posts.
      </p>
      <div className='flex justify-end pb-6'>
        <SectionNav
          prev='Portfolio'
          next='Contacto'
          prevHref='#portfolio'
          nextHref='#blog'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {props.postList.map((post) => (
          <BlogCard
            key={post.url}
            post={post}
            borderColor={`border-[${Colors[post.frontmatter.icons[0]]}]`}
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
