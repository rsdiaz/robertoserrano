import { ReactNode } from 'react'

type HomeSectionProps = {
  children: ReactNode
  title?: string
  id?: string
  titlePosition: 'left' | 'right'
}

const HomeSection = (props: HomeSectionProps) => (
  <section
    id={props.id}
    className='flex flex-col items-center justify-center p-2 pt-24 lg:h-screen lg:flex-row-reverse'
  >
    <div
      className={`flex justify-center lg:flex lg:flex-col lg:absolute lg:w-[180px] lg:h-[320px] ${
        props.titlePosition === 'left' ? 'lg:left-[35px]' : 'lg:right-[35px]'
      }`}
    >
      <h2 className='site-section-tag'>{props.title}</h2>
    </div>
    <div className='w-full lg:flex lg:flex-row-reverse lg:mx-auto lg:max-w-screen-lg p-6 '>
      {props.children}
    </div>
  </section>
)

export { HomeSection }
