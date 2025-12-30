import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Data_analyticsbannerData, Data_analyticsBrandData, Data_analyticschannelData, Data_analyticsCraftData, Data_analyticsExpertData, Data_analyticsProductsData, Data_analyticsRewriteData, Data_analyticsWebsiteData, Data_analyticsWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/data-analytics-services";
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

const Data_analytics = () => {
  return (
    <Fragment>
         <Head>
        <title>Data Analytics Consulting Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Discover data analytics consulting services that turn your raw data into smart, actionable insights. Personalized strategies to help your business grow with confidence."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/data-analytics-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Data_analyticsbannerData}/>
          <Magento_channel data={Data_analyticschannelData}/>
          <Magento_expert  data={Data_analyticsExpertData}/>
          <Magento_why_choose  data={Data_analyticsWhyChooseData}/>
          <Magento_website  data={Data_analyticsWebsiteData}/>
          <Magento_products data={Data_analyticsProductsData}/>
          <Magento_brand data={Data_analyticsBrandData}/>
          <Magento_craft data={Data_analyticsCraftData}/>
          <Magento_rewrite data={Data_analyticsRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Data_analytics;
