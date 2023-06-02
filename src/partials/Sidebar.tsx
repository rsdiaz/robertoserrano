import { Link } from '@/components/Link'

type SidebarProps = {
  tags: string[]
}

const Sidebar = (props: SidebarProps) => (
  <>
    <div className='p-4 bg-[#131c2b] w-full rounded-lg shadow-lg'>
      <time className='flex items-center gap-2 mb-2 text-primary text-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 6h.008v.008H6V6z'
          />
        </svg>
        Tags
      </time>
      <h1 className='text-xl mb-4'></h1>
      <div className='flex gap-4 text-slate-400'>
        {props.tags.map((tag) => (
          <Link key={tag} href={`/tag/${tag}`}>
            #{tag}
          </Link>
        ))}
      </div>
    </div>
    <div className="mt-8 p-4 bg-[#131c2b] bg-[url('https://res.cloudinary.com/rserrano/image/upload/v1620924257/blog/banner_github_tjq8q0.jpg')] bg-left w-full rounded-lg shadow-lg">
      <Link href='https://github.com/rsdiaz'>
        <p className='flex items-center gap-2 font-semibold text-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
            />
          </svg>
          Sígueme en GitHub
        </p>
      </Link>
    </div>
  </>
)

export { Sidebar }
