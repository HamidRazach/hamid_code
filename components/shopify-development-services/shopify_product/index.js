import React from "react";
import styles from "./shopify_product.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Shopify_products() {
  return (
    <section className={styles.product_sec}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12 col-lg-7">
            <div className={styles.left_content}>
              <div className={styles.product_wrapper}>
                <div className={styles.small}>The Power Of Possibilities</div>
                <h2>
                  Hire Developer{" "}
                  <span className={styles.gardient_text}>
                    For Shopify Website
                  </span>{" "}
                  Development
                </h2>
                <p className={styles.gen_text}>
                  Our team of skilled developers harnesses the latest
                  technologies to build feature-rich apps that seamlessly
                  integrate with your Shopify store, enhancing functionality and
                  user engagement.
                </p>
              </div>
              <div className={styles.header_button}>
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

          <div className="col-12 col-md-12 col-sm-12 col-lg-5">
            <div className={styles.image_wrapper}>
              <Image
                src="/images/Shopify_services/mockup-integrations.png"
                alt="team of developers discussing their mobile app project"
                width={700}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
