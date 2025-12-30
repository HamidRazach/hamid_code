import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Software_testingbannerData, Software_testingBrandData, Software_testingchannelData, Software_testingCraftData, Software_testingExpertData, Software_testingProductsData, Software_testingRewriteData, Software_testingWebsiteData, Software_testingWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/software-testing-services";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Shopify_testimonial from "../../components/shopify-development-services/shopify_testmonial";
import Magento_channel from "../../components/magento-development-services/magento_channel";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_why_choose from "../../components/magento-development-services/magento_why_choose";
import Magento_website from "../../components/magento-development-services/magento_website";
import Magento_products from "../../components/magento-development-services/magento_products";
import Magento_brand from "../../components/magento-development-services/magento_brand";
import Magento_craft from "../../components/magento-development-services/magento_craft";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";


const Software_testing = () => {
  return (
    <Fragment>
         <Head>
        <title>Software Testing Services | Reliable QA Solutions for Your Business</title>
        <meta 
          name="description" 
          content="Get error-free, high-performing software with our expert testing services. We ensure quality, functionality, and performance across all platforms."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/software-testing-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Software_testingbannerData}/>
          <Magento_channel data={Software_testingchannelData}/>
          <Magento_expert  data={Software_testingExpertData}/>
          <Magento_why_choose  data={Software_testingWhyChooseData}/>
          <Magento_website  data={Software_testingWebsiteData}/>
          <Magento_products data={Software_testingProductsData}/>
          <Magento_brand data={Software_testingBrandData}/>
          <Magento_craft data={Software_testingCraftData}/>
          <Magento_rewrite data={Software_testingRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Software_testing;
