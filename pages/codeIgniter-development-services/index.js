import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { CodeIgniter_developmentbannerData, CodeIgniter_developmentBrandData, CodeIgniter_developmentchannelData, CodeIgniter_developmentCraftData, CodeIgniter_developmentExpertData, CodeIgniter_developmentRewriteData, CodeIgniter_developmentWebsiteData, CodeIgniter_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Shopify_testimonial from "../../components/shopify-development-services/shopify_testmonial";
import Magento_channel from "../../components/magento-development-services/magento_channel";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_why_choose from "../../components/magento-development-services/magento_why_choose";
import Magento_website from "../../components/magento-development-services/magento_website";
import Magento_brand from "../../components/magento-development-services/magento_brand";
import Magento_craft from "../../components/magento-development-services/magento_craft";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";

const CodeIgniter_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Professional CodeIgniter Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build dynamic and high-performance web applications with Digital Minds On’s professional CodeIgniter development services for your business "
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/codeIgniter-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={CodeIgniter_developmentbannerData}/>
          <Magento_channel data={CodeIgniter_developmentchannelData}/>
          <Magento_expert  data={CodeIgniter_developmentExpertData}/>
          <Magento_why_choose  data={CodeIgniter_developmentWhyChooseData}/>
          <Magento_website  data={CodeIgniter_developmentWebsiteData}/>
          <Magento_brand data={CodeIgniter_developmentBrandData}/>
          <Magento_craft data={CodeIgniter_developmentCraftData}/>
          <Magento_rewrite data={CodeIgniter_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default CodeIgniter_development;
