"use client";
import React from "react";
import styles from "./drivenagency.module.scss";
import Link from "next/link";

export default function Agency_driven() {
  return (
    <section className={`project-ios-cta text_white ${styles.agencySection}`}>
      <div className="container">
        <div className={styles.ctaBox}>
          <div className="align-content-center row">
            <div className="my-auto col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-12">
              <h2>
                Your Search for a <span>Reliable, Results-Driven</span> Digital
                Marketing Agency Ends Here!
              </h2>
              <p>
                Achieve your marketing goals without overstretching your budget.
                Connect with our expert team today to get a FREE custom strategy
                for your marketing needs.
              </p>
              <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Free Proposal">
                  Free Proposal
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
