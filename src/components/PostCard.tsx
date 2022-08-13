import { formatDate } from '@/utils/FormatDate'
import type { Post } from './types/Post'

const PostCard = (props: Post) => (
  <div>
    <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden bg-slate-800">
      <div className="w-full">
        <div className="w-full flex p-2 items-center">
          <div className="p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="author"
              className="w-10 h-10 overflow-hidden" />
          </div>
          <div className="pl-2">
            <p className="font-bold">JavaScript</p>
          </div>
        </div>
      </div>
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2"
        alt="blog cover" />

      <div className="p-4 flex flex-col justify-between" style={{ minHeight: '198px' }}>
        <p>
          <time className="tracking-widest text-xs title-font text-gray-400 mb-1">{formatDate(props.publishDate)}</time>
        </p>
        <h1 className="title-font text-lg font-medium mb-3">{props.title}</h1>
        <div className="flex items-center flex-wrap ">
          <a href={`/posts/${props.slug}`} className="text-amber-400  md:mb-2 lg:mb-0 hover:text-amber-300 transition-all">
            <p className="inline-flex items-center">Read Blog
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </p>
          </a>
          <span
            className="text-fuchsia-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            24
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
              stroke-linejoin="round" viewBox="0 0 24 24">
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
              </path>
            </svg>
            89
          </span>
        </div>


      </div>
    </div>
  </div>
)

export { PostCard }