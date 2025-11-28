import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Penetration_servicesbannerData, Penetration_servicesBrandData, Penetration_serviceschannelData, Penetration_servicesCraftData, Penetration_servicesExpertData, Penetration_servicesProductsData, Penetration_servicesRewriteData, Penetration_servicesWebsiteData, Penetration_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Penetration_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Professional Penetration Testing Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Protect your business from cyber threats with Digital Minds On’s expert penetration testing services ensuring security, reliability, and compliance."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/penetration-testing-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Penetration_servicesbannerData}/>
          <Magento_channel data={Penetration_serviceschannelData}/>
          <Magento_expert  data={Penetration_servicesExpertData}/>
          <Magento_why_choose  data={Penetration_servicesWhyChooseData}/>
          <Magento_website  data={Penetration_servicesWebsiteData}/>
          <Magento_products data={Penetration_servicesProductsData}/>
          <Magento_brand data={Penetration_servicesBrandData}/>
          <Magento_craft data={Penetration_servicesCraftData}/>
          <Magento_rewrite data={Penetration_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Penetration_services;
