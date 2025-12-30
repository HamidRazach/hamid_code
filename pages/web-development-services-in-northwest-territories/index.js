import React, { Fragment } from "react";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import ConnectExpert from "../../components/Connect_Experts";
import { Web_development_services_in_northwest_territoriesbannerData } from "../../constant/global_area/canada_state/web-development-services-in-northwest-territories";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";


const Web_development_services_in_northwest_territories = () => {
  return (
    <Fragment>
         <Head>
        <title>Premier Web Development Company | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds ON is a premier web development company in Canada. We build custom, high-performance websites that drive growth, user experience, and strengthen your digital presence nationwide."
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.vercel.app/web-development-services-in-northwest-territories" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner  data={Web_development_services_in_northwest_territoriesbannerData}/>
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Web_development_services_in_northwest_territories;
