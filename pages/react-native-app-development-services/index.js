import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { ReactbannerData, ReactBrandData, ReactchannelData, ReactCraftData, ReactExpertData, ReactProductsData, ReactRewriteData, ReactWebsiteData, ReactWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/react-native-app-development-services";
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

const React_native = () => {
  return (
    <Fragment>
       <Head>
        <title>React Native App Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On provides expert React Native app development services. We create fast, scalable, and cost-effective apps for both iOS and Android platforms." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/react-native-app-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={ReactbannerData}/>
          <Magento_channel data={ReactchannelData}/>
          <Magento_expert  data={ReactExpertData}/>
          <Magento_why_choose  data={ReactWhyChooseData}/>
          <Magento_website  data={ReactWebsiteData}/>
          <Magento_products data={ReactProductsData}/>
          <Magento_brand data={ReactBrandData}/>
          <Magento_craft data={ReactCraftData}/>
          <Magento_rewrite data={ReactRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default React_native;
