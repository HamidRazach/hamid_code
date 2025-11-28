import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { UnitybannerData, UnityBrandData, UnitychannelData, UnityCraftData, UnityExpertData, UnityProductsData, UnityRewriteData, UnityWebsiteData, UnityWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Unity_app = () => {
  return (
    <Fragment>
      <Head>
        <title>Top Unity Game Development Company | Digital Minds On</title>
        <meta 
          name="description" 
          content="Create immersive 2D & 3D games with our expert Unity game development services. Digital Minds On delivers high-performance, cross-platform Unity solutions for businesses and startups." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/unity-game-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={UnitybannerData}/>
          <Magento_channel data={UnitychannelData}/>
          <Magento_expert  data={UnityExpertData}/>
          <Magento_why_choose  data={UnityWhyChooseData}/>
          <Magento_website  data={UnityWebsiteData}/>
          <Magento_products data={UnityProductsData}/>
          <Magento_brand data={UnityBrandData}/>
          <Magento_craft data={UnityCraftData}/>
          <Magento_rewrite data={UnityRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Unity_app;
