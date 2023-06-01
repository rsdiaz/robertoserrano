import { ComponentPropsWithoutRef, ElementType } from "react"

type ButtonOwnProps<T extends ElementType> = {
  as?: T | 'a'
  variant?: 'btn-primary' | 'btn-secondary' | 'btn-outlined'
}

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> & ComponentPropsWithoutRef<T>

const Button = <T extends ElementType = 'a'>({
  children,
  className,
  as = 'a',
  variant = 'btn-primary',
  ...props
}: ButtonProps<T>) => {
  const Component = as

  return (
    <Component {...props} className={`${variant} ${className ? className : ''}`}>
      {children}
    </Component>
  )
}

export default Button