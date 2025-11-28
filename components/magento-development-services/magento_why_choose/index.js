import React from "react";
import Image from "next/image";
import styles from "./magento_why_choose.module.scss";

export default function Magento_why_choose({ data }) {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        {/* Top Heading */}
        <div className="row justify-content-center">
          <div className="col-xs-12 col-lg-8 col-md-12">
            <div className={styles.augment_head}>
              <h2>
                {data.heading.title} <span>{data.heading.highlight}</span>
              </h2>
              <p>{data.heading.description}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 col-12">
            <div className={styles.why_ctext}>
              <h2>
                {data.content.title} <span>{data.content.highlight}</span>
              </h2>
              <p>{data.content.description}</p>
              <div className={styles.out_s_text}>
                <ul>
                  {data.content.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-12 col-lg-6 col-12">
            <div className={styles.why_img}>
              <Image
                src={data.content.image.src}
                width={data.content.image.width}
                height={data.content.image.height}
                className="img-fluid"
                alt={data.content.image.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
