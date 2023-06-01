type HomeSectionTitleProps = {
  title: string,
}

const HomeSectionTitle = (props: HomeSectionTitleProps) => (
  <div className="flex flex-col-reverse items-center pt-6 pb-12 lg:flex lg:flex-col lg:h-[320px] lg:left-[35px]">
    <p className='site-section-tag'>{props.title}</p>
  </div>
)

export { HomeSectionTitle }
