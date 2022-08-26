import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BestBuyLaptops from '../containers/best-buy-laptops';

type BestBuyLaptopsPageProps = {};

const BestBuyLaptopsPage: React.FunctionComponent<BestBuyLaptopsPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Best Buy Laptops" slug={`best-buy-laptops`}
        description="Learn Pain Less is place where you will get android app development, java basics, php, and other programming language tutorials in short and easiest way"
      />

      <BestBuyLaptops />
    </Layout>
  );
};

export default BestBuyLaptopsPage;
