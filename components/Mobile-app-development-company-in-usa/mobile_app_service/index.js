"use client";
import React from "react";
import Link from "next/link";
import styles from "./Mobile_app_development.module.scss";

export default function Dynamic_Service_Section({ data }) {
  if (!data) return null;

  const { heading, highlight, paragraph, buttonText, buttonLink, services } =
    data;

  return (
    <div className={styles.Robustand_section}>
      <div className="container">
        <div className="row">
          {/* ===== Left Content ===== */}
          <div className="col-xs-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
            <h2>
              {heading} <span>{highlight}</span>
            </h2>
            <p>{paragraph}</p>

            {buttonText && (
              <Link className={styles.btn} href={buttonLink || "/contact"}>
                <span className={styles.btn_label} data-text={buttonText}>
                  {buttonText}
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            )}
          </div>

          {/* ===== Right Content (Dynamic) ===== */}
          <div className="col-xs-12 col-md-6 col-lg-7 col-xl-6 col-xxl-6 offset-xl-1">
            <div className={styles.robustscroll}>
              <div className={styles.robust_box}>
                {services?.map((item, index) => (
                  <div key={index} className={styles.robust_content}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
