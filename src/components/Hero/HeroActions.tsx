import Button from "../Shared/Button"

const HeroActions = () => (
  <div className="flex justify-center gap-6 md:justify-start">
    <Button variant='btn-primary' href='#about'>
      Sobre mí
    </Button>
    <Button variant='btn-outlined' href='#'>
      Contacto
    </Button>
  </div>
)

export { HeroActions }
