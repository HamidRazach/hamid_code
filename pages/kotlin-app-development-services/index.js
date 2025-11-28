import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { kotlinbannerData, kotlinBrandData, kotlinchannelData, kotlinCraftData, kotlinExpertData, kotlinProductsData, kotlinRewriteData, kotlinWebsiteData, kotlinWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const kotlin_development = () => {
  return (
    <Fragment>
       <Head>
        <title>Kotlin App Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On offers professional Kotlin app development services for Android. We build secure, scalable, and high-performing mobile applications." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/kotlin-app-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={kotlinbannerData}/>
          <Magento_channel data={kotlinchannelData}/>
          <Magento_expert  data={kotlinExpertData}/>
          <Magento_why_choose  data={kotlinWhyChooseData}/>
          <Magento_website  data={kotlinWebsiteData}/>
          <Magento_products data={kotlinProductsData}/>
          <Magento_brand data={kotlinBrandData}/>
          <Magento_craft data={kotlinCraftData}/>
          <Magento_rewrite data={kotlinRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default kotlin_development;
