import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Siem_servicesbannerData, Siem_servicesBrandData, Siem_serviceschannelData, Siem_servicesCraftData, Siem_servicesExpertData, Siem_servicesProductsData, Siem_servicesRewriteData, Siem_servicesWebsiteData, Siem_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Siem_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Professional SIEM Monitoring Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Enhance your cybersecurity with expert SIEM Monitoring Services. Get real-time threat detection, compliance support, and automated response from trusted specialists."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/siem-monitoring-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Siem_servicesbannerData}/>
          <Magento_channel data={Siem_serviceschannelData}/>
          <Magento_expert  data={Siem_servicesExpertData}/>
          <Magento_why_choose  data={Siem_servicesWhyChooseData}/>
          <Magento_website  data={Siem_servicesWebsiteData}/>
          <Magento_products data={Siem_servicesProductsData}/>
          <Magento_brand data={Siem_servicesBrandData}/>
          <Magento_craft data={Siem_servicesCraftData}/>
          <Magento_rewrite data={Siem_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Siem_services;
