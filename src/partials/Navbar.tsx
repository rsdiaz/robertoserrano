import {
  NavbarTwoColumns,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components'

import { Logo } from '@/components/Logo'
import { Icon } from '@/components/Icon'
import { NavMenu } from '@/components/NavMenu'

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
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };