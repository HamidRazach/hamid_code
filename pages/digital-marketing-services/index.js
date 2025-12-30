import React, { Fragment } from "react";
import Head from "next/head";
import ConnectExpert from "../../components/Connect_Experts";
import Trustedlogo from "../../components/Trustedtop_brands";
import RangeSoftware from "../../components/RangeSoftware";
import Customaccordin from "../../components/software-company-components/about/accordin";
import DomainSoftware from "../../components/Domain_software";
import DigitalChannel from "../../components/Digitalmarketingchannel";
import DigitalRating from "../../components/Digital_ratings";
import Digitalmarketingcard from "../../components/card_marketing";
import Marketing_project from "../../components/project_brand";
import Stree_from from "../../components/Stress-Free";
import Difference_markting from "../../components/Marketing_services";
import Measurable_marketing from "../../components/Measurable_marketing";
import Agency_driven from "../../components/Driven_Agency";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import { DigitalmarketingData } from "../../constant/services/digital-marketing-services";

const Digitalmarketing = () => {
  return (
    <Fragment>
        <Head>
        <title>Digital Marketing Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Boost your online presence with Digital Minds On’s digital marketing services. From SEO and PPC to social media marketing, we help businesses grow and scale." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/digital-marketing-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner data={DigitalmarketingData}/>
          <Trustedlogo />
          <DigitalChannel />
          <DigitalRating />
          <Digitalmarketingcard />
          <Marketing_project />
          <RangeSoftware />
          <Stree_from />
          <Difference_markting />
          <Customaccordin />
          <DomainSoftware />
          <Measurable_marketing />
          <Agency_driven />
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Digitalmarketing;
