'use client';
import React from "react";
import styles from "./ratingusa.module.scss";


export default function Rating() {
  return (
    <div className={styles.rating_usa}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
               <i class="fa-regular fa-desktop"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>60+</div>
                <p>Web Experts</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <i class="fa-regular fa-folder"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>70+</div>
                <p>Successful Projects</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
              <i class="fa-regular fa-star-half-stroke"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>5.0</div>
                <p>GoodFirms Rating</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
              <i className="fa-regular fa-trophy"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>4.9</div>
                <p>Clutch Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
