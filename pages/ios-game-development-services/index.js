import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Ios_gamebannerData, Ios_gameBrandData, Ios_gamechannelData, Ios_gameCraftData, Ios_gameExpertData, Ios_gameProductsData, Ios_gameRewriteData, Ios_gameWebsiteData, Ios_gameWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Ios_game = () => {
  return (
    <Fragment>
        <Head>
        <title>iOS Game Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Create engaging iOS games with Digital Minds On. Our expert developers design and build high-quality iOS gaming apps with stunning graphics and smooth performance." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/ios-game-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Ios_gamebannerData}/>
          <Magento_channel data={Ios_gamechannelData}/>
          <Magento_expert  data={Ios_gameExpertData}/>
          <Magento_why_choose  data={Ios_gameWhyChooseData}/>
          <Magento_website  data={Ios_gameWebsiteData}/>
          <Magento_products data={Ios_gameProductsData}/>
          <Magento_brand data={Ios_gameBrandData}/>
          <Magento_craft data={Ios_gameCraftData}/>
          <Magento_rewrite data={Ios_gameRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Ios_game;
