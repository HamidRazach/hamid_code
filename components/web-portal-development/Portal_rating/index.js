import React from "react";
import styles from "./Portal_rating.module.scss";

export default function Portal_rating() {
  return (
    <div className={styles.rating_usa}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <i class="fa-solid fa-laptop-code"></i>
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
                <i class="fa-solid fa-store"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>80+</div>
                <p>eCommerce Projects</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
              <i class="fa-solid fa-star-half-stroke"></i>
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
                <i class="fa-solid fa-medal"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>4.8</div>
                <p>Clutch Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
