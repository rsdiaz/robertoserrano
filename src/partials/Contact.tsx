import { HomeSection } from '@/components'
import Button from '@/components/Shared/Button'
import { Card } from '@/components/Shared/Card'

const Contact = () => {
  return (
    <HomeSection id='contact' title='Contacto' titlePosition='right'>
      <div className='flex flex-col gap-8 w-full md:flex-row'>
        <div className='w-full'>
          <h2 className='hidden mb-7 text-xl font-semibold text-primary md:text-[26px] lg:block'>
            ¿Quieres que hablemos?
          </h2>
          <p className='font-light leading-loose mb-5'>
            Puedes contactar conmigo a traves de mis redes sociales, pero si
            prefieres puedes rellenar el formulario para enviarme un mensaje.
          </p>
          <p className='font-light leading-loose mb-5'>
            Te contestare tan pronto como me sea posible. 😀
          </p>
        </div>
        <Card variant='primary'>
          <form>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-semibold leading-6'
              >
                Nombre:
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semibold leading-6'
              >
                Email:
              </label>
              <div className='mt-2.5'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='given-email'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-semibold leading-6'
              >
                Mensaje
              </label>
              <div className='mt-2.5'>
                <textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
            <div className='pt-8'>
              <Button
                as='button'
                variant='btn-primary'
                type='submit'
                className='w-full'
              >
                Enviar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </HomeSection>
  )
}

export { Contact }
