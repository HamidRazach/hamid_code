import React from "react";
import styles from "./web_design_company.module.scss";
import Link from "next/link";

export default function Web_Design_Company() {
  return (
    <div
      className={styles.common_section}
      style={{
        backgroundImage: "url('/images/web-design/BgImgNj.webp')",
      }}
    >
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="my-auto col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-12">
              <h2>A Web Design Company <span>That Delivers Results</span></h2>
            <p>
              A website isn’t there just to establish your brand presence in
              today's digital world as modern users expect more than just a
              flashy-looking website that’s aesthetically breathtaking and
              offers them real-time value. That’s exactly why we have embarked
              on a mission to offer web designing services in NJ with a focus on
              ensuring business growth.
            </p>
            <p>
              Our approach to any website project is first to understand your
              business model and strategy. Once we’ve understood what you
              exactly want, only then do we begin working on your website. Every
              function or feature that we put into your website is aimed towards
              aiding just one major goal i.e. to power maximum conversions,
              period!
            </p>
            <Link className={styles.btn} href="/contact">
            <span className={styles.btn_label} data-text="Free Consultation">
              free Consultation
            </span>
            <span className={styles.btn_icon}>
              <i className="fa-solid fa-arrow-up-right" />
            </span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
