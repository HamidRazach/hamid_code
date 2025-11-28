import React from "react";
import styles from "./magento_rewrite.module.scss";
import Image from "next/image";

export default function Magento_rewrite({ data }) {
  return (
    <section className={styles.rewrite_sec}>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_img}>
              {data.smallText && <div className={styles.small}>{data.smallText}</div>}
              <h2>
                {data.heading} <span>{data.highlighted}</span>
              </h2>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
                className={styles.img_fluid}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_text}>
              {data.items.map((item, index) => (
                <div className={styles.rewrite_div} key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
