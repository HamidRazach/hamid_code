import React from "react";
import styles from "./Portal-solutions.module.scss";


export default function Portal_solution() {
  return (
    <section
      className={styles.web_portal_industries}
      style={{ background: "rgb(249, 249, 249)" }}
    >
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-7 col-xl-8 col-lg-9 col-md-10 col-12">
            <h2>
              Industries We Serve with <span>Our Web Portal </span>Solutions
            </h2>
            <p>
              Web portal precisely built to cater to your specific business
              requirements. We are experts in facilitating diverse industries
              based on the variable nature of business with our web portal
              development services:
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-5 row">
          <div className="m-auto text-center col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-12">
            <div className={styles.ecommerce_industries_main}>
              <div className={styles.ecommerce_indus_item}>
                <div className={styles.ecommerce_indus_icon}>
                  <i class="fa-solid fa-car"></i>
                </div>
                <div className={styles.ecommerce_indus_head}>
                  <h5>Automotive</h5>
                </div>
              </div>
              <div className={styles.ecommerce_indus_item}>
                <div className={styles.ecommerce_indus_icon}>
                   <i class="fa-solid fa-coins"></i>
                </div>
                <div className={styles.ecommerce_indus_head}>
                  <h5>Fintech</h5>
                </div>
              </div>
              <div className={styles.ecommerce_indus_item}>
                <div className={styles.ecommerce_indus_icon}>
                  <i class="fa-solid fa-cannabis"></i>
                </div>
                <div className={styles.ecommerce_indus_head}>
                  <h5>Cannabies</h5>
                </div>
              </div>
              <div className={styles.ecommerce_indus_item}>
                <div className={styles.ecommerce_indus_icon}>
                  <i class="fa-solid fa-heartbeat"></i>
                </div>
                <div className={styles.ecommerce_indus_head}>
                  <h5>Healthcare</h5>
                </div>
              </div>
              <div className={styles.ecommerce_indus_item}>
                <div className={styles.ecommerce_indus_icon}>
                 <i class="fa-solid fa-hotel"></i>
                </div>
                <div className={styles.ecommerce_indus_head}>
                  <h5>Hospitality</h5>
                </div>
              </div>
              <div className={styles.ecommerce_indus_item}>
                <div className={styles.ecommerce_indus_icon}>
                <i class="fa-solid fa-shield"></i>
                </div>
                <div className={styles.ecommerce_indus_head}>
                  <h5>Insurance</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
