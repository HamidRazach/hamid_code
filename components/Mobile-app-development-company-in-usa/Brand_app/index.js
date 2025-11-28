"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Brand_app.module.scss";

export default function Brand_app({ data }) {
  return (
    <>
      {data.map((item) => (
        <section key={item.id} className={styles.reimagine_health}>
          <div className="h-100 container">
            <div
              className={styles.reimagine_health_box}
              style={{
                background:
                  "linear-gradient(266.32deg, rgb(0, 14, 21) 15.06%, rgb(7, 27, 39) 60.42%, rgb(7, 27, 39) 85.1%)",
              }}
            >
              <div className="h-100 align-items-center row">
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-12">
                  <h2>
                    {item.mainHeading} <span>{item.highlight}</span>
                  </h2>
                  <p>{item.description}</p>

                  {item.btnLabel && (
                    <Link className={styles.btn} href={item.btnLink}>
                      <span className={styles.btn_label} data-text={item.btnLabel}>
                        {item.btnLabel}
                      </span>
                      {item.btnIcon && (
                        <span className={styles.btn_icon}>
                          <i className={item.btnIcon}></i>
                        </span>
                      )}
                    </Link>
                  )}
                </div>

                <div className="text-center col-xxl-5 col-xl-5 col-lg-4 col-md-4 col-12">
                  <div className={styles.img_mob}>
                    <Image
                      src={item.imgSrc}
                      className={styles.img_fluid}
                      alt={item.imgAlt}
                      width={363}
                      height={724}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
