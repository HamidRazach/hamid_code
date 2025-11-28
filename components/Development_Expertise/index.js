"use client";
import React from "react";
import styles from "./Development_expertise.module.scss";


export default function DevelopmentExpertise() {
  return (
    <div className={styles.Perks}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-12">
            <h2>
              Digital Minds On Web Development <span>Expertise</span>
            </h2>
            <p>
              We do not claim to be #1, but we excel at what we do. With an
              experienced, full-scale in-house team, we have a reliable and
              sought-after web development cycle to produce efficient, secure,
              and growth-compliant products that businesses love.
            </p>
          </div>
        </div>
          <div className={`row ${styles.perks_padd}`}>
          <div className="mb-lg-5 mb-xl-0 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>
                  Specializes Modern
                  <br /> Technologies
                </h4>
                <p>
                  Accelerate full-stack development using modern low-code,
                  cloud-based frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-lg-5 mb-xl-0 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>Result-Driven, Adaptive Workflow</h4>
                <p>
                  We keep the development process simple until it challenges us
                  to scale up resource allocation. On-time project delivery,
                  every time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>
                  Expertise Across
                  <br /> Industries
                </h4>
                <p>
                  We help businesses across 15+ domains to research, shape, and
                  launch an authoritative web platform.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12">
            <div className={styles.perks_box}>
              <div className={styles.perks_content}>
                <h4>
                  Shorten Time-to- <br />
                  Market
                </h4>
                <p>
                  Reach the masses looking for you online with a fast-loading,
                  friendly, and well-functioning website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
