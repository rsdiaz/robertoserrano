import { FooterCopyright } from '@/components'
import { Social } from '@/components/Social';
import Section from '@/components/Shared/Section';

import { AppConfig } from '@/utils/AppConfig'

const Footer = () => (
  <Section as='footer'>
    <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
      <FooterCopyright site_name={AppConfig.site_name} author={AppConfig.author} author_link={AppConfig.author_link} />
      <Social default />
    </div>
  </Section>
);

export { Footer }