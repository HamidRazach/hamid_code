import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Data_insightbannerData, Data_insightBrandData, Data_insightchannelData, Data_insightCraftData, Data_insightExpertData, Data_insightProductsData, Data_insightRewriteData, Data_insightWebsiteData, Data_insightWhyChooseData, woocomerenceTestimonialData } from "../../constant/data";
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

const Data_insight = () => {
  return (
    <Fragment>
         <Head>
        <title>Data Insight and Analytics Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Our Data Insight and Analytics Services designed to help you uncover hidden patterns, improve performance, and make confident, data-driven decisions with ease."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/data-insight-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Data_insightbannerData}/>
          <Magento_channel data={Data_insightchannelData}/>
          <Magento_expert  data={Data_insightExpertData}/>
          <Magento_why_choose  data={Data_insightWhyChooseData}/>
          <Magento_website  data={Data_insightWebsiteData}/>
          <Magento_products data={Data_insightProductsData}/>
          <Magento_brand data={Data_insightBrandData}/>
          <Magento_craft data={Data_insightCraftData}/>
          <Magento_rewrite data={Data_insightRewriteData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Data_insight;
