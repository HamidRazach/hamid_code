"use client";
import React, { useEffect, useState } from "react";
import styles from "./counter_sec.module.scss";

const CounterItem = ({ number, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    if (start === end) return;

    let duration = 2000; // total duration
    let incrementTime = 30; // interval

    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className={`col-12 col-md-3 ${styles.counterCol}`}>
      <div className={styles.counterBox}>
        <span className={styles.counterNumber}>{count}</span>
        <p className={styles.counterText}>{text}</p>
      </div>
    </div>
  );
};

export default function Counter_sec({ data }) {
  if (!data) return null;

  return (
    <section className={styles.counterSection}>
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, idx) => (
            <CounterItem key={idx} number={item.number} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
