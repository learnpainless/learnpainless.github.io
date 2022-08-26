import * as React from 'react';
import SocialProfile from '../../components/social-profile/social-profile';

import {
  AboutWrapper,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';
import SocialLinks from '../social-links';

interface DisclaimerProps {}

const Disclaimer: React.FunctionComponent<DisclaimerProps> = () => {

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>Disclaimer for Prolong Services</h2>
        <p>
          Learn Pain Less is place where you will get android app development, java basics, php, and other programming language tutorials in short and easiest way.
        </p>
      </AboutPageTitle>

      <AboutDetails>
        <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at support@prolongservices.com</p>

                <h2>Disclaimers for Learn Pain Less</h2>

                <p>All the information on this website - https://learnpainless.com/ - is published in good faith and for general information purpose only. Learn Pain Less does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Learn Pain Less), is strictly at your own risk. Learn Pain Less will not be liable for any losses and/or damages in connection with the use of our website.</p>

                <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>

                <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>

                <h2>Consent</h2>

                <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                <h2>Update</h2>

                <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default Disclaimer;
