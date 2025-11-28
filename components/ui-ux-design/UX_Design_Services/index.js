"use client";
import React from "react";
import Image from "next/image";
import styles from "./Ux_design_services.module.scss";

export default function UX_Design() {
  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          {/* Content Section */}
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2 className={styles.h2}>
              Why Choose Mandy Web Design for{" "}
              <span>UI & UX Design Services?</span>
            </h2>
            <p className={styles.p}>
              As online competition grows, exceptional user experience and
              interface design have become essential for standing out. Our user
              experience UI & UX design firm helps businesses create websites
              that are easy to use, visually appealing, and built to boost user
              engagement. Our team focuses on designing smooth, responsive
              experiences that work across all devices and keep visitors coming
              back. As a UI & UX design agency, we’ve worked with brands across
              the USA, UK, Australia, Dubai, and Canada to improve how their
              customers interact online.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center">
            <Image
              src="/images/ui-ux-design/uiux-right-ing.webp"
              alt="web development company"
              width={1886}
              height={1083}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
