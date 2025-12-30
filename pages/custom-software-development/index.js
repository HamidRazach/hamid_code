import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import DomainContent from "../../components/domain_diversity";
import ConnectExpert from "../../components/Connect_Experts";
import Mobiledevelopdementservices from "../../components/Mobiledevelopementservices";
import Trustedlogo from "../../components/Trustedtop_brands";
import TierMobileApp from "../../components/Top_TierMobileApp";
import Ratingsoftwaredevelopement from "../../components/Ratingsoftwaredevelopement";
import RangeSoftware from "../../components/RangeSoftware";
import Customcrafting from "../../components/Customsoftware";
import Customaccordin from "../../components/software-company-components/about/accordin";
import PremierSoftware from "../../components/Scalable_Solutions";
import Techtrend from "../../components/Game_Changers";
import DomainSoftware from "../../components/Domain_software";
import Custom from "../../components/Custom_Software__Development";
import Business_Operations from "../../components/Custom_business_operations";
import { customServicesData } from "../../constant/services/custom-software-development";

const CustomSoftwareDevelopement = () => {
  return (
    <Fragment>
        <Head>
        <title>Custom Software Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Get tailored software solutions with Digital Minds On. We design and develop custom software to meet your business needs, boosting efficiency and growth." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/custom-software-development" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={customServicesData}/>
          <Trustedlogo />
          <Mobiledevelopdementservices />
          <Ratingsoftwaredevelopement />
          <RangeSoftware />
          <Customcrafting />
          <Customaccordin />
          <PremierSoftware />
          <Techtrend />
          <DomainSoftware />
          <Custom />
          <TierMobileApp />
          <DomainContent />
          <Business_Operations />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default CustomSoftwareDevelopement;
