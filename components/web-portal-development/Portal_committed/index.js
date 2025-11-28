import React from "react";
import styles from "./Portal_committed.module.scss";

export default function Portal_committed() {
  return (
    <div
      className={styles.Perks}
      style={{ backgroundColor: "rgb(249, 249, 249)" }}
    >
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="m-auto text-center col-xxl-8 col-xl-8 col-lg-8 col-md-9 col-12">
            <h2>
              Why Choose Digitalmindson for <span>Web Portal Development</span>
            </h2>
            <p>
              As a leading web portal development company, Digitalmindson is committed
              to delivering cutting-edge solutions that drive business success.
              Our expertise, technical proficiency, and client-centric approach
              ensure that your web portal is tailored to meet your specific
              needs and exceed your expectations.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          <div className="mb-lg-5 mb-xl-0 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>
                  Custom-Built
                  <br /> Solutions
                </h4>
                <p>
                  Our team crafts web portals that are fully customized to your
                  business requirements. We ensure the optimal functionality and
                  user experience of each web portal we build.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-lg-5 mb-xl-0 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>
                  Advanced Security
                  <br /> Measures
                </h4>
                <p>
                  We implement robust security protocols to protect your data.
                  Our team ensures compliance with industry standards to make
                  the system efficient against cyberattacks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>
                  Scalable
                  <br /> Architecture
                </h4>
                <p>
                  We design web portals with scalability in mind, allowing your
                  portal to grow and adapt as your business evolves as this
                  approach will benefit you in the long term.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>
                  Comprehensive
                  <br /> Support
                </h4>
                <p>
                  Our dedicated support team offers ongoing maintenance and
                  updates to ensure your web portal remains at peak performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
