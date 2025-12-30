"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./ratingsoftware.module.scss";

export default function Ratingsoftwaredevelopement() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className={styles.rating_custom_software}
      style={{ background: "rgb(9, 39, 62)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.rating_main}>
              {/* 1️⃣ First Counter */}
              <div className={styles.rating_item}>
                <div className={styles.rating_flex}>
                  <div className={styles.rating_svg}>
                  <i class="fa-solid fa-globe"></i>
                  </div>
                  <div className={styles.rating_content}>
                    <h3>{inView ? <CountUp end={35} duration={2.5} /> : 0}+</h3>
                    <p>Industries Served Globally</p>
                  </div>
                </div>
              </div>

              {/* 2️⃣ Second Counter */}
              <div className={styles.rating_item}>
                <div className={styles.rating_flex}>
                  <div className={styles.rating_svg}>
                 <i class="fa-solid fa-handshake"></i>
                  </div>
                  <div className={styles.rating_content}>
                    <h3>{inView ? <CountUp end={50} duration={2.5} /> : 0}+</h3>
                    <p>Satisfied Clients and Projects</p>
                  </div>
                </div>
              </div>

              {/* 3️⃣ Third Counter (example) */}
              <div className={styles.rating_item}>
                <div className={styles.rating_flex}>
                  <div className={styles.rating_svg}>
                  <i class="fa-solid fa-gear"></i>
                  </div>
                  <div className={styles.rating_content}>
                    <h3>
                      {inView ? <CountUp end={100} duration={2.5} /> : 0}+
                    </h3>
                    <p>Custom Software Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
