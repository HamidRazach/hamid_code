import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { React_developmentbannerData, React_developmentBrandData, React_developmentchannelData, React_developmentCraftData, React_developmentExpertData, React_developmentProductsData, React_developmentRewriteData, React_developmentWebsiteData, React_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/react-js-development-services";
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

const React_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Professional ReactJS Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Transform your ideas into powerful web applications with Digital Minds On’s reliable ReactJS development services designed for performance and growth."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/reactjs-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={React_developmentbannerData}/>
          <Magento_channel data={React_developmentchannelData}/>
          <Magento_expert  data={React_developmentExpertData}/>
          <Magento_why_choose  data={React_developmentWhyChooseData}/>
          <Magento_website  data={React_developmentWebsiteData}/>
          <Magento_products data={React_developmentProductsData}/>
          <Magento_brand data={React_developmentBrandData}/>
          <Magento_craft data={React_developmentCraftData}/>
          <Magento_rewrite data={React_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default React_development;
