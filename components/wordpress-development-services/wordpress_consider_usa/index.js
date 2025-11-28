import React from "react";
import styles from "./consider_usa.module.scss";
import Link from "next/link";

export default function Consider_usa() {
  return (
    <div className={styles.consider_usa}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-12">
            <div className={styles.consider_content}>
              <h2>
                When to Consider Our <span>Custom WordPress Development Services?</span>
              </h2>
              <p>
                Whether building from the ground up or looking to upgrade, we
                guarantee smooth and custom solutions to meet your website
                development requirements. Here’s when you should consider
                signing up for our WordPress development services:
              </p>
              <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Build WordPress Site">
                  Build WordPress Site
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
            </Link>
            </div>
          </div>
          <div className="offset-xl-1 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <div className={styles.consider_box}>
              <h6>Starting Fresh</h6>
              <p>
                If you're launching a new website, our custom WordPress
                development ensures a strong foundation designed to meet your
                needs.
              </p>
            </div>
            <div className={styles.consider_box}>
              <h6>Site Enhancement</h6>
              <p>
                When your existing site needs an upgrade, our services provide
                smooth improvements, enhancing functionality and user
                experience.
              </p>
            </div>
            <div className={styles.consider_box}>
              <h6>Custom Features</h6>
              <p>
                If you require unique features or functionalities, our team
                specializes in developing custom solutions to make your website
                stand out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
