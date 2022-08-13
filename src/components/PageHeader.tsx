import type { ReactNode } from 'react'
import { GradientText } from '@/components'

type PageHeaderProps = {
  title: ReactNode
  description: ReactNode
}

const PageHeader = (props: PageHeaderProps) => (
  <header className="flex flex-col justify-center items-center md:flex-row lg:justify-start md:gap-x-24 font-outfit">
    <div className="text-center lg: text-justify">
      <h1 className="text-3xl font-bold">
        Bienvenidos a mi <GradientText>{props.title}</GradientText>
      </h1>
      <p className="mt-6 text-xl leading-9 font-inter">{props.description}</p>
    </div>
  </header>
)

export { PageHeader }