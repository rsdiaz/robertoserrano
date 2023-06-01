import Button from "../Shared/Button"

const AboutMain = () => (
  <div className="flex flex-col justify-center ml-4 lg:flex-1 lg:text-left">
    <p className="font-light leading-loose">
      Entusiasta del desarrollo y la seguridad informática. Actualmente, trabajo como desarrollador web para una importante empresa del sector de la automoción en España. Me apasiona el desarrollo de software y la tecnología en general. Me encanta el open source y el software libre, apuesto por el conocimiento/formación libre y accesible para todos 🌍.
    </p>
    <div className="flex justify-center pt-8 gap-6 md:justify-start">
      <Button variant='btn-primary' href='#skill'>Skills</Button>
      <Button variant='btn-outlined' href='#portfolio'>Portfolio</Button>
    </div>
  </div>
)

export { AboutMain }
