import React from "react";
import styles from "./Industry_usa.module.scss";
import Link from "next/link";

export default function Wordpress_Industry_usa() {
  return (
    <div className={styles.Industry_usa}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-12">
            <h2>
              WordPress Website Development Services For Different{" "}
              <span>Industries</span>
            </h2>
            <p>
              Our WordPress website design services meet the distinct needs of
              various industries. We prioritize user-friendly, high-performance
              websites that align with industry standards for a strong online
              presence and optimal functionality across diverse sectors.
            </p>
            <p>Here are the industries that we serve:</p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Build WordPress Site">
                Build WordPress Site
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12">
            <div className={styles.industry_scroll}>
              <h3>Retail</h3>
              <h3>E-commerce</h3>
              <h3>Insurance</h3>
              <h3>FinTech</h3>
              <h3>Entertainment </h3>
              <h3>Health &amp; Fitness</h3>
              <h3>Lifestyle</h3>
              <h3>Education</h3>
              <h3>Real Estate</h3>
              <h3>Logistics</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
