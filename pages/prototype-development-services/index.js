import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Prototype_developmentbannerData, Prototype_developmentBrandData, Prototype_developmentchannelData, Prototype_developmentCraftData, Prototype_developmentExpertData, Prototype_developmentProductsData, Prototype_developmentRewriteData, Prototype_developmentWebsiteData, Prototype_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/prototype-development-services";
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

const Prototype_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Prototype Development Services | MVP & App Prototyping – Digital Minds On</title>
        <meta 
          name="description" 
          content="Validate your product idea with expert prototype development services. Digital Minds on builds interactive prototypes & MVPs to bring your vision to life faster and smarter." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/prototype-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Prototype_developmentbannerData}/>
          <Magento_channel data={Prototype_developmentchannelData}/>
          <Magento_expert  data={Prototype_developmentExpertData}/>
          <Magento_why_choose  data={Prototype_developmentWhyChooseData}/>
          <Magento_website  data={Prototype_developmentWebsiteData}/>
          <Magento_products data={Prototype_developmentProductsData}/>
          <Magento_brand data={Prototype_developmentBrandData}/>
          <Magento_craft data={Prototype_developmentCraftData}/>
          <Magento_rewrite data={Prototype_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Prototype_development;
