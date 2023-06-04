import { useState } from 'react'
import { PortfolioNav } from '../PortfolioNav'
import { PortfolioCard } from '../PortfolioCard'
import { projects } from '@/utils/ProjectData'
import { SmallCard } from '../SmallCard'

const PortfolioContent = () => {
  const [skillType, setSkillType] = useState('web')

  return (
    <div className='w-full lg:min-h-[480px]'>
      <h2 className='hidden mb-7 text-xl font-semibold text-primary md:text-[26px] lg:block'>
        Portfolio
      </h2>
      <p className='font-light leading-loose mb-5'>
        Aquí puedes encontrar algunos de mis últimos proyectos, puedes acceder
        al código en Github.
      </p>
      <PortfolioNav skillType={skillType} setSkillType={setSkillType} />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <PortfolioCard
            id={project.id}
            key={project.id}
            title={project.title}
            description={project.description}
            links={project.links}
            tags={project.tags}
            image={project.image}
          />
        ))}
        {projects.map((project) => (
          <SmallCard
            id={project.id}
            key={project.id}
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
