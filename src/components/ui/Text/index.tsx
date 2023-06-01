import { ComponentPropsWithoutRef, ElementType } from "react"

type TypographyOwnProps<T extends ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '4xl'
  variant?: 'base' | 'primary' | 'secondary'
  as?: T | 'div'
}

type TypographyProps<T extends ElementType> = TypographyOwnProps<T> & ComponentPropsWithoutRef<T>

const Typography = <T extends ElementType = 'div'>({
  size = 'md',
  children,
  className,
  as = 'div'
}: TypographyProps<T>) => {
  const Component = as

  return (
    <Component className={`text-${size} ${className ? className : ''}`}>
      {children}
    </Component>
  )
}

export default Typography
