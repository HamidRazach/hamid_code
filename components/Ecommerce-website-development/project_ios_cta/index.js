"use client";
import React, { useState } from "react";
import styles from "./project_ios.module.scss";
import Link from "next/link";

export default function Project_cta() {
  return (
    <section className={styles.project_ios_cta}>
      <div className="container">
        <div
          className={styles.project_cta_box_wrap}
          style={{
            backgroundImage:
              'url("/images/ecommerce-web/ecomm-cta.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="h-100 align-content-center row">
            <div className="my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <h2>
                Ready to Take <span>Your Ecommerce Sales</span> to the Next
                Level?
              </h2>
              <p>
                Partner with top experts to build a custom eCommerce website
                that delights your customers, simplifies buyer journeys and
                multiplies your sales revenue.
              </p>
              <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Get Started">
                  Get Started
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
