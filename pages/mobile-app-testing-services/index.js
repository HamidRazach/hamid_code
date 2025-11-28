import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Mobile_app_testing_servicesbannerData, Mobile_app_testing_servicesBrandData, Mobile_app_testing_serviceschannelData, Mobile_app_testing_servicesCraftData, Mobile_app_testing_servicesExpertData, Mobile_app_testing_servicesProductsData, Mobile_app_testing_servicesRewriteData, Mobile_app_testing_servicesWebsiteData, Mobile_app_testing_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Mobile_app_testing_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Mobile Testing Services | Ensure Quality Across All Devices</title>
        <meta 
          name="description" 
          content="Deliver flawless mobile experiences with our expert testing services. We ensure app quality, performance, and compatibility on every device."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/mobile-app-testing-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Mobile_app_testing_servicesbannerData}/>
          <Magento_channel data={Mobile_app_testing_serviceschannelData}/>
          <Magento_expert  data={Mobile_app_testing_servicesExpertData}/>
          <Magento_why_choose  data={Mobile_app_testing_servicesWhyChooseData}/>
          <Magento_website  data={Mobile_app_testing_servicesWebsiteData}/>
          <Magento_products data={Mobile_app_testing_servicesProductsData}/>
          <Magento_brand data={Mobile_app_testing_servicesBrandData}/>
          <Magento_craft data={Mobile_app_testing_servicesCraftData}/>
          <Magento_rewrite data={Mobile_app_testing_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mobile_app_testing_services;
