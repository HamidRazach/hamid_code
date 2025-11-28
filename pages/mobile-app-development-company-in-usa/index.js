import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { CountryStateData, BrandAppData, FeaturesValuesData, Mobile_app_development_in_usabannerData, Mobile_app_development_in_usachannelData, Mobile_app_development_in_usaCraftData, Mobile_app_development_in_usaExpertData, Mobile_app_development_in_usaProductsData, Mobile_app_development_in_usaRewriteData, Mobile_app_development_in_usaWebsiteData, Mobile_app_development_in_usaWhyChooseData, MobileDevelopmentusaData, Process_TurnsData, StackUseData } from "../../constant/data";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Magento_channel from "../../components/magento-development-services/magento_channel";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_why_choose from "../../components/magento-development-services/magento_why_choose";
import Magento_website from "../../components/magento-development-services/magento_website";
import Magento_products from "../../components/magento-development-services/magento_products";
import Magento_craft from "../../components/magento-development-services/magento_craft";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";
import Mobile_Development_Services_in_usa from "../../components/Mobile-app-development-company-in-usa/mobile_app_service";
import CountryState from "../../components/Mobile-app-development-company-in-usa/Country_State";
import Brand_app from "../../components/Mobile-app-development-company-in-usa/Brand_app";
import Features_values from "../../components/Mobile-app-development-company-in-usa/Features_values";
import Process_turn from "../../components/Mobile-app-development-company-in-usa/Process_turns";
import Stack_use from "../../components/Mobile-app-development-company-in-usa/Stack_use";

const Mobile_app_development_in_usa = () => {
  return (
    <Fragment>
         <Head>
        <title>Custom Mobile App Development Company in USA | Digital Minds On</title>
        <meta 
          name="description" 
          content="Top custom mobile app development company in the USA providing advanced and reliable mobile solutions that help your business grow."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/mobile-app-development-company-in-usa" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Mobile_app_development_in_usabannerData}/>
          <Magento_expert  data={Mobile_app_development_in_usaExpertData}/>
          <CountryState data={CountryStateData}/>
          <Brand_app data={BrandAppData}/>
          <Features_values data={FeaturesValuesData}/>
          <Process_turn data={Process_TurnsData}/>
          <Stack_use data={StackUseData}/>
          <Magento_channel data={Mobile_app_development_in_usachannelData}/>
          <Magento_why_choose  data={Mobile_app_development_in_usaWhyChooseData}/>
          <Magento_website  data={Mobile_app_development_in_usaWebsiteData}/>
          <Magento_products data={Mobile_app_development_in_usaProductsData}/>
          <Mobile_Development_Services_in_usa data={MobileDevelopmentusaData}/>
          <Magento_craft data={Mobile_app_development_in_usaCraftData}/>
          <Magento_rewrite data={Mobile_app_development_in_usaRewriteData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mobile_app_development_in_usa;
