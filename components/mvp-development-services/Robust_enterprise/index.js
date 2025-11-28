import React from "react";
import styles from "./Robust_enterprise.module.scss";

export default function RobustEnterprise({ data }) {
  if (!data) return null;

  const { heading, highlight, items } = data;

  return (
    <section className={styles.robustSection}>
      <div className="container">
        <h2 className={styles.heading}>
          {heading} <br />
          <span>{highlight}</span>
        </h2>

        <div className={styles.timeline}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.timelineItem} ${
                idx % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.contentBox}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className={styles.numberCircle}>{item.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
