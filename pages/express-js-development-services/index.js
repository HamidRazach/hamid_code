import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Express_developmentbannerData, Express_developmentBrandData, Express_developmentchannelData, Express_developmentCraftData, Express_developmentExpertData, Express_developmentProductsData, Express_developmentRewriteData, Express_developmentWebsiteData, Express_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/express-js-development-services";
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

const Express_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Express.js Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On offers expert Express.js development services to create high-performance, secure, and scalable web applications for your business."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/angular-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Express_developmentbannerData}/>
          <Magento_channel data={Express_developmentchannelData}/>
          <Magento_expert  data={Express_developmentExpertData}/>
          <Magento_why_choose  data={Express_developmentWhyChooseData}/>
          <Magento_website  data={Express_developmentWebsiteData}/>
          <Magento_products data={Express_developmentProductsData}/>
          <Magento_brand data={Express_developmentBrandData}/>
          <Magento_craft data={Express_developmentCraftData}/>
          <Magento_rewrite data={Express_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Express_development;
