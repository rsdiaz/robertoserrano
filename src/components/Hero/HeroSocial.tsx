import { Social } from "../Social"

const HeroSocial = () => (
  <div className="flex flex-col-reverse items-center p-6 lg:flex lg:flex-col lg:absolute lg:p-0 lg:w-[180px] lg:h-[320px] lg:left-[35px]">
    <div className="mt-24 sm:hidden">
      <a href="#about">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </div>
    <Social />
    <p className='mb-8 md:mb-0 site-section-tag'>Follow me</p>
  </div>
)

export { HeroSocial }