import React, { Fragment } from "react";
import Head from "next/head";
import ConnectExpert from "../../components/Connect_Experts";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import FaqSection from "../../components/software-company-components/FaqSection/FaqSection";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import { webSiteData } from "../../constant/data";
import Trustedlogo from "../../components/Trustedtop_brands";
import Web_Design_Company from "../../components/website-design-development/web_design_company";
import Section_awards from "../../components/website-design-development/section_awards";
import Digitize_sec from "../../components/website-design-development/digitize_sec";
import Improvise_web_design from "../../components/website-design-development/Website_design_services";
import Revolutionize_section from "../../components/website-design-development/revolutionize_section";
import Proven_steps from "../../components/website-design-development/proven_steps";
import Our_commit from "../../components/website-design-development/Our_commit";
import Technologies_Uses from "../../components/website-design-development/Technologies_uses";
import Digital_Excellence from "../../components/website-design-development/Digital_Excellence";

const Website_design_development = () => {
  return (
    <Fragment>
       <Head>
        <title>Professional Website Design & Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On delivers creative, responsive, and SEO-optimized website design & development services to help your business grow online with impactful user experiences." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/website-design-development" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner data={webSiteData}/>
          <Trustedlogo />
          <Web_Design_Company />
          <Section_awards />
          <Digitize_sec />
          <Improvise_web_design />
          <Revolutionize_section />
          <Proven_steps />
          <Our_commit />
          <Technologies_Uses />
          <Digital_Excellence />
          <FaqSection />
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Website_design_development;
