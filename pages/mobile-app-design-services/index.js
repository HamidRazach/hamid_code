import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Mobile_designbannerData, Mobile_designBrandData, Mobile_designchannelData, Mobile_designCraftData, Mobile_designExpertData, Mobile_designProductsData, Mobile_designRewriteData, Mobile_designWebsiteData, Mobile_designWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Mobile_design = () => {
  return (
    <Fragment>
       <Head>
        <title>Mobile App Design Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Enhance user engagement with custom mobile app design services from Digital Minds On. We craft intuitive, visually appealing, and user-friendly app interfaces." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/mobile-app-design-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Mobile_designbannerData}/>
          <Magento_channel data={Mobile_designchannelData}/>
          <Magento_expert  data={Mobile_designExpertData}/>
          <Magento_why_choose  data={Mobile_designWhyChooseData}/>
          <Magento_website  data={Mobile_designWebsiteData}/>
          <Magento_products data={Mobile_designProductsData}/>
          <Magento_brand data={Mobile_designBrandData}/>
          <Magento_craft data={Mobile_designCraftData}/>
          <Magento_rewrite data={Mobile_designRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mobile_design;
