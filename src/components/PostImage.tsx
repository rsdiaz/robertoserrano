type PostImageProps = {
  src: string
}

const PostImage = (props: PostImageProps) => (
  <img src="https://picsum.photos/800/300" className='w-full h-64 my-16 p-4 bg-slate-800 rounded' />
)

export { PostImage }
