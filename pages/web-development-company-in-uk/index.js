import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { ratingDevelopmentData, Web_app_development_in_ukbannerData, Web_app_development_in_ukBroadenBusinessData, Web_app_development_in_ukchannelData, Web_app_development_in_ukCountryStateData, Web_app_development_in_ukCraftData, Web_app_development_in_ukData, Web_app_development_in_ukExpertData, Web_app_development_in_ukGrowthData, Web_app_development_in_ukProductsData, Web_app_development_in_ukRewriteData, Web_app_development_in_uktechStackData, Web_app_development_in_ukWebflowDevelopmentData, Web_app_development_in_ukWebsiteData } from "../../constant/services/web-development-company-in-uk";
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

const Web_app_development_in_uk = () => {
  return (
    <Fragment>
         <Head>
        <title>Custom Website Development Company in UK | Digital Minds On</title>
        <meta 
          name="description" 
          content="Professional Custom Website Development Company in the UK delivering tailored, responsive, and high-performance websites for businesses of all sizes."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.vercel.app/web-development-company-in-uk" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Web_app_development_in_ukbannerData}/>
          <Mobile_Development_Services_in_usa data={Web_app_development_in_ukData}/>
          <CountryState data={Web_app_development_in_ukCountryStateData}/>
          <Boarden_Business data={Web_app_development_in_ukBroadenBusinessData}/>
          <Webflow_development data={Web_app_development_in_ukWebflowDevelopmentData}/>
          <Tech_Stack data={Web_app_development_in_uktechStackData}/>
          <Magento_channel data={Web_app_development_in_ukchannelData}/>
          <Rating_development data={ratingDevelopmentData}/>
          <Magento_expert  data={Web_app_development_in_ukExpertData}/>
          <Magento_products data={Web_app_development_in_ukProductsData}/>
          <Magento_website  data={Web_app_development_in_ukWebsiteData}/>
           <Dimensional_growth data={Web_app_development_in_ukGrowthData}/>
          <Magento_craft data={Web_app_development_in_ukCraftData}/>
          <Magento_rewrite data={Web_app_development_in_ukRewriteData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Web_app_development_in_uk;
