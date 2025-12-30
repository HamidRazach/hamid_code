import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { shopifyData, shopifyTestimonialData } from "../../constant/services/shopify-development-services";
import Shopify_channel from "../../components/shopify-development-services/shopify-channel";
import Shopify_expert from "../../components/shopify-development-services/shopify-expert";
import Shopify_Why_choose from "../../components/shopify-development-services/shopify_why_choose";
import Shopify_website from "../../components/shopify-development-services/shopify-website";
import Shopify_products from "../../components/shopify-development-services/shopify_product";
import Shopify_brand from "../../components/shopify-development-services/shopify-brand";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Shopify_craft from "../../components/shopify-development-services/shopify_Craft";
import ShopifyRewrite from "../../components/shopify-development-services/shopify_rewrite";
import Shopify_testimonial from "../../components/shopify-development-services/shopify_testmonial";

const Shopify_development = () => {
  return (
    <Fragment>
       <Head>
        <title>Advanced Shopify Website Development Company | Digital Minds On</title>
        <meta 
          name="description" 
          content=" Launch and scale your eCommerce business with Digital Minds On’s Shopify development services. We create secure, high-performing, and custom Shopify stores tailored to your needs." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/shopify-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={shopifyData}/>
          <Shopify_channel />
          <Shopify_expert />
          <Shopify_Why_choose />
          <Shopify_website />
          <Shopify_products />
          <Shopify_brand />
          <Shopify_craft /> 
          <ShopifyRewrite />
          <Shopify_testimonial data={shopifyTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Shopify_development;
