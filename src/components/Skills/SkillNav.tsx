import { SectionNav } from "../Shared/SectionNav"

type SkillNavProps = {
  skillType: string,
  setSkillType: (value: string) => void
}

const SkillNav = (props: SkillNavProps) => {

  const handleClick = (value: string) => {
    props.setSkillType(value)
  }

  return (
    <nav className="flex justify-between">
      <ul className="flex flex-wrap justify-center gap-3 pb-6 lg:justify-start">
        <li>
          <button className={props.skillType === 'web' ? 'btn btn-primary' : 'btn btn-outlined'} onClick={() => handleClick('web')}>Web</button>
        </li>
        <li>
          <button className={props.skillType === 'programación' ? 'btn btn-primary' : 'btn btn-outlined'} onClick={() => handleClick('programación')}>Desarrollo</button>
        </li>
        <li>
          <button className={props.skillType === 'tools' ? 'btn btn-primary' : 'btn btn-outlined'} onClick={() => handleClick('tools')}>Herramientas</button>
        </li>
        <li>
          <button className={props.skillType === 'others' ? 'btn btn-primary' : 'btn btn-outlined'} onClick={() => handleClick('others')}>Otros</button>
        </li>
      </ul>
      <SectionNav
        prev="Sobre mi"
        next="Portfolio"
        prevHref="#about"
        nextHref="#portfolio"
      />
    </nav>
  )
}

export { SkillNav }