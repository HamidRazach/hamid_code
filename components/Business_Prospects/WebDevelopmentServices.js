"use client";
import React from "react";
import Link from "next/link";
import styles from "./web_development_services.module.scss";


export default function WebDevelopmentServices() {
  return (
    <div className={styles.Robustand_section}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
            <h2>
              Web Development Services for Novel,{" "}
              <span>Best-Functioning Websites</span>
            </h2>
            <p>
              Component-focused development is key to a performant website.
              Checkmark all quality and functionality metrics in your web dev
              rubric with high-end, effective services from digitalmindson.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Free Consultation">
                Free Consultation
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
          <div className="col-xs-12 col-md-6 col-lg-7 col-xl-6 col-xxl-6 offset-xl-1">
            <div className={styles.robustscroll}>
              <div className={styles.robust_box}>
                <div className={styles.robust_content}>
                  <h4>UI/UX Web Design</h4>
                  <p>
                    We design captivating interfaces and experiences using tools
                    like Figma and Adobe Creative Cloud for increased user
                    stickiness and cross-platform breakpoint consistency. Our
                    designs are not just pixel-perfect but also optimized for
                    accessibility and brand consistency that drive maximum
                    engagement and conversion.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Frontend Development</h4>
                  <p>
                    We build lightning-fast, SEO-friendly user interfaces using
                    novel technologies that work flawlessly across devices. Our
                    flexibility across monolithic and micro-frontend solutions
                    brings performance and scalability to every interface we
                    design, guaranteeing a smooth user experience and high
                    conversion rates.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Backend Development</h4>
                  <p>
                    From Node.js to Python, we architect secure and scalable
                    server-side solutions that power your web applications. Our
                    backend expertise ensures quick integration with frontend
                    components for zero latency, efficient data processing and
                    robust API functionality.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Full Stack Development</h4>
                  <p>
                    Get comprehensive hyper-connected, end-to-end web solutions
                    with dynamic capabilities across channels. Our full-stack
                    developers excel in building scalable, maintainable
                    applications for your business, providing a cohesive user
                    experience from start to finish.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>No/Low Code Development</h4>
                  <p>
                    Accelerate your development process with no-code and
                    low-code platforms like Appian and OutSystems. Build and
                    deploy web applications quickly without compromising
                    functionality or scalability to speed up innovation and
                    iteration.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Cloud Development</h4>
                  <p>
                    Optimize your web applications for performance, security,
                    and scalability with cloud computing solutions. Whether on
                    AWS, Azure, or Google Cloud, our cloud development expertise
                    ensures high availability and cost-effectiveness to scale
                    your web presence easily.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Web Testing</h4>
                  <p>
                    We thoroughly test and fix bugs and glitches across design,
                    code, and other web components. With a shared staging
                    environment, we let you experience the real feel and do not
                    finalize until you are happy. Zero-downtime rollout is
                    second to none in our quality benchmark.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Maintenance &amp; Updates</h4>
                  <p>
                    We value progressive enhancements. Our experienced team
                    provides ongoing support, security patches, and feature
                    upgrades to keep your web applications running smoothly and
                    up-to-date, ensuring your online presence remains
                    competitive and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
