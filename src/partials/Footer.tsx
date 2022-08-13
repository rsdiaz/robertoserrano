import { Section, FooterCopyright } from '@/components'
import { Social } from '@/components/Social';

import { AppConfig } from '@/utils/AppConfig'

const Footer = () => (
  <Section>
    <div className="flex justify-between items-end">
      <FooterCopyright site_name={AppConfig.site_name} author={AppConfig.author} author_link={AppConfig.author_link} />
      <Social />
    </div>
  </Section>
);

export { Footer }