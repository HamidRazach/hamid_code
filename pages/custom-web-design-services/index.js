import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Custom_web_designbannerData, Custom_web_designchannelData, Custom_web_designCounterData, Custom_web_designCraft_secData, Custom_web_designCraftData, Custom_web_designedicatedData, Custom_web_designExpertData, Custom_web_designMockupData, Custom_web_designpostData, Custom_web_designProcessData, Custom_web_designProductsData, Custom_web_designRobustData, Custom_web_designtaskData } from "../../constant/data";
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

const Custom_web_design = () => {
  return (
    <Fragment>
        <Head>
        <title>Build a Powerful Online Identity with Professional Web Design Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On provides creative and responsive web design services that enhance your brand’s online presence, engage visitors, and drive real business growth." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/custom-web-design-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Custom_web_designbannerData}/>
          <Magento_channel data={Custom_web_designchannelData}/>
          <Dedicated_Professional data={Custom_web_designedicatedData}/>
          <Development_Process data={Custom_web_designProcessData}/>
          <Task_Management data={Custom_web_designtaskData}/>
          <Post_Deployment data={Custom_web_designpostData}/>
          <Counter_sec data={Custom_web_designCounterData}/>
          <Craft_sec data={Custom_web_designCraft_secData}/>
          <Mockup_mvp data={Custom_web_designMockupData}/>
          <Robust_enterprise data={Custom_web_designRobustData}/>
          <Magento_products data={Custom_web_designProductsData}/>
          <Magento_expert  data={Custom_web_designExpertData}/>
          <Magento_craft data={Custom_web_designCraftData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Custom_web_design;
