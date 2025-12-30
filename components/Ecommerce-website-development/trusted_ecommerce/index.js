import React from "react";
import styles from "./trusted_ecommerce.module.scss";

export default function Trusted_ecommerce() {
  return (
    <section className={styles.trusted_ecommerce_web}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-8 col-xl-8 col-lg-9 col-md-10 col-12">
            <h2>
              Your Trusted eCommerce <span>Web Development Company</span>
            </h2>
            <p>
              Digitalmindson, a leading e-commerce web development company,
              specializes in building dynamic and innovative online retail
              solutions. From user-friendly online stores to comprehensive
              management systems, we deliver high-performing, well-executed
              projects tailored to drive e-commerce success.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="m-auto col-xxl-10 col-xl-11 col-lg-12 col-md-12 col-12">
            <div className="mt-3 mt-md-4 row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div
                  className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>01</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Enhanced User Experience</h5>
                    <p>
                      Implement intuitive designs and seamless navigation for a
                      superior shopping experience. Increase customer
                      satisfaction and retention with user-friendly interfaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div
                  className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>02</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Advanced Data Analytics</h5>
                    <p>
                      Integrate powerful analytics tools to track user behavior
                      and sales trends. Make data-driven decisions to optimize
                      your e-commerce strategy and performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-md-0 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div
                  className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>03</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Omnichannel Integration</h5>
                    <p>
                      Synchronize your online store with various sales channels
                      for a unified experience. Manage inventory, orders, and
                      customer data effortlessly across platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div
                  className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>04</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Automated Marketing Tools</h5>
                    <p>
                      Deploy automated marketing solutions for personalized
                      customer outreach. Boost engagement, drive conversions,
                      and increase ROI with targeted campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
