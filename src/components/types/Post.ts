import { ColorTags } from '@/components/Tags'
import { Icons } from '../Shared/Icon/Icon'
import { Values } from './TypeUnion'

export type Post = {
  tags: Values<typeof ColorTags>[]
  slug: string
  publishDate: Date
  title: string
  imgSrc: string
  icons: [Icons]
}
