import { ComponentPropsWithoutRef, ElementType } from 'react'
import { Colors } from '@/utils/Colors'
import { Icons } from '@/utils/Icons'

export type Icons = 'typescript' | 'nodejs' | 'github' | 'codepen'

type IconOwnProps = {
  name: Icons
  color?: string
}

type IconProps<T extends ElementType> = IconOwnProps &
  ComponentPropsWithoutRef<T>

const Icon = <T extends ElementType = 'svg'>({
  name,
  width,
  color,
}: IconProps<T>) => {
  const Component = 'svg'
  return (
    <Component
      role='img'
      width={width ?? '32'}
      fill={color || Colors[name]}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={Icons[name]} />
    </Component>
  )
}

export default Icon
