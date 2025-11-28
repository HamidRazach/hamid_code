import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Managment_servicesbannerData, Managment_servicesBrandData, Managment_serviceschannelData, Managment_servicesCraftData, Managment_servicesExpertData, Managment_servicesProductsData, Managment_servicesRewriteData, Managment_servicesWebsiteData, Managment_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Managment_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Data Management Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Transform your data into business value with Digital Minds On. We organize, secure, and optimize your data for smarter, faster decisions."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/data-management-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Managment_servicesbannerData}/>
          <Magento_channel data={Managment_serviceschannelData}/>
          <Magento_expert  data={Managment_servicesExpertData}/>
          <Magento_why_choose  data={Managment_servicesWhyChooseData}/>
          <Magento_website  data={Managment_servicesWebsiteData}/>
          <Magento_products data={Managment_servicesProductsData}/>
          <Magento_brand data={Managment_servicesBrandData}/>
          <Magento_craft data={Managment_servicesCraftData}/>
          <Magento_rewrite data={Managment_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Managment_services;
