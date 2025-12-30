"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./mobile_rating.module.scss";

export default function MobileRating() {
  // Animation trigger when section comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // run once
    threshold: 0.3, // trigger when 30% visible
  });

  return (
    <div className={styles.rating_usa} ref={ref}>
      <div className="container">
        <div className="row">
          {/* 1️⃣ Apps Launched */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
              <i class="fa-regular fa-rocket"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>
                  {inView && <CountUp start={0} end={10} duration={2} />}+
                </div>
                <p>Apps Launched</p>
              </div>
            </div>
          </div>

          {/* 2️⃣ App Development Experts */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <i class="fa-regular fa-user-tie"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>
                  {inView && <CountUp start={0} end={10} duration={2} />}+
                </div>
                <p>App Development Experts</p>
              </div>
            </div>
          </div>

          {/* 3️⃣ Active App Users */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
              <i class="fa-regular fa-users"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>
                  {inView && (
                    <CountUp start={0} end={2} duration={2} suffix="M+" />
                  )}
                </div>
                <p>Active App Users</p>
              </div>
            </div>
          </div>

          {/* 4️⃣ Rating on Clutch */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
             <i class="fa-regular fa-thumbs-up"></i>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>
                  {inView && (
                    <CountUp start={0} end={4.8} duration={2} decimals={1} />
                  )}
                </div>
                <p>Rating on Clutch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
