import { AppConfig } from '@/utils/AppConfig'
import { Social } from './Social'

const FollowCard = () => (
  <div className='bg-slate-800 text-gray-200 w-full rounded-lg shadow-lg'>
    <main className='p-5'>
      <section className='grid gap-8 md:grid-cols-6 items-center'>
        <div className='w-full hidden md:block md:col-span-1'>
          <img
            src='https://picsum.photos/200/200'
            className='object-cover w-16 rounded-full'
          />
        </div>

        <div className='md:col-span-4 px-3 flex flex-col'>
          <h1 className='text-xl'>{AppConfig.author}</h1>
          <p className='text-sm text-slate-400 font-light'>
            {AppConfig.description}
          </p>
          <Social default />
        </div>

        <div className='hidden md:block md:col-span-1 justify-self-end'>
          <a href='#' className='btn-outlined'>
            Contacto
          </a>
        </div>
      </section>
    </main>
  </div>
)

export { FollowCard }
