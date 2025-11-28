import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { IosbannerData, IosBrandData, IoschannelData, IosCraftData, IosExpertData, IosProductsData, IosRewriteData, IosWebsiteData, IosWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Ios_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Advanced iOS App Development Company | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build world-class iOS applications with Digital Minds On. Our iOS app development services focus on performance, scalability, and engaging user experiences for Apple devices." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/ios-app-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={IosbannerData}/>
          <Magento_channel data={IoschannelData}/>
          <Magento_expert  data={IosExpertData}/>
          <Magento_why_choose  data={IosWhyChooseData}/>
          <Magento_website  data={IosWebsiteData}/>
          <Magento_products data={IosProductsData}/>
          <Magento_brand data={IosBrandData}/>
          <Magento_craft data={IosCraftData}/>
          <Magento_rewrite data={IosRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Ios_development;
