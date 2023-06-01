import type { ReactNode } from 'react'

type INavMenuProps = {
  children: ReactNode
  mobileNav: boolean
}

const NavMenu = (props: INavMenuProps) => (
  <nav>
    <ul className={`${props.mobileNav ? '' : 'hidden '}flex-col gap-x-6 p-6 bg-screen-secondary rounded font-light uppercase md:flex md:flex-row md:items-center md:p-0 md:bg-inherit`}>{props.children}</ul>
  </nav>
)

export { NavMenu }