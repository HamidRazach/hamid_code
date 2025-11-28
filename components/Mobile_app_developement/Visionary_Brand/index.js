import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Visionary_Brand.module.scss";

export default function Visionary_Brand() {
  return (
    <section className={styles.reimagine_health}>
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
                Chosen by <span>150+ Visionary Brands</span> for App Development
              </h2>
              <p>
                Ambitious brands don’t gamble on the ordinary. They partner with
                a fearless app development company that delivers bold,
                high-impact mobile app development projects. Our mobile
                application development services are designed to scale fast, wow
                users, and win markets. Ready to be next?
              </p>
              <Link class={styles.btn} href="/contact">
                <span class={styles.btn_label} data-text="Free Consultation">
                  Free Consultation
                </span>
                <span class={styles.btn_icon}>
                  <i class="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
            <div className="text-center col-xxl-5 col-xl-5 col-lg-4 col-md-4 col-12">
              <div className={styles.img_mob}>
                <Image
                  src="/images/mobile-app-development/choosen-mob.webp"
                  className={styles.img_fluid}
                  alt="app development company"
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
  );
}
