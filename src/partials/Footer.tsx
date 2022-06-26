import { Section, FooterCopyright } from '@/components'

import { AppConfig } from '@/utils/AppConfig'

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} author={AppConfig.author} author_link={AppConfig.author_link} />
  </Section>
);

export { Footer }