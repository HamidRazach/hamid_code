import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { WearablebannerData, WearableBrandData, WearablechannelData, WearableCraftData, WearableExpertData, WearableProductsData, WearableRewriteData, WearableWebsiteData, WearableWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Wearable_development = () => {
  return (
    <Fragment>
       <Head>
        <title>Wearable App Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build seamless wearable apps with Digital Minds On. Our experts design user-friendly apps for smartwatches, fitness bands, and wearable devices to enhance digital experiences." />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/wearable-app-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={WearablebannerData}/>
          <Magento_channel data={WearablechannelData}/>
          <Magento_expert  data={WearableExpertData}/>
          <Magento_why_choose  data={WearableWhyChooseData}/>
          <Magento_website  data={WearableWebsiteData}/>
          <Magento_products data={WearableProductsData}/>
          <Magento_brand data={WearableBrandData}/>
          <Magento_craft data={WearableCraftData}/>
          <Magento_rewrite data={WearableRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Wearable_development;
