import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { webflowbannerData, WebflowBrandData, WebflowchannelData, webflowCraftData, webflowExpertData, webflowProductsData, webflowRewriteData, webflowWebsiteData, webflowWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/webflow-development-services";
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

const Webflow_development = () => {
  return (
    <Fragment>
       <Head>
        <title>Webflow Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build modern, responsive websites with Digital Minds On’s Webflow development services. We deliver fast, SEO-friendly, and fully customized Webflow solutions." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/webflow-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={webflowbannerData}/>
          <Magento_channel data={WebflowchannelData}/>
          <Magento_expert  data={webflowExpertData}/>
          <Magento_why_choose  data={webflowWhyChooseData}/>
          <Magento_website  data={webflowWebsiteData}/>
          <Magento_products data={webflowProductsData}/>
          <Magento_brand data={WebflowBrandData}/>
          <Magento_craft data={webflowCraftData}/>
          <Magento_rewrite data={webflowRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Webflow_development;
