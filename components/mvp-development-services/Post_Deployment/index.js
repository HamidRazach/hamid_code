import React from "react";
import Image from "next/image";
import styles from "./Post_deployment.module.scss";

export default function Post_Deployment({ data }) {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.why_img}>
              <Image
                src={data.image.src}
                className={styles.img_fluid}
                width={data.image.width}
                height={data.image.height}
                alt={data.image.alt}
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.why_ctext}>
              <h2>
                {data.heading} <span>{data.highlight}</span>
              </h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
