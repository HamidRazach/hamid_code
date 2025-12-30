import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Mobile_app_development_in_ukAppData, Mobile_app_development_in_ukbannerData, Mobile_app_development_in_ukchannelData, Mobile_app_development_in_ukCraftData, Mobile_app_development_in_ukExpertData, Mobile_app_development_in_ukFeaturesValuesData, Mobile_app_development_in_ukProductsData, Mobile_app_development_in_ukRewriteData, Mobile_app_development_in_ukStateData, Mobile_app_development_in_ukWebsiteData, Mobile_app_development_in_ukWhyChooseData, MobileDevelopmentusaData, Process_TurnsData, StackUseData } from "../../constant/services/mobile-app-development-company-in-uk";
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

const Mobile_app_development_in_uk = () => {
  return (
    <Fragment>
         <Head>
        <title>custom mobile app development company in UK</title>
        <meta 
          name="description" 
          content="Top-rated custom mobile app development company in the UK delivering innovative, user-friendly, and secure mobile solutions for startups and enterprises. Transform your idea into a powerful app."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.vercel.app/mobile-app-development-company-in-uk" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Mobile_app_development_in_ukbannerData}/>
          <Magento_expert  data={Mobile_app_development_in_ukExpertData}/>
          <CountryState data={Mobile_app_development_in_ukStateData}/>
          <Brand_app data={Mobile_app_development_in_ukAppData}/>
          <Features_values data={Mobile_app_development_in_ukFeaturesValuesData}/>
          <Process_turn data={Process_TurnsData}/>
          <Stack_use data={StackUseData}/>
          <Magento_channel data={Mobile_app_development_in_ukchannelData}/>
          <Magento_why_choose  data={Mobile_app_development_in_ukWhyChooseData}/>
          <Magento_website  data={Mobile_app_development_in_ukWebsiteData}/>
          <Magento_products data={Mobile_app_development_in_ukProductsData}/>
          <Mobile_Development_Services_in_usa data={MobileDevelopmentusaData}/>
          <Magento_craft data={Mobile_app_development_in_ukCraftData}/>
          <Magento_rewrite data={Mobile_app_development_in_ukRewriteData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mobile_app_development_in_uk;
