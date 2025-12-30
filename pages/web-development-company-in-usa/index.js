import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { CountryStateData, ratingDevelopmentData, techStackData, Web_app_development_in_usabannerData, Web_app_development_in_usaBroadenBusinessData, Web_app_development_in_usachannelData, Web_app_development_in_usaCraftData, Web_app_development_in_usaData, Web_app_development_in_usaExpertData, Web_app_development_in_usaGrowthData, Web_app_development_in_usaProductsData, Web_app_development_in_usaRewriteData, Web_app_development_in_usaWebflowDevelopmentData, Web_app_development_in_usaWebsiteData } from "../../constant/services/web-development-company-in-usa";
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

const Web_app_development_in_usa = () => {
  return (
    <Fragment>
         <Head>
        <title>Advanced Web Development Services in USA | Digital Minds On</title>
        <meta 
          name="description" 
          content="Get advanced web development services in the USA with expert solutions, custom designs, and innovative technology to boost your online presence and growth."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/web-development-company-in-usa" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Web_app_development_in_usabannerData}/>
          <Mobile_Development_Services_in_usa data={Web_app_development_in_usaData}/>
          <CountryState data={CountryStateData}/>
          <Boarden_Business data={Web_app_development_in_usaBroadenBusinessData}/>
          <Webflow_development data={Web_app_development_in_usaWebflowDevelopmentData}/>
          <Tech_Stack data={techStackData}/>
          <Magento_channel data={Web_app_development_in_usachannelData}/>
          <Rating_development data={ratingDevelopmentData}/>
          <Magento_expert  data={Web_app_development_in_usaExpertData}/>
          <Magento_products data={Web_app_development_in_usaProductsData}/>
          <Magento_website  data={Web_app_development_in_usaWebsiteData}/>
           <Dimensional_growth data={Web_app_development_in_usaGrowthData}/>
          <Magento_craft data={Web_app_development_in_usaCraftData}/>
          <Magento_rewrite data={Web_app_development_in_usaRewriteData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Web_app_development_in_usa;
