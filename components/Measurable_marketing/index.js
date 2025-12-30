"use client";
import React from "react";
import styles from "./measurable.module.scss";

const marketingData = [
  {
    title: "Proven Expertise",
    description:
      "With 10+ years of experience, our digital marketing agency combines cutting-edge strategies and expert insights to deliver campaigns that consistently outperform benchmarks.",
    svg: (
      <i class="fa-regular fa-award"></i>
    ),
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor digital marketing services to align with your unique business needs, ensuring personalized approaches that maximize growth and provide sustainable results.",
    svg: (
      <i class="fa-regular fa-puzzle-piece"></i>
    ),
  },
  {
    title: "B2B Excellence",
    description:
      "As a leader in B2B digital marketing, we empower businesses by driving client acquisition, boosting visibility, and building long-term customer loyalty.",
    svg: (
     <i class="fa-regular fa-handshake"></i>
    ),
  },
  {
    title: "End-to-End Services",
    description:
      "From SEO and PPC to content and analytics, our digital marketing company offers everything you need to scale, backed by advanced solutions and a dedicated team.",
    svg: (
     <i class="fa-regular fa-arrows-rotate"></i>
    ),
  },
  {
    title: "ROI-Driven Strategies",
    description:
      "Our digital marketing agency in the USA focuses on driving measurable ROI, analyzing every campaign to ensure that your investment delivers concrete results.",
    svg: (
      <i class="fa-regular fa-arrow-trend-up"></i>
    ),
  },
  {
    title: "Continuous Innovation",
    description:
      "We adapt quickly to market trends, refining every digital marketing solution we work on to keep your business ahead and your strategies performing at their best.",
    svg: (
      <i class="fa-regular fa-rocket"></i>
    ),
  },
];

export default function Measurable_marketing() {
  return (
    <section
      className={`ecommerce_web_process text_white ${styles.measurable_section}`}
    >
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-12">
            <h2>
              Why Choose <span>Digitalmindson</span> for Your Digital Marketing
              Services?
            </h2>
            <p>
              We excel at what we do, and we’ve been proud of it. For over a
              decade, we’ve been the go-to digital marketing agency in USA,
              driving powerful campaigns for brands across industries and
              achieving measurable success.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          {marketingData.map((item, index) => (
            <div
              className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12"
              key={index}
            >
              <div className={styles.box}>
                <div className={styles.icon}>{item.svg}</div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
