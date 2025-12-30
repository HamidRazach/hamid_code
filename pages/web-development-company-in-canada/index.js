import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { ratingDevelopmentData, Web_app_development_in_canadabannerData, Web_app_development_in_canadaBroadenBusinessData, Web_app_development_in_canadachannelData, Web_app_development_in_canadaCountryStateData, Web_app_development_in_canadaCraftData, Web_app_development_in_canadaData, Web_app_development_in_canadaExpertData, Web_app_development_in_canadaProductsData, Web_app_development_in_canadaRewriteData, Web_app_development_in_canadatechStackData, Web_app_development_in_canadaWebflowDevelopmentData, Web_app_development_in_canadaWebsiteData, Web_app_development_in_ukGrowthData } from "../../constant/services/web-development-company-in-canada";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Magento_channel from "../../components/magento-development-services/magento_channel";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_website from "../../components/magento-development-services/magento_website";
import Magento_products from "../../components/magento-development-services/magento_products";
import Magento_craft from "../../components/magento-development-services/magento_craft";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";
import Mobile_Development_Services_in_usa from "../../components/Mobile-app-development-company-in-usa/mobile_app_service";
import CountryState from "../../components/Mobile-app-development-company-in-usa/Country_State";
import Boarden_Business from "../../components/web-development-company-in-usa/Broaden_Business";
import Tech_Stack from "../../components/web-development-company-in-usa/Tech_Stack";
import Webflow_development from "../../components/web-development-company-in-usa/Workflow_development";
import Rating_development from "../../components/web-development-company-in-usa/Rating_development";
import Dimensional_growth from "../../components/web-development-company-in-usa/Dimensional_growth";

const Web_app_development_in_canada = () => {
  return (
    <Fragment>
         <Head>
        <title>Premier Web Development Company in Canada | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds ON is a premier web development company in Canada. We build custom, high-performance websites that drive growth, user experience, and strengthen your digital presence nationwide."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.vercel.app/web-development-company-in-canada" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Web_app_development_in_canadabannerData}/>
          <Mobile_Development_Services_in_usa data={Web_app_development_in_canadaData}/>
          <CountryState data={Web_app_development_in_canadaCountryStateData}/>
          <Boarden_Business data={Web_app_development_in_canadaBroadenBusinessData}/>
          <Webflow_development data={Web_app_development_in_canadaWebflowDevelopmentData}/>
          <Tech_Stack data={Web_app_development_in_canadatechStackData}/>
          <Magento_channel data={Web_app_development_in_canadachannelData}/>
          <Rating_development data={ratingDevelopmentData}/>
          <Magento_expert  data={Web_app_development_in_canadaExpertData}/>
          <Magento_products data={Web_app_development_in_canadaProductsData}/>
          <Magento_website  data={Web_app_development_in_canadaWebsiteData}/>
           <Dimensional_growth data={Web_app_development_in_ukGrowthData}/>
          <Magento_craft data={Web_app_development_in_canadaCraftData}/>
          <Magento_rewrite data={Web_app_development_in_canadaRewriteData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Web_app_development_in_canada;
