"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Fade } from "react-awesome-reveal";

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
        <Fade direction="up" triggerOnce>
          <div className="heading_block text-center">
            <div className="heading_focus_text has_underline d-inline-flex">
              F.A.Q.
            </div>
            <h2 className="heading_text mb-0">
              Need a <mark>Support?</mark>
            </h2>
          </div>
        </Fade>

        <div className="faq_accordion accordion" id="faq_accordion">
          <Accordion
            open={open}
            toggle={toggle}
            className="accordion"
            id="service_process_faq"
          >
            {[
              {
                id: "1",
                question: "What is Web Development?",
                answer:
                  "Web Development is the work of creating and maintaining websites or web based applications. It encompasses various activities inclusive of the formation of the site construction, the layout of the facility, to coding of the website, testing and launch of the website for availability on the internet.",
              },
              {
                id: "2",
                question: "What services does Digital Minds On provide?",
                answer:
                  "Digital Minds On offers a wide range of digital solutions, including:\n\nWeb Development: Creating custom websites tailored to your business needs.\nApp Development: Designing and developing innovative mobile applications.\nUI/UX Design: Enhancing user experience with intuitive and visually appealing designs.\nSEO Services: Professional SEO Services for Higher Ranking & Growth.\nDigital Marketing: Boost brand visibility with targeted digital ad campaigns.",
              },
              {
                id: "3",
                question: "Can you handle e-commerce website maintenance?",
                answer:
                  "Absolutely. We specialize in maintaining e-commerce platforms, including product updates, payment gateway integrations, performance optimization, and ensuring secure transactions.",
              },
              {
                id: "4",
                question:
                  "What is UI/UX design, and why is it important for my business?",
                answer:
                  "UI (User Interface) focuses on the visual elements of your product, such as buttons, layouts, and typography, while UX (User Experience) ensures the product is easy to use and meets user needs. Together, they enhance user satisfaction, improve engagement, and boost conversions.",
              },
              {
                id: "5",
                question:
                  "Does Digital Minds On provide customer support for its services?",
                answer:
                  "Yes, we offer comprehensive customer support for all our services, including web development, app development, UI/UX design, game development, and networking solutions. Our team is available to assist with queries, troubleshooting, and updates.",
              },
            ].map((item) => (
              <Fade key={item.id} direction="up" triggerOnce>
                <AccordionItem className="accordion-item">
                  <AccordionHeader targetId={item.id}>
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody accordionId={item.id} className="acc_body">
                    {item.answer.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </AccordionBody>
                </AccordionItem>
              </Fade>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
