import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./shopify_testmonial.module.scss";

export default function Shopify_testimonial({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        {/* Header */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6">
            <div className={styles.softHead}>
              <div className={styles.small}>{data.smallHeading}</div>
              <h2>{data.heading}</h2>
            </div>
          </div>
          <div className="col-12 col-md-6 text-md-end text-center">
            <div className={styles.clutch}>
              <Link href={data.clutchImg.link} target="_blank">
                <Image
                  width={150}
                  height={50}
                  src={data.clutchImg.src}
                  alt={data.clutchImg.alt}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="row">
          {/* Left Images */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className={styles.indicatorWrapper}>
              {data.testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className={`${styles.indicator} ${
                    index === activeIndex ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    width={74}
                    height={74}
                    src={t.img}
                    alt={t.name}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="col-12 col-md-6">
            <div className={styles.textBox}>
              <p>"{data.testimonials[activeIndex].text}"</p>
              <div className={styles.clientBox}>
                <Image
                  width={60}
                  height={60}
                  src={data.testimonials[activeIndex].img}
                  alt={data.testimonials[activeIndex].name}
                />
                <div>
                  <span className={styles.clientName}>
                    {data.testimonials[activeIndex].name}
                  </span>
                  <p>{data.testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
