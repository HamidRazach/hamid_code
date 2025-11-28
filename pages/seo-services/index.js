import React, { Fragment } from "react";
import Head from "next/head";
import ConnectExpert from "../../components/Connect_Experts";
import Trustedlogo from "../../components/Trustedtop_brands";
import Customaccordin from "../../components/software-company-components/about/accordin";
import DomainSoftware from "../../components/Domain_software";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import Seo_company_about from "../../components/seo-services/seo_company";
import Seo_cards from "../../components/seo-services/seo_services_cards";
import Searches_on_google from "../../components/seo-services/searches_on_google";
import Seo_result from "../../components/seo-services/result_driven_seo";
import Seo_partner from "../../components/seo-services/Seo_Partner";
import Seo_strategy from "../../components/seo-services/seo_strategy";
import Seo_marketing_agency from "../../components/seo-services/seo_marketing_agency";
import { seoservicesData } from "../../constant/data";

const Digitalmarketing = () => {
  return (
    <Fragment>
       <Head>
        <title>SEO Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Boost your search rankings with Digital Minds On’s SEO services. We provide on-page, off-page, and technical SEO strategies to drive organic traffic and growth." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/seo-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={seoservicesData}/>
          <Trustedlogo />
          <Seo_company_about />
          <Seo_cards />
          <Searches_on_google />
          <Seo_result />
          <Customaccordin />
          <DomainSoftware />
          <Seo_partner />
          <Seo_strategy />
          <Seo_marketing_agency />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Digitalmarketing;
