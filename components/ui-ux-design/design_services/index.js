"use client";
import React from "react";
import Image from "next/image";
import styles from "./design_services.module.scss";

export default function Design_Services() {
  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          {/* Content Section */}
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2 className={styles.h2}>
              Looking for a Professional UI & UX{" "}
              <span>Design Services Company for Your Website?</span>
            </h2>
            <p>
              A great website isn’t just about looks—it’s about how it works for your users. UI & UX design focuses on creating websites that are easy to navigate, engaging, and built to deliver results. From layout and visuals to user flow and functionality, a professional user experience design firm ensures your visitors enjoy a smooth, intuitive journey across every page.
            </p>
            <p>Mandy Web Design offers custom UX design services that focus on your users' needs and your business goals. Our team designs websites that are clean, fast, and conversion-focused, helping you turn visitors into loyal customers. With a strong process and attention to detail, we create digital experiences your users will love.</p>
            <p>As a trusted UI & UX design company in India, we have worked with businesses of all sizes across various industries. From strategy to design and testing, we deliver full-service UI & UX solutions tailored to your brand. Let us help you build a website that truly connects with your audience and sets you apart from the competition.</p>
          </div>

          {/* Image Section */}
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center">
            <Image
              src="/images/ui-ux-design/ui-ux-design-left.webp"
              alt="web development company"
              width={1092}
              height={647}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
