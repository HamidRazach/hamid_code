import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Mockup_mvp.module.scss";

export default function Mockup_mvp({ data }) {
  if (!data) return null;

  const { heading, highlight, description, buttonText, buttonLink, image } = data;

  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.why_img}>
              <Image
                src={image.src}
                className={styles.img_fluid}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.why_ctext}>
              <h2>
                {heading} <span>{highlight}</span>
              </h2>
              <p>{description}</p>

              {buttonText && (
                <Link className={styles.btn} href={buttonLink || "contact"}>
                <span className={styles.btn_label} data-text={buttonText}>
                  {buttonText}
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
