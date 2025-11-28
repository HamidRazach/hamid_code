import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { bigcomerenceBrandData, bigcomerenceCraftData, bigcomerenceProductsData, bigcomerenceRewriteData, bigcomerenceWebsiteData, bigcomerenceWhyChooseData, BigcommercechannelData, bigcommerceData, BigcommerceExpertData, woocomerenceTestimonialData } from "../../constant/data";
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

const Bigcommerce_development = () => {
  return (
    <Fragment>
        <Head>
        <title>BigCommerce Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build a robust eCommerce store with our BigCommerce development services. Digital Minds On creates scalable, SEO-friendly, and feature-rich online stores." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/bigcommerce-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={bigcommerceData}/>
          <Magento_channel data={BigcommercechannelData}/>
          <Magento_expert  data={BigcommerceExpertData}/>
          <Magento_why_choose  data={bigcomerenceWhyChooseData}/>
          <Magento_website  data={bigcomerenceWebsiteData}/>
          <Magento_products data={bigcomerenceProductsData}/>
          <Magento_brand data={bigcomerenceBrandData}/>
          <Magento_craft data={bigcomerenceCraftData}/>
          <Magento_rewrite data={bigcomerenceRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Bigcommerce_development;
