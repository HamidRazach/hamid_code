import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import DomainContent from "../../components/domain_diversity";
import ConnectExpert from "../../components/Connect_Experts";
import MobileAppExpert from "../../components/Mobileappexpert";
import Mobiledevelopdementservices from "../../components/Mobiledevelopementservices";
import Mobilechannel from "../../components/Mobilechannel";
import Trustedlogo from "../../components/Trustedtop_brands";
import MobileRating from "../../components/Mobile_rating";
import MobileWorkflow from "../../components/MobileWorkFlow";
import TierMobileApp from "../../components/Top_TierMobileApp";
import Augmentmobileapp from "../../components/Augmentedmobileapp";
import Performance_app from "../../components/Performance_App";
import Mobile_app_innovations from "../../components/mobile_app_Innovations";
import { mobileServicesData } from "../../constant/services/mobile-app-development";
import HealthFeatures from "../../components/Mobile_app_developement/health_features";
import Digital_Masterpieces from "../../components/Mobile_app_developement/Digital Masterpieces";
import Brand_Scale from "../../components/Mobile_app_developement/Brand_Scale";
import Visionary_Brand from "../../components/Mobile_app_developement/Visionary_Brand";

const Mobileapp = () => {
  return (
    <Fragment>
        <Head>
        <title>Mobile App Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On delivers high-quality mobile app development for Android and iOS. We create user-friendly, secure, and scalable apps that drive business success." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/mobile-app-development" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={mobileServicesData}/>
          <Trustedlogo />
          <Mobiledevelopdementservices />
          <Mobilechannel />
          <MobileRating />
          <Visionary_Brand />
          <MobileAppExpert />
          <HealthFeatures />
          <Digital_Masterpieces />
          <Brand_Scale />
          <Performance_app />
          <MobileWorkflow />
          <Augmentmobileapp />
          <TierMobileApp />
          <DomainContent />
          <Mobile_app_innovations />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mobileapp;
