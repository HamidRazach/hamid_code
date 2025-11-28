import React from "react";
import styles from "./success_digitalmindson.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Success_digitalmindson() {
  return (
    <section className={styles.custom_ecommerce_portfolio}>
      <div className="container">
        <div className={styles.ecomm_port_box}>
          <h2 className="text-center mb-5">
            Custom Web Development Success by <span>Digitalmindson</span>
          </h2>
          <div className="row">
            <div className="mb-4 mb-lg-0 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <div className={styles.icon}>
                <Image
                  src="/images/ecommerce-web/portfolio-icon.webp"
                  alt="Digitalmindson_web"
                  width={202}
                  height={50}
                />
              </div>
              <div className={styles.content}>
                <h3>Al-Hussaini</h3>
                <p>
                  Alhussaini aimed to create an easy online shopping experience
                  for their customers. Our team created a customized ecommerce
                  platform that showcased their products effectively and managed
                  their inventory well. The new website included features like
                  advanced search, tailored recommendations, and a simplified
                  checkout process.
                </p>
                <h5>The result</h5>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#F47A1F"
                        d="M9.86 19.874A9.85 9.85 0 0 1 0 10.014 9.85 9.85 0 0 1 9.86.154a9.85 9.85 0 0 1 9.86 9.86 9.85 9.85 0 0 1-9.86 9.86m0-18.56a8.69 8.69 0 0 0-8.7 8.7c0 4.814 3.886 8.7 8.7 8.7s8.7-3.886 8.7-8.7-3.886-8.7-8.7-8.7"
                      ></path>
                      <path
                        fill="#F47A1F"
                        d="M8.7 14.309 3.654 9.263l.812-.812L8.7 12.685l6.554-6.554.812.812z"
                      />
                    </svg>
                    Increased online sales by 40% within the first quarter.
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#F47A1F"
                        d="M9.86 19.874A9.85 9.85 0 0 1 0 10.014 9.85 9.85 0 0 1 9.86.154a9.85 9.85 0 0 1 9.86 9.86 9.85 9.85 0 0 1-9.86 9.86m0-18.56a8.69 8.69 0 0 0-8.7 8.7c0 4.814 3.886 8.7 8.7 8.7s8.7-3.886 8.7-8.7-3.886-8.7-8.7-8.7"
                      ></path>
                      <path
                        fill="#F47A1F"
                        d="M8.7 14.309 3.654 9.263l.812-.812L8.7 12.685l6.554-6.554.812.812z"
                      />
                    </svg>
                    Improved customer satisfaction scores by 25%.
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#F47A1F"
                        d="M9.86 19.874A9.85 9.85 0 0 1 0 10.014 9.85 9.85 0 0 1 9.86.154a9.85 9.85 0 0 1 9.86 9.86 9.85 9.85 0 0 1-9.86 9.86m0-18.56a8.69 8.69 0 0 0-8.7 8.7c0 4.814 3.886 8.7 8.7 8.7s8.7-3.886 8.7-8.7-3.886-8.7-8.7-8.7"
                      ></path>
                      <path
                        fill="#F47A1F"
                        d="M8.7 14.309 3.654 9.263l.812-.812L8.7 12.685l6.554-6.554.812.812z"
                      />
                    </svg>
                    Reduced cart abandonment rates by 15%.
                  </li>
                </ul>
                <Link className={styles.btn} href="/contact">
                  <span className={styles.btn_label} data-text="View Case Study">
                    View Case Study
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="text-center my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <Image
                src="/images/ecommerce-web/portfolio-img.webp"
                alt="Digitalmindson_web"
                width={603}
                height={352}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
