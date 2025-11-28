import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { magentoBrandData, magentoChannelData, magentoCraftData, magentoData, magentoExpertData, magentoProductsData, magentoRewriteData, magentoTestimonialData, magentoWebsiteData, magentoWhyChooseData } from "../../constant/data";
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

const Magento_development = () => {
  return (
    <Fragment>
        <Head>
        <title>Magento Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Scale your eCommerce business with Magento development by Digital Minds On. We provide custom Magento solutions, store setup, and optimization for seamless shopping." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/magento-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={magentoData}/>
          <Magento_channel data={magentoChannelData}/>
          <Magento_expert  data={magentoExpertData}/>
          <Magento_why_choose data={magentoWhyChooseData}/>
          <Magento_website data={magentoWebsiteData}/>
          <Magento_products  data={magentoProductsData}/>
          <Magento_brand data={magentoBrandData}/>
          <Magento_craft data={magentoCraftData}/>
          <Magento_rewrite data={magentoRewriteData}/>
          <Shopify_testimonial data={magentoTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Magento_development;
