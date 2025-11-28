"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./partner_usa.module.scss";

export default function Wordpress_partner_usa() {
  const counters = [
    { value: 4.8, label: "Average Review Rating on Clutch" },
    { value: 5.0, label: "Average Review Rating on GoodFirms" },
    { value: 4.8, label: "Average Review Rating on RightFirms" },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const duration = 1500;
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        setCounts(counters.map((c) => +(c.value * progress).toFixed(1)));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [visible]);

  return (
    <div className={styles.partner_usa} ref={sectionRef}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 my-auto">
            <div className={styles.partner_content}>
              <h2>Partner Up With The Right <span>WordPress Development Agency</span></h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <p>
              Partner with a WordPress agency that understands your goals. Our proven expertise and client reviews highlight our commitment to delivering top-tier WordPress solutions across the USA.
            </p>
          </div>
        </div>

        <div className={`row h-100 ${styles.partner_padd}`}>
          {counters.map((item, index) => (
            <div
              key={index}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 text-center"
            >
              <div className={styles.partner_num}>{counts[index].toFixed(1)}</div>
              <div className={styles.partner_para}>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
