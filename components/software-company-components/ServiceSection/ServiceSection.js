import React from "react";
import styles from "./coreservices.module.scss";
import Service_Slider from "../services_slider";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <section className={styles.digitalmindson__services}>
      <div className="container">
        <div className="row">
          <div className="mt-auto mb-auto col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-12">
            <div className={styles.example} data-text="Core Services">
              <h2>Core Services We Provide</h2>
            </div>
          </div>
          <div class="mt-auto mb-auto col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <Service_Slider />
          </div>
          <div className="mt-auto mb-auto col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.btn_wrap}>
              <Link className={styles.btn} href="contact">
                <span className={styles.btn_label} data-text="Consult on Goals">
                  Consult on Goals
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
