import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Resource_developmentbannerData, Resource_developmentBrandData, Resource_developmentchannelData, Resource_developmentCraftData, Resource_developmentExpertData, Resource_developmentProductsData, Resource_developmentRewriteData, Resource_developmentWebsiteData, Resource_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/human-resource-software-development-services";
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

const Resource_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Simplify Workforce Operations with Smart HR Management Solutions | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On provides efficient HR management solutions to automate tasks, enhance productivity, and simplify employee management."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/human-resource-software-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Resource_developmentbannerData}/>
          <Magento_channel data={Resource_developmentchannelData}/>
          <Magento_expert  data={Resource_developmentExpertData}/>
          <Magento_why_choose  data={Resource_developmentWhyChooseData}/>
          <Magento_website  data={Resource_developmentWebsiteData}/>
          <Magento_products data={Resource_developmentProductsData}/>
          <Magento_brand data={Resource_developmentBrandData}/>
          <Magento_craft data={Resource_developmentCraftData}/>
          <Magento_rewrite data={Resource_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Resource_development;
