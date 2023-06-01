import { HeroMain, HeroSocial } from "@/components/Hero"


const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center flex-col-reverse sm:h-[600px] md:h-[800px] lg:h-screen">
      <HeroSocial />
      <HeroMain title='Roberto Serrano' subtitle='Full Stack Developer' />
    </section>
  )
}

export { Hero }
