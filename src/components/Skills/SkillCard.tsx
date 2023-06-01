import { ReactNode } from "react"

type SkillCardProps = {
  title: string
  icon: ReactNode
  borderColor: string
}

const SkillCard = (props: SkillCardProps) => (
  <div className={`flex-[1_1_100%] relative bg-screen-secondary pt-6 pr-6 pb-6 pl-6 ${props.borderColor} border-b-4 rounded`}>
    <h4 className="text-2xl font-black">{props.title}</h4>
    <p className="absolute top-6 right-6">
      {props.icon}
    </p>
  </div>
)

export { SkillCard }
