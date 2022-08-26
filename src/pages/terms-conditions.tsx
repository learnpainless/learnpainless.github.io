import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Terms from '../containers/terms-conditions';

type TermsPageProps = {};

const TermsPage: React.FunctionComponent<TermsPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Terms and Conditions" slug={`terms-conditions`}
        description="Learn Pain Less is place where you will get android app development, java basics, php, and other programming language tutorials in short and easiest way"
      />

      <Terms />
    </Layout>
  );
};

export default TermsPage;
