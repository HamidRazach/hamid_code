import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Enterprise_developmentbannerData, Enterprise_developmentchannelData, Enterprise_developmentCounterData, Enterprise_developmentCraft_secData, Enterprise_developmentCraftData, Enterprise_developmentedicatedData, Enterprise_developmentExpertData, Enterprise_developmentMockupData, Enterprise_developmentpostData, Enterprise_developmentProcessData, Enterprise_developmentProductsData, Enterprise_developmentRobustData, Enterprise_developmenttaskData } from "../../constant/data";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Magento_channel from "../../components/magento-development-services/magento_channel";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_products from "../../components/magento-development-services/magento_products";
import Magento_craft from "../../components/magento-development-services/magento_craft";
import Dedicated_Professional from "../../components/mvp-development-services/Dedicated_Professional";
import Development_Process from "../../components/mvp-development-services/Development_Process";
import Task_Management from "../../components/mvp-development-services/Task_Management";
import Post_Deployment from "../../components/mvp-development-services/Post_Deployment";
import Counter_sec from "../../components/mvp-development-services/Counter_sec";
import Craft_sec from "../../components/mvp-development-services/Craft_sec";
import Mockup_mvp from "../../components/mvp-development-services/Mockup_mvp";
import Robust_enterprise from "../../components/mvp-development-services/Robust_enterprise";

const Enterprise_development = () => {
  return (
    <Fragment>
        <Head>
        <title>Empower Your Business with Custom Enterprise Software Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On builds custom enterprise software development services to boost efficiency, streamline operations, and drive business growth." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/enterprise-software-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Enterprise_developmentbannerData}/>
          <Magento_channel data={Enterprise_developmentchannelData}/>
          <Dedicated_Professional data={Enterprise_developmentedicatedData}/>
          <Development_Process data={Enterprise_developmentProcessData}/>
          <Task_Management data={Enterprise_developmenttaskData}/>
          <Post_Deployment data={Enterprise_developmentpostData}/>
          <Counter_sec data={Enterprise_developmentCounterData}/>
          <Craft_sec data={Enterprise_developmentCraft_secData}/>
          <Mockup_mvp data={Enterprise_developmentMockupData}/>
          <Robust_enterprise data={Enterprise_developmentRobustData}/>
          <Magento_products data={Enterprise_developmentProductsData}/>
          <Magento_expert  data={Enterprise_developmentExpertData}/>
          <Magento_craft data={Enterprise_developmentCraftData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Enterprise_development;
