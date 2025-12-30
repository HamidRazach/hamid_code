import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Mvp_developmentbannerData, Mvp_developmentchannelData, Mvp_developmentCounterData, Mvp_developmentCraft_secData, Mvp_developmentCraftData, Mvp_developmentdedicatedData, Mvp_developmentExpertData, Mvp_developmentMockupData, Mvp_developmentpostData, Mvp_developmentProcessData, Mvp_developmentProductsData, Mvp_developmentRobustData, Mvp_developmenttaskData } from "../../constant/services/mvp-development-services";
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

const Mvp_development = () => {
  return (
    <Fragment>
        <Head>
        <title>MVP Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Launch your startup faster with MVP development from Digital Minds On. We build scalable, cost-effective MVPs to validate ideas and attract investors." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/mvp-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Mvp_developmentbannerData}/>
          <Magento_channel data={Mvp_developmentchannelData}/>
          <Dedicated_Professional data={Mvp_developmentdedicatedData}/>
          <Development_Process data={Mvp_developmentProcessData}/>
          <Task_Management data={Mvp_developmenttaskData}/>
          <Post_Deployment data={Mvp_developmentpostData}/>
          <Counter_sec data={Mvp_developmentCounterData}/>
          <Craft_sec data={Mvp_developmentCraft_secData}/>
          <Mockup_mvp data={Mvp_developmentMockupData}/>
          <Robust_enterprise data={Mvp_developmentRobustData}/>
          <Magento_products data={Mvp_developmentProductsData}/>
          <Magento_expert  data={Mvp_developmentExpertData}/>
          <Magento_craft data={Mvp_developmentCraftData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mvp_development;
