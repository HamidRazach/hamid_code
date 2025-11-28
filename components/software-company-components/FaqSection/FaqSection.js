import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Image from "next/image";

const FaqSection = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq_section section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex">
            F.A.Q.
          </div>
          <h2 className="heading_text mb-0">
            Need a <mark>Support?</mark>
          </h2>
        </div>

        <div className="faq_accordion accordion" id="faq_accordion">
          <Accordion
            open={open}
            toggle={toggle}
            className="accordion"
            id="service_process_faq"
          >
            <AccordionItem className="accordion-item">
              <AccordionHeader targetId="1">
                What is Web Development?
              </AccordionHeader>
              <AccordionBody accordionId="1" className="acc_body">
                <p>
                  Web Development is the work of creating and maintaining
                  websites or web based applications. It encompasses various
                  activities inclusive of the formation of the site
                  construction, the layout of the facility, to coding of the
                  website, testing and launch of the website for availability on
                  the internet.
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionHeader targetId="2">
                What services does Digital Minds On provide?
              </AccordionHeader>
              <AccordionBody accordionId="2" className="acc_body">
                <p>
                  Digital Minds On offers a wide range of digital solutions,
                  including:
                  <br />
                  <b>Web Development:</b> Creating custom websites tailored to
                  your business needs.
                  <br />
                  <b>App Development:</b> Designing and developing innovative
                  mobile applications.
                  <br />
                  <b>UI/UX Design:</b> Enhancing user experience with intuitive
                  and visually appealing designs.
                  <br />
                  <b>SEO Services:</b> Professional SEO Services for Higher Ranking & Growth
                  <br />
                  <b>Digital Marketing:</b> Boost brand visibility with targeted digital ad campaigns.
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionHeader targetId="3">
                Can you handle e-commerce website maintenance?
              </AccordionHeader>
              <AccordionBody accordionId="3" className="acc_body">
                <p>
                  Absolutely. We specialize in maintaining e-commerce platforms, including product updates, payment gateway integrations, performance optimization, and ensuring secure transactions.
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionHeader targetId="4">
                What is UI/UX design, and why is it important for my business?
              </AccordionHeader>
              <AccordionBody accordionId="4" className="acc_body">
                <p>
                  UI (User Interface) focuses on the visual elements of your product, such as buttons, layouts, and typography, while UX (User Experience) ensures the product is easy to use and meets user needs. Together, they enhance user satisfaction, improve engagement, and boost conversions.
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionHeader targetId="5">
                Does Digital Minds On provide customer support for its services?
              </AccordionHeader>
              <AccordionBody accordionId="5" className="acc_body">
                <p>
                  Yes, we offer comprehensive customer support for all our services, including web development, app development, UI/UX design, game development, and networking solutions. Our team is available to assist with queries, troubleshooting, and updates.
                </p>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
