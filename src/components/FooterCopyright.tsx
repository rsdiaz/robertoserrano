type FooterCopyrightProps = {
  site_name: string
  author: string
  author_link: string
};

const FooterCopyright = (props: FooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-sm text-gray-200">
      © Copyright {new Date().getFullYear()} by {props.site_name}. Desarrollado con ♥
      por{' '}
      <a
        className="text-amber-500 hover:underline"
        href={props.author_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.author}
      </a>
      .
    </div>
  </div>
);

export { FooterCopyright }