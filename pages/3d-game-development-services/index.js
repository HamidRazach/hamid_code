import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { D_GamebannerData, D_gameBrandData, D_gamechannelData, D_gameCraftData, D_gameExpertData, D_gameProductsData, D_gameRewriteData, D_gameWebsiteData, D_gameWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const D_game = () => {
  return (
    <Fragment>
       <Head>
        <title>Advanced 3d Game Development Company​ | Digital Minds On</title>
        <meta 
          name="description" 
          content="Bring ideas to life with cutting-edge 3D game development from Digital Minds On. We create visually stunning, interactive, and performance-optimized 3D games for global audiences."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/3d-game-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={D_GamebannerData}/>
          <Magento_channel data={D_gamechannelData}/>
          <Magento_expert  data={D_gameExpertData}/>
          <Magento_why_choose  data={D_gameWhyChooseData}/>
          <Magento_website  data={D_gameWebsiteData}/>
          <Magento_products data={D_gameProductsData}/>
          <Magento_brand data={D_gameBrandData}/>
          <Magento_craft data={D_gameCraftData}/>
          <Magento_rewrite data={D_gameRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default D_game;
