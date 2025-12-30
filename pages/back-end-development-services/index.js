import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Backend_development_ExpData, Backend_developmentbannerData, Backend_DevelopmentCounterData, Backend_developmentExpertData, Backend_developmentProductsData, Backend_developmentRewriteData, woocomerenceTestimonialData } from "../../constant/services/back-end-development-services";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Shopify_testimonial from "../../components/shopify-development-services/shopify_testmonial";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_products from "../../components/magento-development-services/magento_products";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";
import Counter_project from "../../components/front-end-development-services/counter_project";
import Exp_sec from "../../components/front-end-development-services/exp_sec";
import BackendRewrite from "../../components/back-end-development/Back-End-Development-Company";

const Backend_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Professional Back-End Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Empower your business with Digital Minds On’s professional back-end development services, ensuring secure, fast, and scalable solutions." />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/back-end-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Backend_developmentbannerData}/>
          <Counter_project data={Backend_DevelopmentCounterData}/>
          <Magento_expert  data={Backend_developmentExpertData}/>
          <BackendRewrite />
          <Exp_sec data={Backend_development_ExpData}/>
          <Magento_rewrite data={Backend_developmentRewriteData}/>
          <Magento_products data={Backend_developmentProductsData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Backend_development;
