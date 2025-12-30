import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Android_gamebannerData, Android_gameBrandData, Android_gamechannelData, Android_gameCraftData, Android_gameExpertData, Android_gameProductsData, Android_gameRewriteData, Android_gameWebsiteData, Android_gameWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/android-game-development-services";
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

const Android_game = () => {
  return (
    <Fragment>
        <Head>
        <title>Android Game Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Bring gaming ideas to life with Digital Minds On’s Android game development services. We create fun, interactive, and high-performing Android games for all genres." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/android-game-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Android_gamebannerData}/>
          <Magento_channel data={Android_gamechannelData}/>
          <Magento_expert  data={Android_gameExpertData}/>
          <Magento_why_choose  data={Android_gameWhyChooseData}/>
          <Magento_website  data={Android_gameWebsiteData}/>
          <Magento_products data={Android_gameProductsData}/>
          <Magento_brand data={Android_gameBrandData}/>
          <Magento_craft data={Android_gameCraftData}/>
          <Magento_rewrite data={Android_gameRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Android_game;
