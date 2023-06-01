import { useRef, useState } from 'react'
import { Logo, Icon, ToggleMobileMenu } from '@/components'
import Section from '@/components/Shared/Section'
import { NavMenu, NavbarTwoColumns, NavMenuItem } from '@/components/Navbar'

type NavbarProps = {
  scroll?: boolean
}

const Navbar = (props: NavbarProps) => {
  const [mobileNav, setMobileNav] = useState(false)
  const headerEl = useRef<null | HTMLElement>(null)

  if (typeof window !== `undefined`) {
    let prevScrollPosition = window.pageYOffset
    window.addEventListener("scroll", () => {
      const curScrollPosition = window.pageYOffset
      const difference = prevScrollPosition - curScrollPosition
      const { current } = headerEl
      setMobileNav(false)
      if (curScrollPosition > 100) {
        current?.classList.add('compaq')
      } else {
        current?.classList.remove("compaq")
      }
      if (difference < 0) {
        current?.classList.add("hide")
      } else {
        current?.classList.remove("hide")
      }
      prevScrollPosition = curScrollPosition
    })
  }

  const handleScroll = (event: any) => {
    event.preventDefault()
    const hash = event.target.hash
    console.log(hash)
    const el = document.querySelector(hash)
    const offsetTop = el.offsetTop
    setMobileNav(false)
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: offsetTop - 30,
        left: 0,
        behavior: "smooth",
      })
    }
  }

  const handleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <header ref={headerEl} className='fixed w-full z-10 translate-y-0 transition-all duration-500'>
      <Section>
        <NavbarTwoColumns>
          <Logo icon={<Icon width='45' color='#fbd065' />} />
          <ToggleMobileMenu handleMobileNav={handleMobileNav} />
          <NavMenu mobileNav={mobileNav}>
            <NavMenuItem href="/index.html#home" handleScroll={props.scroll && handleScroll}>Inicio</NavMenuItem>
            <NavMenuItem href="/index.html#about" handleScroll={props.scroll && handleScroll}>Sobre mí</NavMenuItem>
            <NavMenuItem href="/#skill" handleScroll={props.scroll && handleScroll}>Skills</NavMenuItem>
            <NavMenuItem href="/#portfolio" handleScroll={props.scroll && handleScroll}>Portfolio</NavMenuItem>
            <NavMenuItem href="/posts">Blog</NavMenuItem>
            <NavMenuItem href="/#contact">Contacto</NavMenuItem>
            <NavMenuItem href="/#contact" button>
              Curriculum
            </NavMenuItem>
          </NavMenu>
        </NavbarTwoColumns>
      </Section>
    </header>
  )
}

export { Navbar };