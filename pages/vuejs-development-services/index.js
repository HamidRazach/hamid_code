import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Vue_developmentbannerData, Vue_developmentBrandData, Vue_developmentchannelData, Vue_developmentCraftData, Vue_developmentExpertData, Vue_developmentRewriteData, Vue_developmentWebsiteData, Vue_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Shopify_testimonial from "../../components/shopify-development-services/shopify_testmonial";
import Magento_channel from "../../components/magento-development-services/magento_channel";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_why_choose from "../../components/magento-development-services/magento_why_choose";
import Magento_website from "../../components/magento-development-services/magento_website";
import Magento_brand from "../../components/magento-development-services/magento_brand";
import Magento_craft from "../../components/magento-development-services/magento_craft";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";

const Vue_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Expert Vue.js Development Services for Modern Web Applications | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On offers top-notch Vue.js development services to create fast, dynamic, and scalable web applications tailored to your needs."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/vuejs-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Vue_developmentbannerData}/>
          <Magento_channel data={Vue_developmentchannelData}/>
          <Magento_expert  data={Vue_developmentExpertData}/>
          <Magento_why_choose  data={Vue_developmentWhyChooseData}/>
          <Magento_website  data={Vue_developmentWebsiteData}/>
          <Magento_brand data={Vue_developmentBrandData}/>
          <Magento_craft data={Vue_developmentCraftData}/>
          <Magento_rewrite data={Vue_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Vue_development;
