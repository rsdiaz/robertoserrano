import { Link } from "../Link";

type SectionNavProps = {
  prevHref: string
  nextHref: string
  prev: string
  next: string
}

const SectionNav = (props: SectionNavProps) => (
  <ul className="hidden lg:flex lg:flex-wrap lg:gap-3 lg:justify-start">
    <li className='group mr-3'>
      <Link href={props.prevHref}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:animate-bounce w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
        {props.prev}
      </Link>
    </li>
    <li className='group relative mr-5 md:before:absolute before:left-[-0.8rem] before:top-[0.6rem] before:w-[0.45rem] before:h-[0.45rem] before:rounded before:bg-primary'>
      <Link href={props.nextHref}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:animate-bounce w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
        <span>
          {props.next}
        </span>
      </Link>
    </li>
  </ul>
)

export { SectionNav }
