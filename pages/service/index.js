"use client";
import Head from "next/head";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import CtaSection from "../../components/CtaSection/CtaSection";
import WhyUs from "../about/WhyUs";
import PrimaryServices from "../../components/ServicesCards/PrimaryServices";
import ConsultingServices from "../../components/ConsultingServices/ConsultingServices";
import TrendingServices_temp from "../../components/TrendingServices/TrendingServices_temp";
import OurClients from "../../components/Partners/OurClients";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import { ServicesData } from "../../constant/services/our-service";


const ServicePage = () => {

  return (
    <>
      <Head>
        <title>Our Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Explore the full range of Digital Minds On services — from app development to digital marketing. We deliver innovative solutions to power your business growth." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/service" 
        />
      </Head>
      <main className="page_content">
        <WebServicesBanner data={ServicesData} />
        <PrimaryServices />
        <ConsultingServices />
        <TrendingServices_temp />
        <OurClients />
        <WhyUs />
        <Awards_recognitions />
      </main>
      <CtaSection />
    </>
  );
};
export default ServicePage;
