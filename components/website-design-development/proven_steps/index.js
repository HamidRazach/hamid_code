"use client";
import React from "react";
import styles from "./proven.module.scss";

export default function Proven_steps() {
  return (
    <div className={styles.laverage_section}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="m-auto text-center col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-12">
            <h2>
              Digitalmindson Proven Steps to Web Design and Development Success
            </h2>
            <p>
              At Digitalmindson, we follow a clear and effective process to ensure the
              success of your web design and development project. Our method
              includes the following key steps:
            </p>
          </div>
          <div className="m-auto col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.process_listing}>
              <div className={styles.process_item}>
                <div className={styles.number}>01</div>
                <h6>Discovery</h6>
                <p>Conducting Product Discovery and Product Research</p>
              </div>
              <div className={styles.process_item}>
                <div className={styles.number}>02</div>
                <h6>Design</h6>
                <p>
                  Our skilled designers bring ideas to life with visually
                  stunning, user-friendly design
                </p>
              </div>
              <div className={styles.process_item}>
                <div className={styles.number}>03</div>
                <h6>Develop</h6>
                <p>
                  We employ cutting-edge tech and code for a responsive,
                  feature-rich website.
                </p>
              </div>
              <div className={styles.process_item}>
                <div className={styles.number}>04</div>
                <h6>Test and Launch</h6>
                <p>
                  Rigorous testing guarantees flawless functionality,
                  performance, and security for successful launch
                </p>
              </div>
              <div className={styles.process_item}>
                <div className={styles.number}>05</div>
                <h6>Support and Enhancement</h6>
                <p>
                  We offer continuous support for updates and enhancements,
                  ensuring your web presence stays effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
