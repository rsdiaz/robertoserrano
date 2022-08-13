import { GradientText, Section } from "@/components"

const Contact = () => (
  <Section
    title={
      <>
        Contacta <GradientText>conmigo</GradientText>
      </>
    }
  >
    <div className="flex flex-col items-center gap-y-2 md:flex-row">
      <h1>Contacto</h1>
    </div>
  </Section>
)

export { Contact }