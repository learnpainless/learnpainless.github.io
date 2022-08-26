import * as React from 'react';
import { FooterWrapper, SiteFooterNav, SiteFooterContent, inner } from './footer.style';
import { Link } from 'gatsby';
import { Heart } from '../post-details/heart';

type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = ({
  ...props
}) => {
  return (
    <FooterWrapper {...props}>
      <div css={[inner, SiteFooterContent]}>
        <section>
          <Link to="/">{process.env.TITLE}</Link> &copy; {new Date().getFullYear()}{' | Crafted with '}
          <Heart /> {' by '}
          <Link to={process.env.OWNER_URL}>
            {process.env.OWNER}
          </Link>
        </section>
        <SiteFooterNav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/terms-conditions">T&C</Link></li>
            <li><Link to="/rss.xml">RSS</Link></li>
          </ul>
        </SiteFooterNav>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
