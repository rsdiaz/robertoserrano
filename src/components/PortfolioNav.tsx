import { SectionNav } from './Shared/SectionNav'

type PortfolioNavProps = {
  skillType: string
  setSkillType: (value: string) => void
  items?: Array<string>
}

const PortfolioNav = (props: PortfolioNavProps) => {
  const handleClick = (value: string) => {
    console.log(value)
    props.setSkillType(value)
  }

  return (
    <nav className='flex justify-between'>
      <ul className='flex flex-wrap justify-center gap-3 pb-6 lg:justify-start'>
        <li>
          <button
            className={
              props.skillType === 'web' ? 'btn btn-primary' : 'btn btn-outlined'
            }
            onClick={() => handleClick('web')}
          >
            Web
          </button>
        </li>
        <li>
          <button
            className={
              props.skillType === 'otros'
                ? 'btn btn-primary'
                : 'btn btn-outlined'
            }
            onClick={() => handleClick('otros')}
          >
            Otros
          </button>
        </li>
      </ul>
      <SectionNav
        prev='Skills'
        next='Blog'
        prevHref='#skill'
        nextHref='#blog'
      />
    </nav>
  )
}

export { PortfolioNav }
