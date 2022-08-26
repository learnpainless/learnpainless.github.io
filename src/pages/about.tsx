import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="About Us" slug={`about`}
        description="Learn Pain Less is place where you will get android app development, java basics, php, and other programming language tutorials in short and easiest way"
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
