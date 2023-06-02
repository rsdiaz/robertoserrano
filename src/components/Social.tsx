import { CodePenIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from './icons'
import { Link } from './Link'

type SocialProps = {
  default?: boolean
}

const Social = (props: SocialProps) => (
  <ul className={`flex gap-3 mt-2 ${!props.default && 'lg:flex-col lg:mb-20'}`}>
    <li>
      <Link href='https://github.com/rsdiaz'>
        <GitHubIcon width='1rem' />
      </Link>
    </li>
    <li>
      <Link href='https://codepen.io/rsdiaz'>
        <CodePenIcon />
      </Link>
    </li>
    <li>
      <Link href='https://www.linkedin.com/in/roberto-serrano-diaz-grande'>
        <LinkedInIcon />
      </Link>
    </li>
    <li>
      <Link href='https://twitter.com/Rovbeat'>
        <TwitterIcon />
      </Link>
    </li>
  </ul>
)

export { Social }
