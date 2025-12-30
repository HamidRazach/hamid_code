import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Crm_developmentbannerData, Crm_developmentBrandData, Crm_developmentchannelData, Crm_developmentCraftData, Crm_developmentExpertData, Crm_developmentProductsData, Crm_developmentRewriteData, Crm_developmentWebsiteData, Crm_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/crm-software-development-services";
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

const Crm_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Boost Customer Relationships with CRM Software Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On creates custom CRM software solutions to improve customer engagement, automate sales, and drive business growth."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/crm-software-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Crm_developmentbannerData}/>
          <Magento_channel data={Crm_developmentchannelData}/>
          <Magento_expert  data={Crm_developmentExpertData}/>
          <Magento_why_choose  data={Crm_developmentWhyChooseData}/>
          <Magento_website  data={Crm_developmentWebsiteData}/>
          <Magento_products data={Crm_developmentProductsData}/>
          <Magento_brand data={Crm_developmentBrandData}/>
          <Magento_craft data={Crm_developmentCraftData}/>
          <Magento_rewrite data={Crm_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Crm_development;
