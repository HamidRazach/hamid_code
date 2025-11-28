import React, { Fragment } from "react";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import { software_development_companyData } from "../../constant/data";
import Header2 from "../../components/landing_page/header2";
import About_us from "../../components/landing_page/about_us";
import Services from "../../components/landing_page/Services";
import WhyChooseUs from "../../components/landing_page/WhyChooseUs";
import GoogleReviews from "../../components/landing_page/Testimonial";
import Portfolio from "../../components/landing_page/Portfolio";
import Faq from "../../components/landing_page/Faq";
import ContactSection from "../../components/software-company-components/ContactSection";

const software_development_company = () => {
  return (
    <Fragment>
      <div>
        <main className="page_content">
          <Header2 />
          <section name="home">
            <WebServicesBanner data={software_development_companyData} />
          </section>
          <section name="about">
            <About_us />
          </section>
          <section name="services">
            <Services />
          </section>
          <section name="why">
            <WhyChooseUs />
          </section>
          <GoogleReviews />
          <section name="portfolio">
            <Portfolio />
          </section>
          <Faq />
          <section name="contact">
            <ContactSection />
          </section>
        </main>
      </div>
    </Fragment>
  );
};
export default software_development_company;
