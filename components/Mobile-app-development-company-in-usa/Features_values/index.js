"use client";
import React from "react";
import Link from "next/link";
import styles from "./Features.module.scss";

export default function Features_values({ data }) {
  const { heading, subheading, description, button, features } = data;

  return (
    <section className={styles.industry_uk_app}>
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <h2>
              {heading} <span>{subheading}</span>
            </h2>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <p>{description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-3 row">
          <div className="col-12">
            <div className={styles.industy_uk_main}>
              {features?.map((feature, index) => (
                <div key={index} className={styles.industy_uk_item}>
                  <div className={styles.industry_uk_icon}>{feature.icon}</div>
                  <div className={styles.industry_uk_content}>
                    <h5>{feature.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4 row">
          <div className="m-auto text-center col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text={button}>
                {button}
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
