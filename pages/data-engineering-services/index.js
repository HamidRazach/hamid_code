import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Engineering_servicesbannerData, Engineering_servicesBrandData, Engineering_serviceschannelData, Engineering_servicesCraftData, Engineering_servicesExpertData, Engineering_servicesProductsData, Engineering_servicesRewriteData, Engineering_servicesWebsiteData, Engineering_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/data-engineering-services";
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

const Engineering_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Data Engineering Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="The power of your data with Digital Minds On. We build reliable data systems that help you make smarter decisions and drive business growth."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/data-engineering-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Engineering_servicesbannerData}/>
          <Magento_channel data={Engineering_serviceschannelData}/>
          <Magento_expert  data={Engineering_servicesExpertData}/>
          <Magento_why_choose  data={Engineering_servicesWhyChooseData}/>
          <Magento_website  data={Engineering_servicesWebsiteData}/>
          <Magento_products data={Engineering_servicesProductsData}/>
          <Magento_brand data={Engineering_servicesBrandData}/>
          <Magento_craft data={Engineering_servicesCraftData}/>
          <Magento_rewrite data={Engineering_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Engineering_services;
