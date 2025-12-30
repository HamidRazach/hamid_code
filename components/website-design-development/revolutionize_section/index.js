"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./revolutionize_section.module.scss";
import React from "react";

export default function Revolutionize_section() {
  return (
    <div className={styles.revolutionize_section}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <h2>
              Why Choose Digitalmindson for <span>Web Design and Development?</span>
            </h2>
            <p>
              We have a track record of delivering exceptional results. Our
              portfolio showcases a history of successful projects that speak to
              our commitment to excellence. As a based company, we
              possess proficient knowledge of the local market and its relative
              trends. Our approach is never one-size-fits-all. We craft
              tailor-made solutions to match your specific business goals and
              requirements. Moreover, we provide cost-effective solutions
              without compromising on quality, ensuring your project remains
              within budget. Our dedicated support team is ready to assist you
              with post-launch, ensuring your website continues to perform at
              its best. As a leading web design and development company in New
              Jersey, we embrace innovation, constantly seeking new and creative
              ways to enhance your website's functionality, design, and user
              experience.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Get a Custom Website">
                Get a Custom Website
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
          <div className="revolutionize_img col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <Image
                src="/images/web-design/nj-skyline.webp"
                alt="web development company"
                className={styles.img_fluid}
                width={320}
                height={490}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
