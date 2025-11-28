'use client';
import React from "react";
import styles from "./Rating_development.module.scss";
import Image from "next/image";
import CountUp from "react-countup";
import { ratingDevelopmentData } from "../../../constant/data"; // ✅ imported data

export default function Rating_development() {
  return (
    <div className={styles.rating_usa}>
      <div className="container">
        <div className="row">
          {ratingDevelopmentData.map((item) => (
            <div
              key={item.id}
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6"
            >
              <div className={styles.rating_box}>
                <div className={styles.rating_svg}>
                  <Image
                    src={item.icon}
                    alt="icons"
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <div className={styles.rating_content}>
                  <div className={styles.rating_num}>
                    <CountUp
                      end={item.number}
                      duration={2}
                      decimals={item.decimals || 0}
                    />
                    {item.suffix}
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
