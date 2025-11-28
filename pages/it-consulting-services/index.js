import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { IT_servicesbannerData, IT_servicesBrandData, IT_serviceschannelData, IT_servicesCraftData, IT_servicesExpertData, IT_servicesProductsData, IT_servicesRewriteData, IT_servicesWebsiteData, IT_servicesWhyChooseData, Penetration_servicesRewriteData, woocomerenceTestimonialData } from "../../constant/data";
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

const IT_services = () => {
  return (
    <Fragment>
         <Head>
        <title>IT Consulting Services | Innovative Technology Solutions for Your Business</title>
        <meta 
          name="description" 
          content="Enhance your business performance with our expert IT consulting services. We provide tailored technology strategies to improve efficiency, security, and long-term growth."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/it-consulting-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={IT_servicesbannerData}/>
          <Magento_channel data={IT_serviceschannelData}/>
          <Magento_expert  data={IT_servicesExpertData}/>
          <Magento_why_choose  data={IT_servicesWhyChooseData}/>
          <Magento_website  data={IT_servicesWebsiteData}/>
          <Magento_products data={IT_servicesProductsData}/>
          <Magento_brand data={IT_servicesBrandData}/>
          <Magento_craft data={IT_servicesCraftData}/>
          <Magento_rewrite data={IT_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default IT_services;
