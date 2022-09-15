import { Link } from 'gatsby';
import React from 'react';
import { SiteNavLogoStyles} from './navbar.style';
import Logo from '../../../content/assets/logo.svg'

export const SiteNavLogo = () => {

  // tslint:disable-next-line:react-this-binding-issue
  return (
    <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
      {Logo ? (
        /*<GatsbyImage src={Data.logo.childImageSharp.gatsbyImageData} alt={process.env.TITLE} css={LogoWrapper} />*/
          <img
              src={Logo}
              alt={process.env.TITLE}
          />
      ) : (
          process.env.TITLE
        )}
    </Link>
  )
};


