import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Data_consulting_servicesbannerData, Data_consulting_servicesBrandData, Data_consulting_serviceschannelData, Data_consulting_servicesCraftData, Data_consulting_servicesExpertData, Data_consulting_servicesProductsData, Data_consulting_servicesRewriteData, Data_consulting_servicesWebsiteData, Data_consulting_servicesWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/data-consulting-services";
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

const Data_consulting_services = () => {
  return (
    <Fragment>
         <Head>
        <title>Data Consulting Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Turn your data into insights with Digital Minds On. We help businesses make smarter decisions through expert data consulting solutions."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/data-consulting-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Data_consulting_servicesbannerData}/>
          <Magento_channel data={Data_consulting_serviceschannelData}/>
          <Magento_expert  data={Data_consulting_servicesExpertData}/>
          <Magento_why_choose  data={Data_consulting_servicesWhyChooseData}/>
          <Magento_website  data={Data_consulting_servicesWebsiteData}/>
          <Magento_products data={Data_consulting_servicesProductsData}/>
          <Magento_brand data={Data_consulting_servicesBrandData}/>
          <Magento_craft data={Data_consulting_servicesCraftData}/>
          <Magento_rewrite data={Data_consulting_servicesRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Data_consulting_services;
