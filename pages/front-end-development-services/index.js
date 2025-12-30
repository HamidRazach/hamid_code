import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Frontend_developmentbannerData, Frontend_DevelopmentCounterData, Frontend_developmentExpertData, Frontend_developmentProductsData, Frontend_developmentRewriteData, Frontend_ExpData, FrontendRewriteData, woocomerenceTestimonialData } from "../../constant/services/front-end-development-services";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Shopify_testimonial from "../../components/shopify-development-services/shopify_testmonial";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_products from "../../components/magento-development-services/magento_products";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";
import Counter_project from "../../components/front-end-development-services/counter_project";
import Frontend_rewrite from "../../components/front-end-development-services/Front-End-Development";
import Exp_sec from "../../components/front-end-development-services/exp_sec";

const Frontend_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Front-End Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Enhance your website with expert front-end development services by Digital Minds On. We craft responsive, fast, and user-friendly digital experiences." />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/front-end-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Frontend_developmentbannerData}/>
          <Counter_project data={Frontend_DevelopmentCounterData}/>
          <Magento_expert  data={Frontend_developmentExpertData}/>
          <Frontend_rewrite data={FrontendRewriteData}/>
          <Exp_sec data={Frontend_ExpData}/>
          <Magento_rewrite data={Frontend_developmentRewriteData}/>
          <Magento_products data={Frontend_developmentProductsData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Frontend_development;
