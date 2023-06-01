import Button from '../Shared/Button'

const AboutMain = () => (
  <div className='flex flex-col justify-center ml-4 lg:flex-1 lg:text-left'>
    <h3 className='hidden mb-7 text-xl font-semibold text-primary md:text-[26px] lg:block'>
      Una pequeña introducción
    </h3>
    <p className='font-light leading-loose mb-5'>
      Desarrollador Web Full Stack con +10 de experiencia. Durante mi
      trayectoria he tenido la oportunidad de desarrollar una amplia variedad de
      habilidades técnicas, trabajar en una amplia gama de proyectos y ayudar a
      las empresas a alcanzar sus metas.
    </p>
    <p className='font-light leading-loose mb-5'>
      A lo largo de mi carrera, siempre he priorizado el aprendizaje constante y
      la adaptación a las nuevas tecnologías y tendencias. Siempre estoy
      buscando formas de mejorar mis habilidades y expandir mi conocimiento.
      Esta mentalidad de crecimiento ha sido crucial para mantenerme al día en
      un campo que cambia rápidamente 🌍.
    </p>
    <p>
      Actualmente estoy trabajando para una importante empresa del sector de la
      automoción en España.
    </p>
    <div className='flex justify-center pt-8 gap-6 md:justify-start'>
      <Button variant='btn-primary' href='#skill'>
        Skills
      </Button>
      <Button variant='btn-outlined' href='#portfolio'>
        Portfolio
      </Button>
    </div>
  </div>
)

export { AboutMain }
