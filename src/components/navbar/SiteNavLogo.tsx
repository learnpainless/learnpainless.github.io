import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import GatsbyImage from '../../components/gatsby-image';
import {LogoWrapper, SiteNavLogoStyles} from './navbar.style';

export const SiteNavLogo = () => {
  const Data = useStaticQuery(graphql`
  query HeadingQuery {
    logo: file(relativePath: { eq: "logo2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 180
          formats: [WEBP]
        )
      }
    }
  }
  `);
  // tslint:disable-next-line:react-this-binding-issue
  return (
    <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
      {Data.logo ? (
        <GatsbyImage src={Data.logo.childImageSharp.gatsbyImageData} alt={process.env.TITLE} css={LogoWrapper} />
      ) : (
          process.env.TITLE
        )}
    </Link>
  )
};


