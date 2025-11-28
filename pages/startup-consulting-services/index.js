import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Startup_servicesbannerData, Startup_servicesBrandData, Startup_serviceschannelData, Startup_servicesCraftData, Startup_servicesExpertData, Startup_servicesProductsData, Startup_servicesRewriteData, Startup_servicesWebsiteData, Startup_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Startup_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Startup Consulting Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On offers expert startup consulting services to help you build strategies, attract investors, and scale your startup successfully."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/startup-consulting-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Startup_servicesbannerData}/>
          <Magento_channel data={Startup_serviceschannelData}/>
          <Magento_expert  data={Startup_servicesExpertData}/>
          <Magento_why_choose  data={Startup_servicesWhyChooseData}/>
          <Magento_website  data={Startup_servicesWebsiteData}/>
          <Magento_products data={Startup_servicesProductsData}/>
          <Magento_brand data={Startup_servicesBrandData}/>
          <Magento_craft data={Startup_servicesCraftData}/>
          <Magento_rewrite data={Startup_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Startup_services;
