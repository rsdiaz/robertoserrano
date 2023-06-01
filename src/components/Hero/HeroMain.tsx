import { HeroActions } from "./HeroActions"

type HeroMainProps = {
  title: string
  subtitle: string
}

const HeroMain = (props: HeroMainProps) => (
  <div className='mx-auto max-w-screen-lg w-full p-6'>
    <div className="flex flex-col items-center text-center md:text-left md:pl-12 md:pt-14 md:flex-row md:justify-between">
      <div>
        <p className='text-lg font-light text-primary md:text-2xl'>Hola!, soy</p>
        <h1 className="mb-6 text-4xl font-black md:text-[76px] leading-none">{props.title}</h1>
        <h2 className="text-xl font-semibold text-primary md:text-[26px]">{props.subtitle}</h2>
        <ul className="font-light mb-6 md:flex">
          <li className="first:before:hidden relative mr-5 before:hidden md:before:absolute before:left-[-0.8rem] before:top-[0.6rem] before:w-[0.45rem] before:h-[0.45rem] before:rounded before:bg-primary">Desarrollador Web</li>
          <li className="relative mr-5 md:before:absolute before:left-[-0.8rem] before:top-[0.6rem] before:w-[0.45rem] before:h-[0.45rem] before:rounded before:bg-primary">Programador</li>
          <li className="relative mr-5 md:before:absolute before:left-[-0.8rem] before:top-[0.6rem] before:w-[0.45rem] before:h-[0.45rem] before:rounded before:bg-primary" >Arquitecto JavaScript</li>
        </ul>
        <HeroActions />
      </div>
    </div>
  </div>
)

export { HeroMain }