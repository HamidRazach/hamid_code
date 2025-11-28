import React, { Fragment } from "react";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import Head from "next/head"; 
import { IotbannerData, IoTBrandData, IotchannelData, IotCraftData, IotExpertData, IotProductsData, IoTRewriteData, IotWebsiteData, IotWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Iot_development = () => {
  return (
    <Fragment>
       <Head>
        <title>Top IOT App Development Company | Digital Minds On</title>
        <meta 
          name="description" 
          content="Drive innovation with custom IoT app development from Digital Minds On. We build scalable, secure, and smart IoT applications to connect devices and enhance user experiences." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/iot-app-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={IotbannerData}/>
          <Magento_channel data={IotchannelData}/>
          <Magento_expert  data={IotExpertData}/>
          <Magento_why_choose  data={IotWhyChooseData}/>
          <Magento_website  data={IotWebsiteData}/>
          <Magento_products data={IotProductsData}/>
          <Magento_brand data={IoTBrandData}/>
          <Magento_craft data={IotCraftData}/>
          <Magento_rewrite data={IoTRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Iot_development;
