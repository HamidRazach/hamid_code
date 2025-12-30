import React from "react";
import styles from "./DigitalRating.module.scss";

export default function DigitalRating() {
  return (
    <div
      className={styles.rating_usa}
      style={{
        backgroundImage: 'url("/images/backgrounds/rating-digital-back.webp")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 mb-xl-0 mb-md-4 mb-0">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
             <i class="fa-solid fa-rocket"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>40+</div>
                <p>Growth Marketers</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 mb-xl-0 mb-md-4 mb-0">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
            <i className="fa-solid fa-trophy"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>50+</div>
                <p>Brands Scaled</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ps-xl-5">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
             <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>4.9</div>
                <p>Clutch Rating</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ps-xl-5">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
              <i class="fa-solid fa-hand-holding-dollar"></i>

              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>$200k</div>
                <p>Ad Spend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
