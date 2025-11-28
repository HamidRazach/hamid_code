import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Consulting_servicesbannerData, Consulting_servicesBrandData, Consulting_serviceschannelData, Consulting_servicesCraftData, Consulting_servicesExpertData, Consulting_servicesProductsData, Consulting_servicesRewriteData, Consulting_servicesWebsiteData, Consulting_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Consulting_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Consulting & Strategy Services | Expert Business Growth Solutions</title>
        <meta 
          name="description" 
          content="Unlock your business potential with our professional consulting services and strategy services. We help you build clear roadmaps, make smarter decisions, and achieve sustainable growth."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/consulting-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Consulting_servicesbannerData}/>
          <Magento_channel data={Consulting_serviceschannelData}/>
          <Magento_expert  data={Consulting_servicesExpertData}/>
          <Magento_why_choose  data={Consulting_servicesWhyChooseData}/>
          <Magento_website  data={Consulting_servicesWebsiteData}/>
          <Magento_products data={Consulting_servicesProductsData}/>
          <Magento_brand data={Consulting_servicesBrandData}/>
          <Magento_craft data={Consulting_servicesCraftData}/>
          <Magento_rewrite data={Consulting_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Consulting_services;
