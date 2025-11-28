"use client";
import Image from "next/image";
import styles from "./client.module.scss";
import React from "react";

const logos = [
  "logo-white.png",
  "logo-path-finder.webp",
  "logo2.svg",
  "client_logo_4.png",
  "client_logo_3.webp",
  "client_logo_2.png",
  "client_logo_1.png",
  "client_logo_5.png",
  "client_logo_9.webp",
  "client_logo_10.webp",
  "mcci_new_logo.png",
  "logo.webp",
  "logo.svg",
  "client_logo_8.webp",

];

export default function OurClients() {
  return (
    <section className={styles.our_client_section}>
      <div className="container text-center">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h2 className={styles.section_title}>Our Clients</h2>
            <p className={styles.section_desc}>
              We collaborate with global brands and startups across diverse
              industries to deliver innovative solutions that drive growth and
              success.
            </p>
          </div>
        </div>

        <div className={styles.logo_grid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logo_item}>
              <div className={styles.logo_wrapper}>
                <Image
                  src={`/images/clients/${logo}`}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={120}
                  className={styles.client_logo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
