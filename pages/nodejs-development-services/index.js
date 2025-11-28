import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Node_developmentbannerData, Node_developmentBrandData, Node_developmentchannelData, Node_developmentCraftData, Node_developmentExpertData, Node_developmentProductsData, Node_developmentRewriteData, Node_developmentWebsiteData, Node_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Node_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Professional Node JS Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build scalable, high-performance web applications with Digital Minds On’s expert Node JS development services tailored for your business success"
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/nodejs-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Node_developmentbannerData}/>
          <Magento_channel data={Node_developmentchannelData}/>
          <Magento_expert  data={Node_developmentExpertData}/>
          <Magento_why_choose  data={Node_developmentWhyChooseData}/>
          <Magento_website  data={Node_developmentWebsiteData}/>
          <Magento_products data={Node_developmentProductsData}/>
          <Magento_brand data={Node_developmentBrandData}/>
          <Magento_craft data={Node_developmentCraftData}/>
          <Magento_rewrite data={Node_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Node_development;
