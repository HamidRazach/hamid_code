import React from "react";
import styles from "./shopify_export.module.scss";
import Link from "next/link";

export default function Shopify_export() {
  return (
    <section className={styles.shopify_export_sec4}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className={styles.left_heading_box}>
              <h2>
                Why Choose Mandy Web Design as a UI &amp; UX Design Company
              </h2>
              <p>
                Mandy Web Design is a trusted UI &amp; UX and{" "}
                <Link href="/website-design-development">
                  web design company
                </Link>{" "}
                known for creating user-friendly, high-converting websites. As a
                top UI &amp; UX design company, we blend creativity with
                functionality to deliver seamless digital experiences. Our team
                offers tailored UX design services that improve engagement,
                retention, and overall brand perception across all devices.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
          <div className={styles.Shopify_export_scroll}>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                Personalized UI &amp; UX Approach from the Start
              </h5>
              <p>
                You’ll work with a dedicated designer who understands your
                audience, goals, and brand. As a UI &amp; UX design services
                company, we ensure your project feels personal, focused, and
                aligned with your vision.
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                User Research Before Any Design
              </h5>
              <p>
                We begin with deep user and competitor research to understand
                behaviors, needs, and pain points—building a strategy-first
                foundation like any leading UX design agency should.
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                Tailored Designs, Not Templates
              </h5>
              <p>
                Every layout we create is unique. As a UI design company, we
                create interfaces that match your brand identity, align with
                modern trends, and reflect the{" "} future of UI &amp; UX—making {" "}
                every click count.
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                Mobile-Friendly and Lightning Fast{" "}
              </h5>
              <p>
                Speed and mobile usability aren't afterthoughts—they’re built
                into our process. As a top UI &amp; UX design company, we ensure
                your website works perfectly on every screen and loads quickly.{" "}
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                Simple, Intuitive User Journeys
              </h5>
              <p>
                From homepage to checkout, we focus on making the journey
                effortless for your customers. As a Shopify Website Design
                agency, we build clear navigation, product filtering, smart
                search, and quick checkout features to drive more sales.
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>SEO-Ready and Scalable</h5>
              <p>
                We map every step of the user's path to ensure a smooth and
                frustration-free experience. That’s what sets us apart as a user
                experience design firm focused on clarity and flow.
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                Design That Drives Engagement and Results
              </h5>
              <p>
                Our focus is on creating UI &amp; UX that isn’t just pretty—it
                performs and is built to{" "} improve website UX {" "}
                and drive measurable results. As a UI &amp; UX design consulting
                company, we deliver interfaces that increase engagement and
                support your goals.
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                Built to Scale with Your Growth
              </h5>
              <p>
                Whether you’re just starting out, scaling fast, or need{" "}
                Shopify web design services {" "}
                for your online store, our solutions grow with you. As a
                reliable UX design company, we plan for flexibility and
                expansion from day one.
              </p>
            </div>
            <div className={styles.content_box}>
              <h5 className={styles.tertiary_heading}>
                India’s Trusted UI &amp; UX Partner
              </h5>
              <p>
                With years of experience and clients worldwide, Mandy Web Design
                is proud to be the best UI &amp; UX design agency in
                India—offering world-class results with personalized care.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
