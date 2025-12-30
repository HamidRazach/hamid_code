import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Mobile_app_development_in_canadaAppData, Mobile_app_development_in_canadabannerData, Mobile_app_development_in_canadachannelData, Mobile_app_development_in_canadaCraftData, Mobile_app_development_in_canadaExpertData, Mobile_app_development_in_canadaProductsData, Mobile_app_development_in_canadaRewriteData, Mobile_app_development_in_canadaStackUseData, Mobile_app_development_in_canadaStateData, Mobile_app_development_in_canadausaData, Mobile_app_development_in_canadaWebsiteData, Mobile_app_development_in_canadaWhyChooseData, Mobile_app_development_in_ukFeaturesValuesData, Process_TurnsData } from "../../constant/services/mobile-app-development-company-in-canada";
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

const Mobile_app_development_in_canada = () => {
  return (
    <Fragment>
         <Head>
        <title>Mobile App Development Company in Canada | Digital Minds On</title>
        <meta 
          name="description" 
          content="Reliable mobile app development company in Canada offering custom iOS and Android solutions. We build secure, fast, and user-friendly apps for all industries."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.vercel.app/mobile-app-development-company-in-canada" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Mobile_app_development_in_canadabannerData}/>
          <Magento_expert  data={Mobile_app_development_in_canadaExpertData}/>
          <CountryState data={Mobile_app_development_in_canadaStateData}/>
          <Brand_app data={Mobile_app_development_in_canadaAppData}/>
          <Features_values data={Mobile_app_development_in_ukFeaturesValuesData}/>
          <Process_turn data={Process_TurnsData}/>
          <Stack_use data={Mobile_app_development_in_canadaStackUseData}/>
          <Magento_channel data={Mobile_app_development_in_canadachannelData}/>
          <Magento_why_choose  data={Mobile_app_development_in_canadaWhyChooseData}/>
          <Magento_website  data={Mobile_app_development_in_canadaWebsiteData}/>
          <Magento_products data={Mobile_app_development_in_canadaProductsData}/>
          <Mobile_Development_Services_in_usa data={Mobile_app_development_in_canadausaData}/>
          <Magento_craft data={Mobile_app_development_in_canadaCraftData}/>
          <Magento_rewrite data={Mobile_app_development_in_canadaRewriteData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mobile_app_development_in_canada;
