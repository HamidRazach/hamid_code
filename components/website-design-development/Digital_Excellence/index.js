"use client";
import React from "react";
import styles from "./Digital_excellence.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Digital_Excellence() {
  return (
    <div className={styles.trusted_company}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <h2>
              Fostering Digital Excellence in <span>Web Design and Development</span>
            </h2>
            <p>
              Digitalmindson stands as a prominent web development company in dedicated to strengthening your brand through
              cutting-edge, responsive web design that seamlessly adapts to
              various device types, including laptops, smartphones, and tablets.
            </p>
            <p>
              Our primary focus is on crafting distinctive digital products that
              not only enhance your brand's image but also deliver top-notch,
              sustainable code. Additionally, we prioritize the scalability of
              your website, ensuring that it can be extended and improved
              cost-effectively over time without the need for a complete
              redesign.
            </p>
            <p>
              What sets Digitalmindson apart is our unique blend of business acumen,
              design prowess, and technical expertise. Our exceptional results
              are achieved through attentive client collaboration, the creation
              of functional and aesthetically pleasing designs, and the
              meticulous selection of the most appropriate tools and
              technologies for each project.
            </p>
            <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Contact Us Today!">
                  Contact Us Today!
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>

          </div>
          <div className="my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="trustedimg">
              <span
                className=" lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <Image
                  src="/images/web-design/new-jersey.webp"
                  alt="TrustedImg"
                  className="img-fluid"
                  width={541}
                  height={468}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
