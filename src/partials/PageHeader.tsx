import Typography from '../components/ui/Text'

type PageHeaderProps = {
  title: string
  description: string
}

const PageHeader = (props: PageHeaderProps) => (
  <header className='mb-16'>
    <Typography as='h1' size='4xl' className='font-bold text-slate-300'>
      {props.title}
    </Typography>
    <p className='pt-4'>{props.description}</p>
  </header>
)

export { PageHeader }
