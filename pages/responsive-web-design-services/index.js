import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Responsive_web_designbannerData, Responsive_web_designBrandData, Responsive_web_designchannelData, Responsive_web_designCraftData, Responsive_web_designExpertData, Responsive_web_designProductsData, Responsive_web_designRewriteData, Responsive_web_designWebsiteData, Responsive_web_designWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Responsive_web_design = () => {
  return (
    <Fragment>
         <Head>
        <title>Transform Your Online Presence with Responsive Web Design Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On offers professional responsive web design services that adapt seamlessly to any device, boosting user experience and engagement for your business."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/responsive-web-design-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Responsive_web_designbannerData}/>
          <Magento_channel data={Responsive_web_designchannelData}/>
          <Magento_expert  data={Responsive_web_designExpertData}/>
          <Magento_why_choose  data={Responsive_web_designWhyChooseData}/>
          <Magento_website  data={Responsive_web_designWebsiteData}/>
          <Magento_products data={Responsive_web_designProductsData}/>
          <Magento_brand data={Responsive_web_designBrandData}/>
          <Magento_craft data={Responsive_web_designCraftData}/>
          <Magento_rewrite data={Responsive_web_designRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Responsive_web_design;
