import React, { Fragment } from "react";
import Head from "next/head";
import ConnectExpert from "../../components/Connect_Experts";
import WebPortal from "../../components/web-portal-development/Portal_channel";
import Portal_slider from "../../components/web-portal-development/Portal_slider";
import Portal_rating from "../../components/web-portal-development/Portal_rating";
import Portal_diffrence from "../../components/web-portal-development/Portal_diffrence";
import Portal_development from "../../components/web-portal-development/Portal_development";
import TechStack from "../../components/web-portal-development/Portal_track";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Portal_solution from "../../components/web-portal-development/Portal-solutions";
import Portal_cloud from "../../components/web-portal-development/Portal_cloud";
import Portal_committed from "../../components/web-portal-development/Portal_committed";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import { webportalData } from "../../constant/services/web-portal-development";

const Web_Portal = () => {
  return (
    <Fragment>
      <Head>
        <title>Custom Web Portal Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build secure, scalable, and user-friendly web portals with Digital Minds on. From B2B platforms to client portals, we deliver tailor-made solutions for your business needs." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/web-portal-development" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner data={webportalData}/>
          <WebPortal />
          <Portal_slider />
          <Portal_rating />
          <Portal_diffrence />
          <Portal_development />
          <TechStack />
          <Portal_solution />
          <Portal_cloud />
          <Portal_committed />
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Web_Portal;
