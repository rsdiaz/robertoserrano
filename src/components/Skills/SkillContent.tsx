import { skills } from '@/utils/SkillsData'
import { useState } from 'react'
import { SkillCard } from './SkillCard'
import { SkillNav } from './SkillNav'

const SkillContent = () => {
  const [skillType, setSkillType] = useState('web')

  return (
    <div className='w-full lg:min-h-[480px]'>
      <h2 className='hidden mb-7 text-xl font-semibold text-primary md:text-[26px] lg:block'>
        Mis Skills
      </h2>
      <p className='font-light leading-loose mb-5'>
        Una lista de lenguajes, frameworks y herramientas que mas estoy
        utilizando actualmente.
      </p>
      <SkillNav skillType={skillType} setSkillType={setSkillType} />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {skills.map((skill) => {
          if (skill.type === skillType) {
            return (
              <SkillCard
                key={skill.name}
                title={skill.name}
                icon={skill.icon}
                borderColor={skill.borderColor}
              />
            )
          }
          return
        })}
      </div>
    </div>
  )
}

export { SkillContent }
