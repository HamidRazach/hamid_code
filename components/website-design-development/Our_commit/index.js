"use client";
import React from "react";
import styles from "./Our_commit.module.scss";
import Link from "next/link";

export default function Our_commit() {
  return (
    <div className={styles.tekrevol_dark_bg}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="m-auto text-center col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-12">
            <div className={styles.example} data-text="App">
              <h2>
                We've designed over 100 cutting-edge websites, each a testament
                to our commitment to innovation and excellence.
              </h2>
            </div>
            <p>Want similar results?</p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Free Consultation">
                Free Consultation
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
