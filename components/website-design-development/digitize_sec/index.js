import Image from "next/image";
import Link from "next/link";
import styles from "./digitize_sec.module.scss";
import React from "react";

export default function Digitize_sec() {
  return (
    <div className={styles.digitize_sec}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <h2 className={styles.head}>
              Digitalmindson Website Design <span> Experts Building Feature-Rich Web
              Solutions
              </span>
            </h2>
            <p>
              Digitalmindson houses a team of expert website developers, designers,
              and product engineers, making it inherently capable of taking on
              any website development project and making it a success
              irrespective of its complexity. We offer website design and
              development services across diverse industries, ranging from
              e-commerce to real estate, hospitals to educational organizations,
              and so on. Whichever sector we serve, our created websites are
              masterpieces because of our core focus on user experience,
              functionality, and performance. Moreover, our result-driven
              methodologies and success-oriented approach have made us the best
              web design and development company.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Talk to Our Experts">
                Talk to Our Experts
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
          <div className="digitize_img col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
              <Image
                src="/images/web-design/nj-laptop.webp"
                alt="website design company"
                width={621}
                height={747}
                className={styles.img_fluid}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
