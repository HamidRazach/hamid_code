import React from "react";
import Image from "next/image";
import styles from "./digitalmarketingchannel.module.scss";
import Link from "next/link";

export default function DigitalChannel() {
  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          <div className={`col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center ${styles.resp_order}`}>
            <Image
              src="/images/backgrounds/digtal-mark-buss-mob.webp"
              alt="digital marketing company"
              width={591}
              height={418}
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2>
              What <span>Digital Marketing</span> Can Do for Your Business
            </h2>
            <p>
              Whether you are an eCommerce business looking to boost your sales,
              a tech startup targeting rapid scaling, or even a local service
              provider seeking to expand reach, digital marketing services have
              the power to make it happen for you.
            </p>
            <p>
              All you need is a results-driven digital marketing agency that
              knows exactly what to fine-tune your marketing funnels, relies on
              tried-and-tested strategies that work, and delivers results
              without the usual smoke and mirrors.
            </p>
            <p>
              Since 2022, Digitalmindson has partnered with hundreds of businesses
              across the USA and beyond to optimize targeted audiences, generate
              qualified leads, and boost brand authority. Market leadership and
              stronger customer connections? That’s the by-product of what we
              deliver.
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
