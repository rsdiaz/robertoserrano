import { useState } from 'react'
import { PortfolioNav } from '../PortfolioNav'
import { PortfolioCard } from '../PortfolioCard'
import { projects } from '@/utils/ProjectData'
import { SmallCard } from '../SmallCard'

const PortfolioContent = () => {
  const [skillType, setSkillType] = useState('web')

  return (
    <div className='w-full lg:min-h-[480px]'>
      <PortfolioNav skillType={skillType} setSkillType={setSkillType} />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <PortfolioCard
            title={project.title}
            description={project.description}
            links={project.links}
            tags={project.tags}
            image={project.image}
          />
        ))}
        {projects.map((project) => (
          <SmallCard
            title={project.title}
            description={project.description}
            links={project.links}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}

export { PortfolioContent }
