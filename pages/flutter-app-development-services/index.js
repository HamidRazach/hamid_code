import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { FlutterbannerData, FlutterBrandData, FlutterchannelData, FlutterCraftData, FlutterExpertData, FlutterProductsData, flutterRewriteData, FlutterWebsiteData, flutterWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/flutter-app-development-services";
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

const Flutter_app = () => {
  return (
    <Fragment>
       <Head>
        <title>Flutter App Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build high-performance cross-platform apps with Flutter. Digital Minds On offers Flutter app development services to deliver seamless Android and iOS experiences." 
        />
         <link 
          rel="canonical" 
          href="https://digitalmindson.com/flutter-app-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={FlutterbannerData}/>
          <Magento_channel data={FlutterchannelData}/>
          <Magento_expert  data={FlutterExpertData}/>
          <Magento_why_choose  data={flutterWhyChooseData}/>
          <Magento_website  data={FlutterWebsiteData}/>
          <Magento_products data={FlutterProductsData}/>
          <Magento_brand data={FlutterBrandData}/>
          <Magento_craft data={FlutterCraftData}/>
          <Magento_rewrite data={flutterRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Flutter_app;
