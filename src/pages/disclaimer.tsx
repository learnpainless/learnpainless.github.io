import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Disclaimer from '../containers/disclaimer';

type DisclaimerPageProps = {};

const DisclaimerPage: React.FunctionComponent<DisclaimerPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Disclaimer for Prolong Services" slug={`disclaimer`}
        description="Learn Pain Less is place where you will get android app development, java basics, php, and other programming language tutorials in short and easiest way"
      />

      <Disclaimer />
    </Layout>
  );
};

export default DisclaimerPage;
