import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Laravel_developmentbannerData, Laravel_developmentBrandData, Laravel_developmentchannelData, Laravel_developmentCraftData, Laravel_developmentExpertData, Laravel_developmentProductsData, Laravel_developmentRewriteData, Laravel_developmentWebsiteData, Laravel_developmentWhyChooseData, Php_developmentRewriteData, woocomerenceTestimonialData } from "../../constant/data";
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

const Laravel_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Laravel Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Boost your web performance with Digital Minds On’s Laravel development services, creating secure, scalable, and high-quality web applications."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/laravel-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Laravel_developmentbannerData}/>
          <Magento_channel data={Laravel_developmentchannelData}/>
          <Magento_expert  data={Laravel_developmentExpertData}/>
          <Magento_why_choose  data={Laravel_developmentWhyChooseData}/>
          <Magento_website  data={Laravel_developmentWebsiteData}/>
          <Magento_products data={Laravel_developmentProductsData}/>
          <Magento_brand data={Laravel_developmentBrandData}/>
          <Magento_craft data={Laravel_developmentCraftData}/>
          <Magento_rewrite data={Laravel_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Laravel_development;
