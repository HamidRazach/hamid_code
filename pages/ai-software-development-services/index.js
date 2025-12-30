import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Ai_developmentbannerData, Ai_developmentBrandData, Ai_developmentchannelData, Ai_developmentCraftData, Ai_developmentExpertData, Ai_developmentProductsData, Ai_developmentRewriteData, Ai_developmentWebsiteData, Ai_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/ai-software-development-services";
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

const Ai_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Smart AI Software Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On delivers intelligent, future ready software that helps businesses automate, optimize, and scale. Let us turn your vision into cutting-edge digital solutions."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/ai-software-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Ai_developmentbannerData}/>
          <Magento_channel data={Ai_developmentchannelData}/>
          <Magento_expert  data={Ai_developmentExpertData}/>
          <Magento_why_choose  data={Ai_developmentWhyChooseData}/>
          <Magento_website  data={Ai_developmentWebsiteData}/>
          <Magento_products data={Ai_developmentProductsData}/>
          <Magento_brand data={Ai_developmentBrandData}/>
          <Magento_craft data={Ai_developmentCraftData}/>
          <Magento_rewrite data={Ai_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Ai_development;
