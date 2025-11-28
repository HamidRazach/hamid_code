import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Api_integration_servicesbannerData, Api_integration_servicesBrandData, Api_integration_serviceschannelData, Api_integration_servicesCraftData, Api_integration_servicesExpertData, Api_integration_servicesProductsData, Api_integration_servicesRewriteData, Api_integration_servicesWebsiteData, Api_integration_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Api_integration_services = () => {
  return (
    <Fragment>
         <Head>
        <title>API Integration Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Simplify your systems with our API integration services. We connect apps, automate workflows, and enhance efficiency across platforms."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/api-integration-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Api_integration_servicesbannerData}/>
          <Magento_channel data={Api_integration_serviceschannelData}/>
          <Magento_expert  data={Api_integration_servicesExpertData}/>
          <Magento_why_choose  data={Api_integration_servicesWhyChooseData}/>
          <Magento_website  data={Api_integration_servicesWebsiteData}/>
          <Magento_products data={Api_integration_servicesProductsData}/>
          <Magento_brand data={Api_integration_servicesBrandData}/>
          <Magento_craft data={Api_integration_servicesCraftData}/>
          <Magento_rewrite data={Api_integration_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Api_integration_services;
