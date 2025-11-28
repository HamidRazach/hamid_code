import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Task_management.module.scss";

export default function Task_Management({ data }) {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Right */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.why_ctext}>
              <h2>{data.heading}</h2>
              <p>{data.description}</p>
              <Link className={styles.btn} href={data.button.link}>
                  <span className={styles.btn_label} data-text={data.button.text}>
                    {data.button.text}
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>

            </div>
          </div>
          {/* Image Left */}
          {data.layout === "image-left" && (
            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
              <div className={styles.why_img}>
                <Image
                  src={data.image.src}
                  className={styles.img_fluid}
                  width={data.image.width}
                  height={data.image.height}
                  alt={data.image.alt}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
