import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Backend_development_ExpData, Cyber_developmentbannerData, Cyber_developmentCounterData, Cyber_developmentExpertData, Cyber_developmentProductsData, Cyber_developmentRewriteData, woocomerenceTestimonialData } from "../../constant/data";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Shopify_testimonial from "../../components/shopify-development-services/shopify_testmonial";
import Magento_expert from "../../components/magento-development-services/Magento_expert";
import Magento_products from "../../components/magento-development-services/magento_products";
import Magento_rewrite from "../../components/magento-development-services/magento_rewrite";
import Counter_project from "../../components/front-end-development-services/counter_project";
import Exp_sec from "../../components/front-end-development-services/exp_sec";
import Cyber_developmentRewrite from "../../components/cyber-security-services/Assessment_Solutions";

const Cyber_development = () => {
  return (
    <Fragment>
         <Head>
        <title>Advanced Cyber Security Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Protect your business with Digital Minds On’s advanced cyber security services, ensuring data safety, threat prevention, and complete digital protection." />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/cyber-security-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Cyber_developmentbannerData}/>
          <Counter_project data={Cyber_developmentCounterData}/>
          <Magento_expert  data={Cyber_developmentExpertData}/>
          <Cyber_developmentRewrite />
          <Exp_sec data={Backend_development_ExpData}/>
          <Magento_rewrite data={Cyber_developmentRewriteData}/>
          <Magento_products data={Cyber_developmentProductsData}/>
          <Shopify_testimonial data={woocomerenceTestimonialData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Cyber_development;
