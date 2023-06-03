import { Link } from './Link'
import Icon from './Shared/Icon/Icon'

type SocialProps = {
  default?: boolean
}

const Social = (props: SocialProps) => (
  <ul className={`flex gap-3 mt-2 ${!props.default && 'lg:flex-col lg:mb-20'}`}>
    <li>
      <Link href='https://github.com/rsdiaz'>
        <Icon name='github' width='1rem' color='currentColor' />
      </Link>
    </li>
    <li>
      <Link href='https://codepen.io/rsdiaz'>
        <Icon name='codepen' width='1rem' color='currentColor' />
      </Link>
    </li>
    <li>
      <Link href='https://www.linkedin.com/in/roberto-serrano-diaz-grande'>
        <Icon name='linkedin' width='1rem' color='currentColor' />
      </Link>
    </li>
    <li>
      <Link href='https://twitter.com/Rovbeat'>
        <Icon name='twitter' width='1rem' color='currentColor' />
      </Link>
    </li>
  </ul>
)

export { Social }
