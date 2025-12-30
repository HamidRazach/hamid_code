import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Figma_servicesbannerData, Figma_servicesBrandData, Figma_serviceschannelData, Figma_servicesCraftData, Figma_servicesExpertData, Figma_servicesProductData, Figma_servicesRewriteData, Figma_servicesWebsiteData, Figma_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/figma-ui-ux-services";
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

const Figma_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Create Engaging Digital Experiences with Figma UI/UX Design Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On offers professional Figma UI/UX design services to craft intuitive, user-friendly, and visually stunning interfaces that enhance customer satisfaction and brand impact."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/figma-ui-ux-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Figma_servicesbannerData}/>
          <Magento_channel data={Figma_serviceschannelData}/>
          <Magento_expert  data={Figma_servicesExpertData}/>
          <Magento_why_choose  data={Figma_servicesWhyChooseData}/>
          <Magento_website  data={Figma_servicesWebsiteData}/>
          <Magento_products data={Figma_servicesProductData}/>
          <Magento_brand data={Figma_servicesBrandData}/>
          <Magento_craft data={Figma_servicesCraftData}/>
          <Magento_rewrite data={Figma_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Figma_services;
