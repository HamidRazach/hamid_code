import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { NftbannerData, NftBrandData, NftchannelData, NftCraftData, NftExpertData, NftProductsData, NftRewriteData, NftWebsiteData, NftWhyChooseData, UnityCraftData, UnityRewriteData, woocomerenceTestimonialData } from "../../constant/data";
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

const Nft_app = () => {
  return (
    <Fragment>
       <Head>
        <title>NFT Game Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Enter the future of gaming with NFT game development by Digital Minds On. We create blockchain-based NFT games that offer unique digital ownership experiences." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/nft-game-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={NftbannerData}/>
          <Magento_channel data={NftchannelData}/>
          <Magento_expert  data={NftExpertData}/>
          <Magento_why_choose  data={NftWhyChooseData}/>
          <Magento_website  data={NftWebsiteData}/>
          <Magento_products data={NftProductsData}/>
          <Magento_brand data={NftBrandData}/>
          <Magento_craft data={NftCraftData}/>
          <Magento_rewrite data={NftRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Nft_app;
