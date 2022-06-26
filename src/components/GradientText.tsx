import type { ReactNode } from 'react'

type GradientTextProps = {
  children: ReactNode
}

const GradientText = (props: GradientTextProps) => (
  <span className="bg-gradient-to-br from-sky-500 bg-amber-500 bg-clip-text text-transparent">
    {props.children}
  </span>
)

export { GradientText }