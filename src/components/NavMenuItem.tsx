type NavMenuItemProps = {
  href: string
  children: string
}

const NavMenuItem = (props: NavMenuItemProps) => (
  <li className="hover:text-white">
    <a href={props.href}>{props.children}</a>
  </li>
)

export { NavMenuItem }