import type { ReactNode } from "react"

type LogoProps = {
  icon: ReactNode
  name: string
}

const Logo = (props: LogoProps) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-sky-500 bg-amber-500 bg-clip-text text-xl font-bold text-transparent font-outfit">
      {props.icon}
      <span className="w-2"></span>
      {props.name}
    </div>
  )
}

export { Logo }