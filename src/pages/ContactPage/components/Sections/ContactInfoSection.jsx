// src/pages/ContactPage/components/ContactInfoSection.jsx
import { useTranslation } from 'react-i18next';

import { MailIcon } from '../../../../assets/icons/MailIcon';
import { PhoneIcon } from '../../../../assets/icons/PhoneIcon';
import { InstagramIcon } from '../../../../assets/icons/InstagramIcon';
import { TikTokIcon } from '../../../../assets/icons/TikTokIcon';
import { YouTubeIcon } from '../../../../assets/icons/YouTubeIcon';

/**
 * Renders the contact information section, including email, phone, and social media links.
 *
 * @param {object} props - The component props.
 * @param {object} props.contactInfoData - The data object for the contact information.
 * @param {string} props.contactInfoData.titleKey - Translation key for the section title.
 * @param {string} props.contactInfoData.email - The contact email address.
 * @param {string} props.contactInfoData.phone - The contact phone number.
 * @param {object[]} props.contactInfoData.socials - An array of social media link objects.
 */
const ContactInfoSection = ({ contactInfoData }) => {
  const { t } = useTranslation('contact');

  // Maps icon names from the data file to their corresponding imported components.
  // This allows for dynamically rendering the correct icon for each social media link.
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
          {/* Note: The "(WhatsApp)" text is hardcoded here for simplicity,
              but could be moved to a translation file if needed. */}
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
