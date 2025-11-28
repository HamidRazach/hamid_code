"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './augmente.module.scss';

export default function Augmentmobileapp() {
  return (
    <section
      className={styles.augmentedmobileapp}
      style={{
        backgroundImage: 'url("/images/backgrounds/augmented_mob-banner.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="my-auto col-lg-6 col-md-12 col-12">
            <h2>
              Accelerate <span>Mobile App Launch</span> with Digitalmindson
            </h2>
            <p>
              Got an app idea? We’ve you covered with instant MVP development
              followed by full-stack, custom mobile app development services.
            </p>
            <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Build My App">
                  Build My App
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
          </div>
          <div className="text-center col-lg-6 col-md-12 col-12">
            <div className={styles.winning_image}>
              <Image
                src="/images/backgrounds/acclerate-mob-image.webp"
                className="img-fluid"
                alt="app development company"
                width={1774}
                height={1762}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
