import React from "react";
import styles from "./magento_channel.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Magento_channel({ data }) {
  const { image, heading, highlighted, description, button } = data;

  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center resp_order">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2>
              {heading} <span>{highlighted}</span>
            </h2>
            <p>{description}</p>
            <Link className={styles.btn} href={button.link}>
              <span className={styles.btn_label} data-text={button.text}>
                {button.text}
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
