import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Devops_servicesbannerData, Devops_servicesBrandData, Devops_serviceschannelData, Devops_servicesCraftData, Devops_servicesExpertData, Devops_servicesProductsData, Devops_servicesRewriteData, Devops_servicesWebsiteData, Devops_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/devops-consulting-services";
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

const Devops_services = () => {
  return (
    <Fragment>
         <Head>
        <title>DevOps Consulting Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Accelerate delivery with Digital Minds On’s DevOps consulting streamline workflows, boost agility, and ensure faster, reliable software releases."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/devops-consulting-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Devops_servicesbannerData}/>
          <Magento_channel data={Devops_serviceschannelData}/>
          <Magento_expert  data={Devops_servicesExpertData}/>
          <Magento_why_choose  data={Devops_servicesWhyChooseData}/>
          <Magento_website  data={Devops_servicesWebsiteData}/>
          <Magento_products data={Devops_servicesProductsData}/>
          <Magento_brand data={Devops_servicesBrandData}/>
          <Magento_craft data={Devops_servicesCraftData}/>
          <Magento_rewrite data={Devops_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Devops_services;
