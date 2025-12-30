import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { UnrealbannerData, UnrealBrandData, UnrealchannelData, UnrealCraftData, UnrealExpertData, UnrealProductsData, UnrealRewriteData, UnrealWebsiteData, UnrealWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/unreal-game-development-services";
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

const Unreal_app = () => {
  return (
    <Fragment>
        <Head>
        <title>Unreal Game Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Leverage the power of Unreal Engine with Digital Minds On. Our Unreal game development experts build immersive, high-performance, and visually rich games." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/unreal-game-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={UnrealbannerData}/>
          <Magento_channel data={UnrealchannelData}/>
          <Magento_expert  data={UnrealExpertData}/>
          <Magento_why_choose  data={UnrealWhyChooseData}/>
          <Magento_website  data={UnrealWebsiteData}/>
          <Magento_products data={UnrealProductsData}/>
          <Magento_brand data={UnrealBrandData}/>
          <Magento_craft data={UnrealCraftData}/>
          <Magento_rewrite data={UnrealRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Unreal_app;
