import type { ReactNode } from 'react'

type HeroAvatarProps = {
  title: ReactNode
  description: ReactNode
  avatar: ReactNode
};

const HeroAvatar = (props: HeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24 font-outfit">
    <div>
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <p className="mt-6 text-xl leading-9 font-inter">{props.description}</p>
    </div>

    <div className="shrink-0">{props.avatar}</div>
  </div>
)

export { HeroAvatar }