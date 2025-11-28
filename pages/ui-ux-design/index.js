import React, { Fragment } from 'react';
import Head from 'next/head';
import WebServicesBanner from '../../components/WebBanner/WebServicesBanner';
import { UI_UX_DesignData } from '../../constant/data';
import UX_Design from '../../components/ui-ux-design/UX_Design_Services';
import Creative_design from '../../components/ui-ux-design/Creative_Websites';
import Freature_wrapper from '../../components/ui-ux-design/featured_wrapper';
import Design_Services from '../../components/ui-ux-design/design_services';
import Feel_easy from '../../components/ui-ux-design/feel_easy';
import Shopify_export from '../../components/ui-ux-design/shopify_export';
import Better_experience from '../../components/ui-ux-design/better_experience';
import Strategic_process from '../../components/ui-ux-design/Strategic_process';
import Awards_recognitions from '../../components/about_page/Awards_recognitions';
import ConnectExpert from '../../components/Connect_Experts';



const UI_UX_Design = () => {

    return (
        <Fragment>
        <Head>
        <title>UI/UX Design Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Enhance user experiences with Digital Minds On’s UI/UX design services. We create intuitive, engaging, and user-friendly designs that boost app and website performance." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/ui-ux-design" 
        />
      </Head>
            <div>
                <main className="page_content">
                   <WebServicesBanner data={UI_UX_DesignData}/>      
                   <UX_Design />
                   <Creative_design />
                   <Freature_wrapper />
                   <Design_Services />
                   <Feel_easy />
                   <Shopify_export />
                   <Better_experience />
                   <Strategic_process />
                   <Awards_recognitions />
                   <ConnectExpert />
                </main>
            </div>
        </Fragment>
    )
};
export default UI_UX_Design;