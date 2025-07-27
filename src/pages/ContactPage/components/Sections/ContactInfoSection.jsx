// src/pages/ContactPage/components/ContactInfoSection.jsx
import { useTranslation } from 'react-i18next';

import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from '../../../../assets/icons/SocialIcons.jsx';
import { NAMESPACES, SHARED_TRANSLATION_KEYS } from '@/data/global/constants.js';
import { contactPageData } from '@/data/pages/contactData.js';

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
const ContactInfoSection = ({ translationNS, contactInfoData }) => {
  const { t } = useTranslation(
    translationNS === NAMESPACES.COMMON ? NAMESPACES.COMMON : [translationNS, NAMESPACES.COMMON]
  );

  // Maps icon names from the data file to their corresponding imported components.
  // This allows for dynamically rendering the correct icon for each social media link.
  const socialIcons = {
    instagram: <InstagramIcon className="h-6 w-6 mr-3" />,
    tiktok: <TikTokIcon className="h-6 w-6 mr-3" />,
    youtube: <YouTubeIcon className="h-6 w-6 mr-3" />,
  };

  const prefilledText = t(SHARED_TRANSLATION_KEYS.GENERAL_WHATSAPP_MESSAGE);
  const whatsappUrl = `https://wa.me/${contactPageData.contactInfo.phone.replace(/\s/g, '')}?text=${encodeURIComponent(prefilledText)}`;

  const subject = encodeURIComponent(
    t(contactPageData.contactInfo.emailSubjectKey, { ns: NAMESPACES.CONTACT })
  );
  const body = encodeURIComponent(
    t(contactPageData.contactInfo.emailBodyKey, { ns: NAMESPACES.CONTACT })
  );
  const emailLink = `mailto:${contactPageData.contactInfo.email}?subject=${subject}&body=${body}`;

  return (
    <div className="text-brand-white">
      <h2 className="heading-4 font-bold mb-6">{t(contactInfoData.titleKey)}</h2>
      <div className="space-y-4  text-lg">
        <a
          href={emailLink}
          className="text-base-xs flex items-center text-brand-neutral/70n hover:text-brand-cta-orange transition-colors"
        >
          <MailIcon className="h-6 w-6 mr-3 text-brand-cta-orange" />

          <span>{contactInfoData.email}</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-xs flex items-center hover:text-brand-cta-orange transition-colors"
        >
          <WhatsappIcon className="h-6 w-6 mr-3 text-brand-cta-orange" />
          <span>{contactInfoData.phone} (WhatsApp)</span>
        </a>
      </div>
      <div className="mt-10">
        <h3 className="heading-6 font-semibold mb-4">
          {t(SHARED_TRANSLATION_KEYS.FOLLOW_US_TEXT)}
        </h3>
        <div className="flex items-center space-x-6">
          {contactInfoData.socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="text-brand-cta-orange sm:text-brand-neutral/70 sm:hover:text-brand-cta-orange transition-all duration-300 hover:scale-110 inline-block"
            >
              {socialIcons[social.icon]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
