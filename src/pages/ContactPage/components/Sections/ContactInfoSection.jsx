// src/pages/ContactPage/components/ContactInfoSection.jsx
import { useTranslation } from 'react-i18next';

import { MailIcon } from '../../../../assets/icons/MailIcon';
import { PhoneIcon } from '../../../../assets/icons/PhoneIcon';
import { InstagramIcon } from '../../../../assets/icons/InstagramIcon';
import { TikTokIcon } from '../../../../assets/icons/TikTokIcon';
import { YouTubeIcon } from '../../../../assets/icons/YouTubeIcon';

const ContactInfoSection = ({ contactInfoData }) => {
  const { t } = useTranslation('contact');
  const socialIcons = {
    instagram: <InstagramIcon />,
    tiktok: <TikTokIcon />,
    youtube: <YouTubeIcon />,
  };

  return (
    <div className='text-brand-white'>
      <h2 className='text-3xl font-sans font-bold mb-6'>
        {t(contactInfoData.titleKey)}
      </h2>
      <div className='space-y-4 font-serif text-lg'>
        <a
          href={`mailto:${contactInfoData.email}`}
          className='flex items-center hover:text-brand-cta-orange transition-colors'>
          <MailIcon className='h-6 w-6 mr-3 text-brand-cta-green' />
          <span>{contactInfoData.email}</span>
        </a>
        <a
          href={`https://wa.me/${contactInfoData.phone.replace(/\s/g, '')}`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center hover:text-brand-cta-orange transition-colors'>
          <PhoneIcon />
          <span>{contactInfoData.phone} (WhatsApp)</span>
        </a>
      </div>
      <div className='mt-10'>
        <h3 className='text-xl font-sans font-semibold mb-4'>
          {t('contactFollowUs')}
        </h3>
        <div className='flex items-center space-x-6'>
          {contactInfoData.socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              title={social.name}
              className='text-brand-neutral hover:text-brand-cta-orange transition-colors'>
              {socialIcons[social.icon]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
