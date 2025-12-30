import React, { Fragment } from "react";
import Head from "next/head";
import ConnectExpert from "../../components/Connect_Experts";
import Trustedlogo from "../../components/Trustedtop_brands";
import Customaccordin from "../../components/software-company-components/about/accordin";
import DigitalRating from "../../components/Digital_ratings";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Ecommernce_solution from "../../components/Ecommerce-website-development/ecommerence_solution";
import Ecommerce_platforms from "../../components/Ecommerce-website-development/ecommerce_platforms";
import Trusted_ecommerce from "../../components/Ecommerce-website-development/trusted_ecommerce";
import Success_digitalmindson from "../../components/Ecommerce-website-development/success_digitalmindson";
// import Beyond_Ecommerce from "../../components/Ecommerce-website-development/Beyond_Ecommerce";
import Tech_stack from "../../components/Ecommerce-website-development/tech_stack";
import Project_cta from "../../components/Ecommerce-website-development/project_ios_cta";
import Ecommerce_solutions from "../../components/Ecommerce-website-development/Ecommerce_solutions";
import Ecommerce_website from "../../components/Ecommerce-website-development/Ecommerce_website";
import Ecommerce_Domain from "../../components/Ecommerce-website-development/Ecommerence-domain";
import Ecommerce_web_development from "../../components/Ecommerce-website-development/ecommerce_web_development";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import { EcommerceData } from "../../constant/services/ecommerce-website-development";

const Ecommerence = () => {
  return (
    <Fragment>
        <Head>
        <title>eCommerce Website Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Grow your online business with Digital Minds On’s eCommerce website development. We build secure, scalable, and conversion-driven eCommerce websites." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/ecommerce-website-development" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner data={EcommerceData}/>
          <Trustedlogo />
          <Ecommernce_solution />
          <DigitalRating />
          <Ecommerce_platforms />
          <Trusted_ecommerce />
          <Success_digitalmindson />
          {/* <Beyond_Ecommerce />   */}
          <Customaccordin />
          <Tech_stack />
          <Project_cta />
          <Ecommerce_solutions />
          <Ecommerce_website />
          <Ecommerce_Domain />
          <Ecommerce_web_development />
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Ecommerence;
