"use client";
import React from "react";
import Image from "next/image";
import styles from "./mobile.module.scss";
import Link from "next/link";

export default function Mobilechannel() {
  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center resp_order">
            <Image
              src="/images/web_service/mobile_app_leap.webp"
              alt="web development company"
              width={591}
              height={418}
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2>
              High-Caliber <span>App Development</span> at Your Fingertips
            </h2>
            <p>
              Our mobile application development services are designed to
              accelerate app production and upscale performance quality. From
              high-fidelity wireframe designs to robust, cyber-secure solutions,
              our full-cycle app development company is your transformation
              partner. Our full-stack app engineers excel at executing complex
              mobile app development projects, whether for native or
              cross-platform applications.
            </p>
             <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Free Consultation">
                  Free Consultation
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
