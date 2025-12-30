"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./wordpress_rating_usa.module.scss";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = parseFloat(target);
          const duration = 1500;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(counter);
              start = end;
              setHasAnimated(true);
            }
            setCount(parseFloat(start.toFixed(1)));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className={styles.rating_num}>
      {count.toFixed(1)}
    </div>
  );
}

export default function Rating_usa() {
  return (
    <section className={styles.rating_usa}>
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          {/* 1️⃣ Clutch */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 d-flex justify-content-center">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <div className={styles.rating_content}>
                <Counter target="4.8" />
                <p>Average Review Rating on Clutch</p>
              </div>
            </div>
          </div>

          {/* 2️⃣ GoodFirms */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 d-flex justify-content-center">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className={styles.rating_content}>
                <Counter target="5.0" />
                <p>Average Review Rating on GoodFirms</p>
              </div>
            </div>
          </div>

          {/* 3️⃣ RightFirms */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 d-flex justify-content-center">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <div className={styles.rating_content}>
                <Counter target="4.8" />
                <p>Average Review Rating on RightFirms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
