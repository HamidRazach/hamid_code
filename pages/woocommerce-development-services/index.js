import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { woocomerenceBrandData, woocomerenceCraftData, woocomerenceProductsData, woocomerenceRewriteData, woocomerenceTestimonialData, woocomerenceWebsiteData, woocomerenceWhyChooseData, woocommercechannelData, woocommerceData, woocommerenceExpertData } from "../../constant/data";
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

const Woocommerce_development = () => {
  return (
    <Fragment>
        <Head>
        <title>WooCommerce Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build a feature-rich WooCommerce store with Digital Minds On. Our experts provide custom WooCommerce solutions to enhance online shopping experiences." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/woocommerce-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={woocommerceData}/>
          <Magento_channel data={woocommercechannelData}/>
          <Magento_expert  data={woocommerenceExpertData}/>
          <Magento_why_choose  data={woocomerenceWhyChooseData}/>
          <Magento_website  data={woocomerenceWebsiteData}/>
          <Magento_products data={woocomerenceProductsData}/>
          <Magento_brand data={woocomerenceBrandData}/>
          <Magento_craft data={woocomerenceCraftData}/>
          <Magento_rewrite data={woocomerenceRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Woocommerce_development;
