import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Angular_developmentbannerData, Angular_developmentBrandData, Angular_developmentchannelData, Angular_developmentCraftData, Angular_developmentExpertData, Angular_developmentProductsData, Angular_developmentRewriteData, Angular_developmentWebsiteData, Angular_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/angular-development-services";
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

const Angular_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Angular Development Services | Build Dynamic Web Applications | Digital Minds On</title>
        <meta 
          name="description" 
          content="Get expert Angular development services to create fast, scalable, and interactive web applications tailored to your business needs."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/angular-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Angular_developmentbannerData}/>
          <Magento_channel data={Angular_developmentchannelData}/>
          <Magento_expert  data={Angular_developmentExpertData}/>
          <Magento_why_choose  data={Angular_developmentWhyChooseData}/>
          <Magento_website  data={Angular_developmentWebsiteData}/>
          <Magento_products data={Angular_developmentProductsData}/>
          <Magento_brand data={Angular_developmentBrandData}/>
          <Magento_craft data={Angular_developmentCraftData}/>
          <Magento_rewrite data={Angular_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Angular_development;
