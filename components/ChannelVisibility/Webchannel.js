"use client";
import React from "react";
import Image from "next/image";
import styles from "./WebChannel.module.scss";

export default function Webchannel() {
  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          
          {/* Image Section */}
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center">
            <Image
              src="/images/web_service/visibile_desktop.webp"
              alt="web development company"
              width={591}
              height={418}
              className={styles.image}
            />
          </div>

          {/* Content Section */}
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2 className={styles.h2}>
              Expert Web Development Services & Professional <span>Designers</span>
            </h2>
            <p className={styles.p}>
              An organization needs to establish a robust web presence in the present world where the internet is a key driver. Across all the online touchpoints, an efficiently designed, easy-to-navigate website is most effective for reaching out, communicating, and converting potential customers. When choosing an online Web Company such as Digital Minds On you can have a custom website that will align with your specific business requirements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
