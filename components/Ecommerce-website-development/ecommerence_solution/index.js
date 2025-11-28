import React from "react";
import styles from "./ecommerencesolution.module.scss";
import Link from "next/link";

export default function Ecommernce_solution() {
  return (
    <div className={styles.Robustand_section}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2>
              Our eCommerce Website <span>Design & Development</span>
              {""} Services
            </h2>
            <p>
              We offer full-cycle eCommerce website development services for
              startups, scale-ups, and enterprises. Whether you need a digital
              shopping solution built from scratch or a makeover for your
              existing platform, our expert team is here to help.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Talk to Our Experts">
                Talk to Our Experts
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
          </Link>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className={styles.robustscroll}>
              <div className={styles.robust_box}>
                <div className={styles.robust_content}>
                  <h4>eCommerce UI/UX Design</h4>
                  <p>
                    Create visually appealing, intuitive e-commerce interfaces
                    that drive user engagement and conversions. Our expert
                    designers craft responsive, mobile-first layouts with a
                    focus on seamless customer journeys across all devices.
                    Enhance user experiences with our data-driven UI/UX design
                    solutions.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>eCommerce Backend Development</h4>
                  <p>
                    Build robust, scalable, and secure backends for your
                    e-commerce platforms. Our full-stack developers leverage
                    modern frameworks and technologies to ensure fast, reliable,
                    and efficient performance. Optimize your site’s
                    functionality with our expert backend development services.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Headless Commerce Solutions</h4>
                  <p>
                    Implement highly flexible and scalable headless commerce
                    solutions. Decouple your frontend from backend systems for
                    enhanced performance and personalization. Leverage APIs to
                    deliver seamless, omnichannel shopping experiences and stay
                    ahead of the competition.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>eCommerce Platform Migration</h4>
                  <p>
                    Seamlessly migrate your online store to a more powerful and
                    scalable platform. Our migration experts handle everything
                    from data transfer to SEO preservation with zero downtime
                    and improved site performance. Upgrade to a robust
                    e-commerce platform effortlessly.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>API Integration Services</h4>
                  <p>
                    Enhance your e-commerce functionality with seamless
                    third-party API integrations. Connect your store with
                    payment gateways, CRM systems, and other essential tools.
                    Ensure smooth, real-time data flow and enrich your
                    platform’s capabilities with our integration services.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Custom Plugin Development</h4>
                  <p>
                    Extend your e-commerce store’s functionality with
                    tailor-made plugins. Our developers create custom solutions
                    to address your unique business needs, from advanced
                    analytics to specialized checkout processes. Enhance your
                    site’s performance with bespoke plugin development.
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
