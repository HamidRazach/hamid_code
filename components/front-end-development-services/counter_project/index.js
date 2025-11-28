"use client";
import React, { useEffect, useState } from "react";
import styles from "./counter_project.module.scss";
import Link from "next/link";

const Counter_project = ({ data }) => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const newCounts = {};
    data.counters.forEach(({ key, end }) => {
      let start = 0;
      const duration = 2000;
      const incrementTime = 30;
      const step = Math.ceil(end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        newCounts[key] = start;
        setCounts((prev) => ({ ...prev, [key]: start }));
      }, incrementTime);
    });
  }, [data]);

  return (
    <section className={styles.counterSection}>
      <div className="container">
        <h2 className={styles.h2_head}>
          {data.title} <span>{data.highlightTitle}</span> {data.subTitle}
        </h2>

        <div className="row justify-content-center">
          {data.counters.map((item, idx) => (
            <div key={idx} className={`col-12 col-md-3 ${styles.counterCol}`}>
              <div className={styles.counterBox}>
                <span className={styles.counterNumber}>
                  {counts[item.key] || 0}
                </span>
                <p className={styles.counterText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.front_btn}>
          <Link className={styles.btn} href={data.button.link}>
            <span className={styles.btn_label} data-text={data.button.text}>
              {data.button.text}
            </span>
            <span className={styles.btn_icon}>
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Counter_project;
