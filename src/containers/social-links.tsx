import * as React from 'react';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';


const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: `https://www.facebook.com/${process.env.FACEBOOK}/`,
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: `https://www.instagram.com/${process.env.INSTAGRAM}/`,
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: `https://twitter.com/${process.env.TWITTER}`,
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoLinkedin />,
    url: `https://www.linkedin.com/company/${process.env.LINKEDIN}/`,
    tooltip: 'Linked In',
  },
];

export default SocialLinks;