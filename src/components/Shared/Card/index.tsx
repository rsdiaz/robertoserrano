import { ComponentPropsWithoutRef, ElementType } from 'react'

type CardOwnProps<T extends ElementType> = {
  variant?: 'base' | 'primary' | 'secondary'
  as?: T | 'div'
}

type CardProps<T extends ElementType> = CardOwnProps<T> &
  ComponentPropsWithoutRef<T>

const Card = <T extends ElementType = 'div'>({
  variant = 'base',
  children,
  className,
  as = 'div',
}: CardProps<T>) => {
  const Component = as
  const variantStyle =
    variant === 'base'
      ? 'card-base'
      : variant === 'primary'
        ? 'card-primary'
        : 'card-secondary'

  return (
    <Component className={`${variantStyle} ${className ? className : ''}`}>
      {children}
    </Component>
  )
}

export { Card }
