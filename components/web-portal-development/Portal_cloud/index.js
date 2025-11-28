import React from "react";
import styles from "./Portal_cloud.module.scss";
import Link from "next/link";

export default function Portal_cloud() {
  return (
    <section
      className={styles.streamline_cloud}
      style={{
        backgroundImage:
          'url("/images/web-portal-development/upgrade_web_portal.webp")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-12">
            <h2>
              Looking to <span>Upgrade Your Business Operation?</span>
            </h2>
            <p>
              Share your business requirements and we’ll build a web portal that
              fits your business structure.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Contact Us Today!">
                Contact Us Today!
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
