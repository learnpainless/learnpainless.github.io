import * as React from 'react';
import {
  AboutWrapper,
  AboutPageTitle,
  AboutDetails,
} from './style';

interface BestBuyLaptopsProps {}

const BestBuyLaptops: React.FunctionComponent<BestBuyLaptopsProps> = () => {
    return(
        <AboutWrapper>
      <AboutPageTitle>
        <h2>Privacy Policy for Prolong Services</h2>
        </AboutPageTitle>
        <AboutDetails>
        <div data-WRID="WRID-164285330253268209" data-widgetType="productBanner"  data-class="affiliateAdsByFlipkart" height="240px" width="120px"></div><script async src="//affiliate.flipkart.com/affiliate/widgets/FKAffiliateWidgets.js"></script>

<div data-WRID="WRID-164285361247611370" data-widgetType="productBanner"  data-class="affiliateAdsByFlipkart" height="240px" width="120px"></div><script async src="//affiliate.flipkart.com/affiliate/widgets/FKAffiliateWidgets.js"></script>
        </AboutDetails>
        </AboutWrapper>
    );
};

export default BestBuyLaptops;
