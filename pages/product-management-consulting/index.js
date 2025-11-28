import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Product_servicesbannerData, Product_servicesBrandData, Product_serviceschannelData, Product_servicesCraftData, Product_servicesExpertData, Product_servicesProductsData, Product_servicesRewriteData, Product_servicesWebsiteData, Product_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Product_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Product Management Consulting Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Improve product strategy, team alignment, and delivery with expert product management consulting. We help companies build better products, faster — with lasting results."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/product-management-consulting" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Product_servicesbannerData}/>
          <Magento_channel data={Product_serviceschannelData}/>
          <Magento_expert  data={Product_servicesExpertData}/>
          <Magento_why_choose  data={Product_servicesWhyChooseData}/>
          <Magento_website  data={Product_servicesWebsiteData}/>
          <Magento_products data={Product_servicesProductsData}/>
          <Magento_brand data={Product_servicesBrandData}/>
          <Magento_craft data={Product_servicesCraftData}/>
          <Magento_rewrite data={Product_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Product_services;
