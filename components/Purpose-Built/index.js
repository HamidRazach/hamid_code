"use client";
import React from "react";
import styles from "./development_solutions.module.scss";

export default function DevelopmentSolutions() {
  return (
    <div className={styles.technoloy_sec}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 m-auto text-center">
            <h2>
              Purpose-Built <span>Web Development</span> Solutions
            </h2>
            <p>
              Digitalminson, a full-scale web development company, has all the
              elements to build dynamic and progressive web products. From
              customer-facing website and internal management portal to
              e-commerce store, we ensure excellence in every project with
              high-end development and systemic project management.
            </p>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-11 col-xxl-11 m-auto">
            <div className={styles.technology_main}>
              <div className={styles.technology_item}>
                <div className={styles.svg_icon}>01</div>
                <h6>
                  Optimized Performance
                </h6>
                <p>
                  Use efficient coding and performance optimization for a quick,
                  friendly, and reliable website. Speed up operations and offer
                  responsive browsing to users.
                </p>
              </div>
              <div className={styles.technology_item}>
                <div className={styles.svg_icon}>02</div>
                <h6>
                  Robust Security
                </h6>
                <p>
                  Integrate secure data handling, encryption, and continuous
                  monitoring to protect websites and users against threats.
                  Maintain 100% integrity.
                </p>
              </div>
              <div className={styles.technology_item}>
                <div className={styles.svg_icon}>03</div>
                <h6>
                  Scalable Architecture
                </h6>
                <p>
                  Design custom, flexible web architectures to support business
                  growth and evolving needs. Get an adaptive, expansible product
                  that’s future-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
