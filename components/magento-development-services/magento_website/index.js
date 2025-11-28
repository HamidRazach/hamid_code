import React from "react";
import styles from "./magento_website.module.scss";
import Image from "next/image";

export default function Magento_website({ data }) {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-12 col-lg-6 col-12">
            <div className={styles.why_img}>
              <Image
                src={data.image.src}
                width={data.image.width}
                height={data.image.height}
                className="img-fluid"
                alt={data.image.alt}
              />
            </div>
          </div>

          {/* Content Column */}
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
        </div>
      </div>
    </section>
  );
}
