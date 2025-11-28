"use client";
import React from "react";
import styles from "./Dimensional_growth.module.scss";

export default function Dimensional_growth({ data }) {
  const { heading, subheading, description, boxes } = data;

  return (
    <div className={styles.androidbuss}>
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="m-auto text-center col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-12">
            <h2>
              {heading} <span>{subheading}</span>
            </h2>
            <p>{description}</p>
          </div>
        </div>

        {/* Boxes */}
        <div className="buss-padd row">
          {boxes?.map((box, index) => (
            <div
              key={index}
              className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12"
            >
              <div className={styles.androidbuss_box}>
                <div className={styles.andoidbuss_content}>
                  <h6>{box.title}</h6>
                  <p>{box.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
