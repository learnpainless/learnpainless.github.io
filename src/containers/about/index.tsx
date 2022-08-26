import * as React from 'react';
import { Link } from 'gatsby';
import SocialProfile from '../../components/social-profile/social-profile';

import {
  AboutWrapper,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';
import SocialLinks from '../social-links';

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Us</h2>
        <p>
          Learn Pain Less is place where you will get android app development, java basics, php, and other programming language tutorials in short and easiest way.
        </p>
      </AboutPageTitle>

      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
        <p>First of all thanks for visit to <Link to = { '/' }>Learn Pain Less</Link>. For any help write <a href="https://en.wikipedia.org/wiki/Mail" title="Mail">mail</a> to us at <a href="mailto:help@learnpainless.com">help@learnpainless.com</a><br />
Here you will find <a href="https://en.wikipedia.org/wiki/Tutorial" title="Tutorial">tutorials</a> on operating systems like <a href="https://code.google.com/android/" title="Android">Android</a>, <a href="https://www.microsoft.com/WINDOWS" title="Windows">Windows</a>, <a href="http://www.intenseschool.com/boot_camp/linux" title="Linux Boot Camp">Linux</a> as well as you will find some facts and tricks about these <a href="https://en.wikipedia.org/wiki/Operating_system" title="Operating system">Operating System</a>. There is also tutorials about web technologies like Earning money online, free recharge online, <a href="https://www.facebook.com/" title="Faceboo">Facebook</a> help,tips and tricks.<br />
Thats why this is called as Father of all tricks we will teach you, guide you, aware you and Amaze you.<br />
You all will gonna love this blog in few days, because we just started our blog so after few months will will here with lots of tutorials and tips for daily life and prank your friends. We will also teach you how you can secure your privacy online. Because our aim is to work online so its necessary to secure your privacy. And these all stuff is free of cost. In cost of these tips,tricks and help we just take few minutes from you to like our Facebook fanpage and share these tips with your friends.</p>
                <h4 id="sharing-is-caring-so-why-you-are-not-caring-your-friends"><span style={{color: "green"}}>Sharing is caring so why you are not caring your friends.</span></h4>
                <p>Share with your friends and help us to build more effective stuff for you all. Your sharing increase our confidential power and motivate us to right more good stuff.If you found our site more informative then share us with your friends and loved one’s so they can also learn about these tips and <a href="https://en.wikipedia.org/wiki/Vulnerability_%28computing%29" title="Vulnerability (computing)">security holes</a>. If you want to add some <a href="https://en.wikipedia.org/wiki/Information" title="Information">information</a> which you have then mail your Information on <a href="mailto:help@learnpainless.com">help@learnpainless.com</a> your information will be submitted to our website with proper <a href="https://www.facebook.com/credits/" title="Facebook Credits">Credits</a>.</p>
                <p>If you found some information which is inappropriate of not as you want then don’t forget to comment about that or write mail to us. So that we can improve our content and make it better for everyone.</p>
                <p>You can find us on All social network site with @learnpainless<br />
                So what are you looking for?<br />
                Just press on like button then click on share button.<br />
                Keep smiling. :)<br />
                Regards : <Link to = { '/' }>Learn Pain Less</Link></p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
