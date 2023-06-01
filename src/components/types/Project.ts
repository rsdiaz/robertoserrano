type ProjectLink = {
  name: string
  value: string
}

export type Project = {
  title: string
  description: string
  links: ProjectLink[]
  tags: string[]
  image?: string
}