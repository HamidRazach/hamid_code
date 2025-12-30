import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Metrojs_developementWhyChooseData, Metrojs_developmentbannerData, Metrojs_developmentBrandData, Metrojs_developmentchannelData, Metrojs_developmentCraftData, Metrojs_developmentExpertData, Metrojs_developmentProductsData, Metrojs_developmentRewriteData, Metrojs_developmentWebsiteData, woocomerenceTestimonialData } from "../../constant/services/metrojs-development-services";
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

const Metrojs_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Metro JS Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Boost your web apps with Digital Minds On’s Metro JS development services for fast, sleek, and responsive user experiences."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/metrojs-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Metrojs_developmentbannerData}/>
          <Magento_channel data={Metrojs_developmentchannelData}/>
          <Magento_expert  data={Metrojs_developmentExpertData}/>
          <Magento_why_choose  data={Metrojs_developementWhyChooseData}/>
          <Magento_website  data={Metrojs_developmentWebsiteData}/>
          <Magento_products data={Metrojs_developmentProductsData}/>
          <Magento_brand data={Metrojs_developmentBrandData}/>
          <Magento_craft data={Metrojs_developmentCraftData}/>
          <Magento_rewrite data={Metrojs_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Metrojs_development;
