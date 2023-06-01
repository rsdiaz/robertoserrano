import type { Skill } from '@/components/types/Skill'

import {
  JavaScriptIcon,
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  TypeScriptIcon,
  NextIcon,
  AstroIcon,
  PhpIcon,
  PythonIcon
} from '@/components/icons'

const skills: Skill[] = [
  {
    name: 'TypeScript',
    type: 'programación',
    icon: <TypeScriptIcon />,
    color: '#3178C6',
    borderColor: 'border-[#3178C6]',
  },
  {
    name: 'JavaScript',
    type: 'programación',
    icon: <JavaScriptIcon />,
    color: '#F7DF1E',
    borderColor: 'border-[#F7DF1E]', // mWwG9pL6xVMn
  },
  {
    name: 'PHP',
    type: 'programación',
    icon: <PhpIcon />,
    color: '#777BB4',
    borderColor: 'border-[#777BB4]',
  },
  {
    name: 'Python',
    type: 'programación',
    icon: <PythonIcon />,
    color: '#3776AB',
    borderColor: 'border-[#3776AB]'
  },
  {
    name: 'Node.js',
    type: 'web',
    icon: <NodeIcon />,
    color: '#339933',
    borderColor: 'border-[#339933]',
  },
  {
    name: 'MongoDB',
    type: 'web',
    icon: <MongoIcon />,
    color: '#47A248',
    borderColor: 'border-[#47A248]',
  },
  {
    name: 'Express',
    type: 'web',
    icon: <ExpressIcon />,
    color: '#000000',
    borderColor: 'border-[#000000]',
  },
  {
    name: 'React',
    type: 'web',
    icon: <ReactIcon />,
    color: '#61DAFB',
    borderColor: 'border-[#61DAFB]',
  },
  {
    name: 'Next JS',
    type: 'web',
    icon: <NextIcon />,
    color: '#000000',
    borderColor: 'border-[#000000]',
  },
  {
    name: 'Astro JS',
    type: 'web',
    icon: <AstroIcon />,
    color: '#FF5D01',
    borderColor: 'border-[#FF5D01]',
  },
]

export { skills }
