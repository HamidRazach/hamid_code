import React, { Fragment, useState } from "react";
import Head from "next/head";
import ModalVideo from "react-modal-video";
import WhyUs from "./WhyUs";
import FeaturesSection from "../../components/about_page/FeaturesSection/FeaturesSection";
import TeamSection from "../../components/about_page/TeamSection/TeamSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import About_banner from "../../components/about_page/banner_about";
import Vision_mission from "../../components/about_page/vision_values";
import Our_Story from "../../components/about_page/our_story";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";

const AboutUsPage = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
        <Head>
        <title>About Us | Digital Minds On</title>
        <meta 
          name="description" 
          content="Learn more about Digital Minds On, a leading technology company offering web, mobile app, and game development services for global businesses." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/about" 
        />
      </Head>
      <main className="page_content about-page">
        <About_banner />
        <Vision_mission />
        <Our_Story />
        <FeaturesSection />
        <TeamSection />
        <Awards_recognitions />
        <WhyUs />
        <CtaSection />
      </main>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};
export default AboutUsPage;
