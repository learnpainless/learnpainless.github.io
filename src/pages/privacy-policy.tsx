import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PrivacyPolicy from '../containers/privacy-policy';

type PrivacyPolicyPageProps = {};

const PrivacyPolicyPage: React.FunctionComponent<PrivacyPolicyPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy for Prolong Services" slug={`privacy-policy`}
        description="Learn Pain Less is place where you will get android app development, java basics, php, and other programming language tutorials in short and easiest way"
      />

      <PrivacyPolicy />
    </Layout>
  );
};

export default PrivacyPolicyPage;
