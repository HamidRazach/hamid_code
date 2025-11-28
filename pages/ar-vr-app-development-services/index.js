import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Arv_appbannerData, Arv_appBrandData, Arv_appchannelData, Arv_appCraftData, Arv_appExpertData, Arv_appProductsData, Arv_appRewriteData, Arv_appWebsiteData, Arv_appWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Arv_app = () => {
  return (
    <Fragment>
       <Head>
        <title>AR/VR App Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Step into the future with Digital Minds On’s AR/VR app development services. We create immersive, interactive, and innovative augmented and virtual reality apps." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/ar-vr-app-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Arv_appbannerData}/>
          <Magento_channel data={Arv_appchannelData}/>
          <Magento_expert  data={Arv_appExpertData}/>
          <Magento_why_choose  data={Arv_appWhyChooseData}/>
          <Magento_website  data={Arv_appWebsiteData}/>
          <Magento_products data={Arv_appProductsData}/>
          <Magento_brand data={Arv_appBrandData}/>
          <Magento_craft data={Arv_appCraftData}/>
          <Magento_rewrite data={Arv_appRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Arv_app;
