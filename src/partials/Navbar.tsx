import { Logo, Icon, NavMenu, NavMenuItem, NavbarTwoColumns, Section } from '@/components'


const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<Icon width='28' color='#22d3ee' />}
          name="Roberto Serrano | Web Developer"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/rsdiaz">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };