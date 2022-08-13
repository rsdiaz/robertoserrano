import type { ReactNode } from 'react'

type GradientTextProps = {
  children: ReactNode
}

const GradientText = (props: GradientTextProps) => (
  <span className="bg-gradient-to-br from-fuchsia-600 bg-amber-300 bg-clip-text text-transparent">
    {props.children}
  </span>
)

export { GradientText }