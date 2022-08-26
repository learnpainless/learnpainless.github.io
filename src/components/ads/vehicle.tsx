import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import GatsbyImage from '../../components/gatsby-image';

export const Vehicle = () => {
  const Data = useStaticQuery(graphql`
  query {
    fileName: file(relativePath: { eq: "vehicle24x7.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
  `);
  // tslint:disable-next-line:react-this-binding-issue
  return (
    <Link to="https://vehicle24x7.com/" aria-label="Vehicle 24x7 (Mileage Calculator & fuel costs) 🚚" target="_blank">
      <GatsbyImage src={Data.fileName.childImageSharp.gatsbyImageData} alt="Vehicle 24x7 (Mileage Calculator & fuel costs) 🚚" />
    </Link>
  )
};