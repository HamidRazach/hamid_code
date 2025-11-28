import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Qa_servicebannerData, Qa_serviceBrandData, Qa_servicechannelData, Qa_serviceCraftData, Qa_serviceExpertData, Qa_serviceProductsData, Qa_serviceRewriteData, Qa_serviceWebsiteData, Qa_serviceWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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


const Qa_service = () => {
  return (
    <Fragment>
         <Head>
        <title>QA Testing Services & Support | Expert Quality Assurance Solutions</title>
        <meta 
          name="description" 
          content="Ensure flawless performance with our QA testing services and support. We deliver reliable, high-quality software testing solutions for your business."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/qa-testing-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Qa_servicebannerData}/>
          <Magento_channel data={Qa_servicechannelData}/>
          <Magento_expert  data={Qa_serviceExpertData}/>
          <Magento_why_choose  data={Qa_serviceWhyChooseData}/>
          <Magento_website  data={Qa_serviceWebsiteData}/>
          <Magento_products data={Qa_serviceProductsData}/>
          <Magento_brand data={Qa_serviceBrandData}/>
          <Magento_craft data={Qa_serviceCraftData}/>
          <Magento_rewrite data={Qa_serviceRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Qa_service;
