import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { AndroidbannerData, AndroidBrandData, AndroidchannelData, AndroidCraftData, AndroidExpertData, AndroidProductsData, AndroidRewriteData, AndroidWebsiteData, AndroidWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Android_development = () => {
  return (
    <Fragment>
        <Head>
        <title>Android App Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build powerful and scalable Android apps with Digital Minds On. Our Android app development services focus on performance, design, and user engagement." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/android-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={AndroidbannerData}/>
          <Magento_channel data={AndroidchannelData}/>
          <Magento_expert  data={AndroidExpertData}/>
          <Magento_why_choose  data={AndroidWhyChooseData}/>
          <Magento_website  data={AndroidWebsiteData}/>
          <Magento_products data={AndroidProductsData}/>
          <Magento_brand data={AndroidBrandData}/>
          <Magento_craft data={AndroidCraftData}/>
          <Magento_rewrite data={AndroidRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Android_development;
