import * as React from 'react';
import { SocialAccountsListContainer, SocialAccountsListItem } from './social-accounts-style';
import './style.css'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaTumblr, FaTelegramPlane, FaStackOverflow, FaWhatsapp, FaGithub, FaRedditAlien } from 'react-icons/fa';

const SocialAccounts = () => {
  return (
    <SocialAccountsListContainer className={"social-counter social social-color social-text"}>
      <SocialAccountsListItem className="facebook">

        <a href="https://www.facebook.com/LearnPainLess" target="_blank" title="Learn Pain Less on Facebook">
          <FaFacebookF />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="twitter">
        <a href="https://twitter.com/LearnPainLess" target="_blank" title="Learn Pain Less on Twitter">
          <FaTwitter />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="pinterest">
        <a href="https://in.pinterest.com/learnpainless/" target="_blank" title="Learn Pain Less on Pinterest">
          <FaPinterest />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="instagram">
        <a href="https://www.instagram.com/learnpainless/" target="_blank" title="Learn Pain Less on Instagram">
          <FaInstagram />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="tumblr">
        <a href="https://learnpainless.tumblr.com/" target="_blank" title="Learn Pain Less on Tumblr">
          <FaTumblr />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="telegram">
        <a href="https://t.me/LearnPainLess" target="_blank" title="Learn Pain Less on Telegram">
          <FaTelegramPlane />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="stack-overflow">
        <a href="https://stackoverflow.com/users/5231773/learnpainless" target="_blank" title="Learn Pain Less on Stack Overflow">
          <FaStackOverflow />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="whatsapp">
        <a href="https://chat.whatsapp.com/JpUxNoiOdqXJk8HBBOFCl3" target="_blank" title="Learn Pain Less on Whatsapp">
          <FaWhatsapp />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="github">
        <a href="https://github.com/learnpainless" target="_blank" title="Learn Pain Less on Github">
          <FaGithub />
        </a>
      </SocialAccountsListItem>
      <SocialAccountsListItem className="reddit">
        <a href="https://www.reddit.com/r/LearnPainLess/" target="_blank" title="Learn Pain Less on Reddit">
          <FaRedditAlien />
        </a>
      </SocialAccountsListItem>

    </SocialAccountsListContainer>
  );
}

export default SocialAccounts;
