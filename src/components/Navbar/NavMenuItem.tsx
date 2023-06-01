type NavMenuItemProps = {
  href: string
  children: string
  button?: boolean
  handleScroll?: any
}

const NavMenuItem = (props: NavMenuItemProps) => (
  <li className="my-1.5 py-1.5 hover:text-primary transition-colors">
    <a onClick={(event) => props.handleScroll && props?.handleScroll(event)} className={props?.button ? 'btn-outlined' : ''} href={props.href}>{props.children}</a>
  </li>
)

export { NavMenuItem }
