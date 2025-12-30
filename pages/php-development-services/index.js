import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Php_developmentbannerData, Php_developmentBrandData, Php_developmentchannelData, Php_developmentCraftData, Php_developmentExpertData, Php_developmentProductsData, Php_developmentRewriteData, Php_developmentWebsiteData, Php_developmentWhyChooseData, woocomerenceTestimonialData } from "../../constant/services/php-development-services";
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

const Php_development = () => {
  return (
    <Fragment>
         <Head>
        <title>PHP Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On provides expert PHP development services, offering customized, high-quality solutions to help your business grow with cutting-edge technology."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/php-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Php_developmentbannerData}/>
          <Magento_channel data={Php_developmentchannelData}/>
          <Magento_expert  data={Php_developmentExpertData}/>
          <Magento_why_choose  data={Php_developmentWhyChooseData}/>
          <Magento_website  data={Php_developmentWebsiteData}/>
          <Magento_products data={Php_developmentProductsData}/>
          <Magento_brand data={Php_developmentBrandData}/>
          <Magento_craft data={Php_developmentCraftData}/>
          <Magento_rewrite data={Php_developmentRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Php_development;
