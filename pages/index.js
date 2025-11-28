import React, { Fragment } from 'react';
import Head from 'next/head';
import Hero2 from '../components/hero2/hero2';
import FeaturePartners from '../components/software-company-components/FeaturePartners';
import ServiceSection from '../components/software-company-components/ServiceSection/ServiceSection';
import About from '../components/software-company-components/about/about';
import ProcessTechnology from '../components/software-company-components/ProcessTechnology/ProcessTechnology';
import FaqSection from '../components/software-company-components/FaqSection/FaqSection';
import ContactSection from '../components/software-company-components/ContactSection';
import Digital__ratings from '../components/software-company-components/Digitalmindson__ratings';
import Discover from '../components/software-company-components/Rev_discover/Discover';


const HomePage2 = () => {

    return (
        <Fragment>
        <Head>
        <title>Digital Minds On | App, Web & Game Development Company</title>
        <meta 
          name="description" 
          content=" Digital Minds On is a leading software company offering mobile app development, web development, game design, digital marketing, and SEO services worldwide." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/" 
        />
      </Head>
            <div>
                <main className="page_content">
                    <Hero2 />
                    <FeaturePartners />
                    <Discover />
                    <ServiceSection />
                    <Digital__ratings />
                    <About />
                    <ProcessTechnology />
                    <FaqSection />
                    <ContactSection />
                </main>
            </div>
        </Fragment>
    )
};
export default HomePage2;