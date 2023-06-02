import { HomeSection } from '@/components'
import { AboutMain, AboutPic } from '@/components/About'

const About = () => (
  <HomeSection id='about' title='Sobre mi' titlePosition='right'>
    <AboutPic />
    <AboutMain />
  </HomeSection>
)

export { About }
