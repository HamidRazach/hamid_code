import React from "react";
import styles from "./magento_products.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Magento_products({ data }) {
  return (
    <section className={styles[data.sectionClass]}>
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-12 col-md-12 col-sm-12 col-lg-7">
            <div className={styles.left_content}>
              <div className={styles.product_wrapper}>
                <div className={styles.small}>{data.small}</div>
                <h2>
                  {data.heading}{" "}
                  <span className={styles.gardient_text}>
                    {data.highlighted}
                  </span>{" "}
                  {data.afterHighlight}
                </h2>
                <p className={styles.gen_text}>{data.description}</p>
              </div>
              
              <div className={styles.header_button}>
                <Link className={styles.btn} href={data.button.link}>
                  <span className={styles.btn_label} data-text={data.button.text}>
                   {data.button.text}
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>

              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-12 col-sm-12 col-lg-5">
            <div className={styles.image_wrapper}>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
