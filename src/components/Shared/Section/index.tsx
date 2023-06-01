import { ComponentPropsWithoutRef, ElementType } from "react"

type SectionOwnProps<T extends ElementType> = {
  as?: T | 'div'
}

type SectionProps<T extends ElementType> = SectionOwnProps<T> & ComponentPropsWithoutRef<T>

const Section = <T extends ElementType = 'div'>({
  children,
  className,
  as = 'div'
}: SectionProps<T>) => {
  const Component = as

  return (
    <Component className={`mx-auto max-w-screen-lg px-6 py-6 ${className ? className : ''}`}>
      {children}
    </Component>
  )
}

export default Section
