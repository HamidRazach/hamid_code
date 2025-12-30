import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import Webchannel from "../../components/ChannelVisibility/Webchannel";
import WebDevelopmentServices from "../../components/Business_Prospects/WebDevelopmentServices";
import Business from "../../components/Boarden_Business";
import DevelopmentWorkflow from "../../components/Development_Workflow";
import Webflowcards from "../../components/Workflow";
import Rating from "../../components/Rating_USA";
import Growth from "../../components/Multi-Dimensional";
import DevelopmentExpertise from "../../components/Development_Expertise";
import DomainContent from "../../components/domain_diversity";
import ConnectExpert from "../../components/Connect_Experts";
import { webServicesData } from "../../constant/services/web-development-services";
import DevelopmentSolutions from "../../components/Purpose-Built";

const Webservices = () => {
  return (
    <Fragment>
          <Head>
        <title>Web Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On delivers professional web development services that are secure, scalable, and optimized for performance. Build websites that convert and engage users." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/web-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={webServicesData}/>
          <Webchannel />
          <WebDevelopmentServices />
          <Business />
          <DevelopmentSolutions />
          <DevelopmentWorkflow />
          <Webflowcards />
          <Rating />
          <DevelopmentExpertise />
          <Growth />
          <DomainContent />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Webservices;
