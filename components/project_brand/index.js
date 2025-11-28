import React from "react";
import styles from "./Project_marketing.module.scss";
import Link from "next/link";

export default function Marketing_project() {
  return (
    <section className={styles.project_ios_cta}>
      <div className="container">
        <div
          className={styles.project_cta_box_wrap}
          style={{
            backgroundImage:
              'url("/images/backgrounds/brand-unstoppable-cta.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="row align-content-center">
            <div className="col-12 col-md-10 col-lg-7 col-xl-7 col-xxl-7 my-auto">
              <h2>
                Ready For the Results that Make Your Brand{" "}
                <span>Unstoppable?</span>
              </h2>
              <p>
                For startups and enterprises looking for a reliable digital
                marketing agency in USA, Digitalmindson is ready to be your partner in
                business growth.
              </p>
              <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Get Free Audit">
                  Get Free Audit
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
