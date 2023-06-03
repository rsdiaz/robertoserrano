import { Project } from "@/components/types/Project"

const projects: Project[] = [
  {
    id: 1,
    title: 'node-clima',
    description: 'Modulo para nodejs',
    image:
      'https://res.cloudinary.com/rserrano/image/upload/v1616834445/blog/450_1000_tvqfxg.jpg',
    links: [
      {
        name: 'github',
        value: 'https://github.com/',
      },
      {
        name: 'codepen',
        value: 'https://codepen.com/',
      },
    ],
    tags: ['nodejs', 'mongodb'],
  },
  {
    id: 2,
    title: 'typescript-template-express',
    description: 'Modulo para nodejs',
    image:
      'https://res.cloudinary.com/rserrano/image/upload/v1619002583/blog/logo-black-1_n2rnlb.png',
    links: [
      {
        name: 'github',
        value: 'https://github.com/',
      },
      {
        name: 'codepen',
        value: 'https://codepen.com/',
      },
    ],
    tags: ['nodejs', 'mongodb'],
  },
  {
    id: 3,
    title: 'express-typescript',
    description: 'Modulo para nodejs',
    image:
      'https://res.cloudinary.com/rserrano/image/upload/v1599777224/blog/kyle-sung-oQuP_XBjOMY-unsplash_aqmowb.jpg',
    links: [
      {
        name: 'github',
        value: 'https://github.com/',
      },
      {
        name: 'codepen',
        value: 'https://codepen.com/',
      },
    ],
    tags: ['nodejs', 'mongodb'],
  },
]

export { projects }