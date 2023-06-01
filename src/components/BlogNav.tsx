import { useState } from "react"

type BlogNavProps = {
  tags: (string | undefined)[]
  handleClick: any
}

const BlogNav = (props: BlogNavProps) => {
  const [tag, setTag] = useState('all')

  const handleClick = (value: string | undefined) => {
    setTag(value ? value : 'all')
    props.handleClick(value)
  }

  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-3 pb-6 lg:justify-start">
        <li>
          <button className={tag === 'all' ? 'btn btn-primary' : 'btn btn-outlined'} onClick={() => handleClick('all')}>Todos</button>
        </li>
        {props.tags.map(e => (
          <li key={e}>
            <button className={e === tag ? 'btn btn-primary' : 'btn btn-outlined'} onClick={() => handleClick(e)}>{e}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { BlogNav }
