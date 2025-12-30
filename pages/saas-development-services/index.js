import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Sass_developmentbannerData, Sass_developmentchannelData, Sass_developmentCounterData, Sass_developmentCraft_secData, Sass_developmentCraftData, Sass_developmentedicatedData, Sass_developmentExpertData, Sass_developmentMockupData, Sass_developmentpostData, Sass_developmentProcessData, Sass_developmentProductsData, Sass_developmentRobustData, Sass_developmenttaskData } from "../../constant/services/saas-development-services";
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

const Sass_development = () => {
  return (
    <Fragment>
        <Head>
        <title>Custom SaaS Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Authorize your business with Custom SaaS Development Services. We build scalable, secure, and high-performance cloud applications tailored to your goals."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/enterprise-software-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Sass_developmentbannerData}/>
          <Magento_channel data={Sass_developmentchannelData}/>
          <Dedicated_Professional data={Sass_developmentedicatedData}/>
          <Development_Process data={Sass_developmentProcessData}/>
          <Task_Management data={Sass_developmenttaskData}/>
          <Post_Deployment data={Sass_developmentpostData}/>
          <Counter_sec data={Sass_developmentCounterData}/>
          <Craft_sec data={Sass_developmentCraft_secData}/>
          <Mockup_mvp data={Sass_developmentMockupData}/>
          <Robust_enterprise data={Sass_developmentRobustData}/>
          <Magento_products data={Sass_developmentProductsData}/>
          <Magento_expert  data={Sass_developmentExpertData}/>
          <Magento_craft data={Sass_developmentCraftData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Sass_development;
