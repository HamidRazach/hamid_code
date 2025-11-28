"use client";
import React from "react";
import Link from "next/link";
import styles from "./Operation.module.scss";

export default function Business_Operations() {
  return (
    <section
      className={styles.streamline_cloud}
      style={{
        backgroundImage: 'url("/images/backgrounds/streamline-cta.webp")',
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-6">
            <h2>
              Streamline Your Business Operations with{" "}
              <span>Custom Software Solutions</span>
            </h2>
            <p>
              Partner with Digitalmindson and experience what a leading custom software
              development company can do for you.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Book a Call">
                Book a Call
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
