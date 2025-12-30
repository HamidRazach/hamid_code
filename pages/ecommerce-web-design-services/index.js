import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Ecommerce_web_servicesbannerData, Ecommerce_web_servicesBrandData, Ecommerce_web_serviceschannelData, Ecommerce_web_servicesCraftData, Ecommerce_web_servicesExpertData, Ecommerce_web_servicesProductsData, Ecommerce_web_servicesRewriteData, Ecommerce_web_servicesWebsiteData, Ecommerce_web_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/ecommerce-web-design-services";
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

const Ecommerce_web_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Grow Your Online Store with Expert Ecommerce Design Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On delivers stunning and user-friendly ecommerce design services that help your business attract more customers, increase sales, and build lasting brand trust."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/ecommerce-web-design-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Ecommerce_web_servicesbannerData}/>
          <Magento_channel data={Ecommerce_web_serviceschannelData}/>
          <Magento_expert  data={Ecommerce_web_servicesExpertData}/>
          <Magento_why_choose  data={Ecommerce_web_servicesWhyChooseData}/>
          <Magento_website  data={Ecommerce_web_servicesWebsiteData}/>
          <Magento_products data={Ecommerce_web_servicesProductsData}/>
          <Magento_brand data={Ecommerce_web_servicesBrandData}/>
          <Magento_craft data={Ecommerce_web_servicesCraftData}/>
          <Magento_rewrite data={Ecommerce_web_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Ecommerce_web_services;
