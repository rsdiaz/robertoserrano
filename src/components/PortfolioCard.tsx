import { useState } from 'react'

import { Project } from './types/Project'

const PortfolioCard = (props: Project) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <article
      className='flex flex-col bg-screen-secondary rounded'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {props.image && (
        <section
          className={`${
            isHover ? 'grayscale-0' : 'grayscale'
          } ease-in duration-300`}
        >
          <img
            src={props.image}
            alt='author'
            className='overflow-hidden h-48 w-full object-cover object-center rounded-t'
          />
        </section>
      )}
      <main className='flex flex-col justify-between h-full'>
        <header className='p-6'>
          <h2 className='mb-4 text-2xl font-black'>{props.title}</h2>
          <p className='font-light text-zinc-300 mb-4'>{props.description}</p>
        </header>
        <footer className='p-6'>
          <ul className='flex gap-3 mb-4'>
            <li>
              <a href='https://' className='text-zinc-400 hover:text-cyan-400'>
                {/* <GitHubIcon width='1.5rem' /> */}
              </a>
            </li>
            <li>
              <a href='https://' className='text-zinc-400 hover:text-cyan-400'>
                {/* <GitHubIcon width='1.5rem' /> */}
              </a>
            </li>
          </ul>
          <ul className='flex gap-3 font-thin'>
            {props.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </footer>
      </main>
    </article>
  )
}

export { PortfolioCard }
