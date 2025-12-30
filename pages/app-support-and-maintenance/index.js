import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { App_maintenance_supportbannerData, App_maintenance_supportBrandData, App_maintenance_supportchannelData, App_maintenance_supportCraftData, App_maintenance_supportExpertData, App_maintenance_supportProductsData, App_maintenance_supportRewriteData, App_maintenance_supportWebsiteData, App_maintenance_supportWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/app-support-and-maintenance";
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

const App_maintenance_support = () => {
  return (
    <Fragment>
         <Head>
        <title>App Support & Maintenance Services | Keep Your Apps Running Smoothly</title>
        <meta 
          name="description" 
          content="Ensure your app’s peak performance with our support and maintenance services. We provide updates, bug fixes, and continuous optimization."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/app-support-and-maintenance" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={App_maintenance_supportbannerData}/>
          <Magento_channel data={App_maintenance_supportchannelData}/>
          <Magento_expert  data={App_maintenance_supportExpertData}/>
          <Magento_why_choose  data={App_maintenance_supportWhyChooseData}/>
          <Magento_website  data={App_maintenance_supportWebsiteData}/>
          <Magento_products data={App_maintenance_supportProductsData}/>
          <Magento_brand data={App_maintenance_supportBrandData}/>
          <Magento_craft data={App_maintenance_supportCraftData}/>
          <Magento_rewrite data={App_maintenance_supportRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default App_maintenance_support;
