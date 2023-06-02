type PageHeaderProps = {
  title: string
  description: string
}

const PageHeader = (props: PageHeaderProps) => (
  <header className='mb-16'>
    <h1 className='text-4xl font-bold text-slate-300'>{props.title}</h1>
    <p className='pt-4'>{props.description}</p>
  </header>
)

export { PageHeader }
