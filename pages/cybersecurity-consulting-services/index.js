import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Cybersecurity_servicesbannerData, Cybersecurity_servicesBrandData, Cybersecurity_serviceschannelData, Cybersecurity_servicesCraftData, Cybersecurity_servicesExpertData, Cybersecurity_servicesProductsData, Cybersecurity_servicesRewriteData, Cybersecurity_servicesWebsiteData, Cybersecurity_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Cybersecurity_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Cybersecurity Consulting Services | Expert Cyber Risk & Data Protection Solutions</title>
        <meta 
          name="description" 
          content="Protect your business with professional cybersecurity consulting services. Our experts provide risk assessments, compliance solutions, and data protection strategies to keep your systems secure."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/cybersecurity-consulting-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Cybersecurity_servicesbannerData}/>
          <Magento_channel data={Cybersecurity_serviceschannelData}/>
          <Magento_expert  data={Cybersecurity_servicesExpertData}/>
          <Magento_why_choose  data={Cybersecurity_servicesWhyChooseData}/>
          <Magento_website  data={Cybersecurity_servicesWebsiteData}/>
          <Magento_products data={Cybersecurity_servicesProductsData}/>
          <Magento_brand data={Cybersecurity_servicesBrandData}/>
          <Magento_craft data={Cybersecurity_servicesCraftData}/>
          <Magento_rewrite data={Cybersecurity_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Cybersecurity_services;
