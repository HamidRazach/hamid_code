import Link from "next/link";
import React from "react";
import styles from "./Portal_development.module.scss";

export default function Portal_development() {
  return (
    <section className={styles.ecommerce_web_process}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-6 col-xl-8 col-lg-9 col-md-10 col-12">
            <h2>
              Our <span>Web Portal Development</span> Process
            </h2>
            <p>
              At Digitalmindson our streamlined and proven web portal development
              process ensures we deliver high-quality, reliable, and efficient
              web portals that meet our clients' unique needs. From initial
              planning to final deployment, we prioritize precision and
              excellence at every stage.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          <div className="mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.ecomm_process_box}>
              <div className={styles.ecomm_box_flex}>
                <div className={styles.ecomm_num}>
                  01<h5>Planning</h5>
                </div>
                <div className={styles.ecom_box_icon}>
                <i class="fa-solid fa-clipboard"></i>
                </div>
              </div>
              <p>
                We meticulously gather requirements and define the project scope
                to set a strong foundation.
              </p>
            </div>
          </div>
          <div className="mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.ecomm_process_box}>
              <div className={styles.ecomm_box_flex}>
                <div className={styles.ecomm_num}>
                  02<h5>Design</h5>
                </div>
                <div className={styles.ecom_box_icon}>
                <i class="fa-solid fa-palette"></i>
                </div>
              </div>
              <p>
                Our team creates intuitive and visually appealing designs
                tailored to your brand and user needs.
              </p>
            </div>
          </div>
          <div className="mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.ecomm_process_box}>
              <div className={styles.ecomm_box_flex}>
                <div className={styles.ecomm_num}>
                  03<h5>Iterative Development</h5>
                </div>
                <div className={styles.ecom_box_icon}>
                <i class="fa-solid fa-diagram-project"></i>
                </div>
              </div>
              <p>
                We develop the portal in iterative cycles, allowing for
                continuous improvements and feature enhancements.
              </p>
            </div>
          </div>
          <div className="mb-xl-0 mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.ecomm_process_box}>
              <div className={styles.ecomm_box_flex}>
                <div className={styles.ecomm_num}>
                  04<h5>Portal Integration</h5>
                </div>
                <div className={styles.ecom_box_icon}>
                <i class="fa-solid fa-puzzle-piece"></i>
                </div>
              </div>
              <p>
                We seamlessly integrate custom and third-party tools to ensure
                comprehensive functionality.
              </p>
            </div>
          </div>
          <div className="mb-md-0 mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.ecomm_process_box}>
              <div className={styles.ecomm_box_flex}>
                <div className={styles.ecomm_num}>
                  05<h5>QA and Testing</h5>
                </div>
                <div className={styles.ecom_box_icon}>
               <i class="fa-solid fa-bug"></i>
                </div>
              </div>
              <p>
                Our rigorous testing process ensures the portal is secure,
                reliable, and performs optimally.
              </p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.ecomm_process_box}>
              <div className={styles.ecomm_box_flex}>
                <div className={styles.ecomm_num}>
                  06<h5>Deployment and Setup</h5>
                </div>
                <div className={styles.ecom_box_icon}>
                <i class="fa-solid fa-rocket"></i>
                </div>
              </div>
              <p>
                We efficiently deploy the portal and provide complete setup
                support to ensure a smooth launch.
              </p>
            </div>
          </div>
        </div>
        <div className="justify-content-center text-center row">
          <div className="mt-3 mt-md-5 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Web Portal Development">
                Web Portal Development
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
