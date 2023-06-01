import { ColorTags } from "@/components/Tags"
import { Values } from "@/components/types/TypeUnion"

const getUniqueTags = (array: Array<Values<typeof ColorTags>[]>) => {
  const tags: Array<string> = []
  array.forEach((e) => {
    e.forEach((t) => {
      if (!tags.includes(t)) tags.push(t)
    })
  })

  return tags
}

export { getUniqueTags }