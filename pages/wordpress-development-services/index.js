import React, { Fragment } from "react";
import Head from "next/head";
import Webflowcards from "../../components/Workflow";
import Growth from "../../components/Multi-Dimensional";
import DevelopmentExpertise from "../../components/Development_Expertise";
import ConnectExpert from "../../components/Connect_Experts";
import Wordpress_partner_usa from "../../components/wordpress-development-services/wordpress_partner-usa";
import Consider_usa from "../../components/wordpress-development-services/wordpress_consider_usa";
import Tabing_section from "../../components/wordpress-development-services/tabing_section";
import Wordpress_rating_usa from "../../components/wordpress-development-services/wordpress_rating_usa";
import WordpressWebDevelopmentServices from "../../components/wordpress-development-services/Wordpress_web_development_services";
import Wordpress_Industry_usa from "../../components/wordpress-development-services/wordpress_industry_usa";
import Why_choose_usa from "../../components/wordpress-development-services/wordpress_why_choose_usa";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import { wordpressbannerData } from "../../constant/data";

const Wordpress_development = () => {
  return (
    <Fragment>
        <Head>
        <title>WordPress Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Build powerful and customizable WordPress websites with Digital Minds On. We specialize in themes, plugins, and responsive WordPress development for all industries." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/wordpress-development-services" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner data={wordpressbannerData}/>
          <Wordpress_partner_usa />
          <Consider_usa />
          <Tabing_section />
          <Webflowcards />
          <Awards_recognitions />
          <Wordpress_rating_usa />
          <WordpressWebDevelopmentServices />
          <Wordpress_Industry_usa />
          <Why_choose_usa />
          <DevelopmentExpertise />
          <Growth />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Wordpress_development;
