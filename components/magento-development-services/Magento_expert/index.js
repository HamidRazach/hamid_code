import React from "react";
import styles from "./magento_expert.module.scss";
import Image from "next/image";

export default function Magento_expert({ data }) {
  const { topContent, services } = data;

  return (
    <section className={styles.ecommerce_web_process}>
      <div className="container">
        {/* Top Content */}
        <div className="row">
          <div className="m-auto text-center col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-12">
            <span className={styles.small}>{topContent.small}</span>
            <h2>
              {topContent.heading} <span>{topContent.highlighted}</span>
            </h2>
            <p className={styles.small_para}>{topContent.description}</p>
          </div>
        </div>

        {/* Service Boxes */}
        <div className="mt-3 mt-md-4 row">
          {services.map((service, index) => (
            <div
              key={index}
              className="mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12"
            >
              <div className={styles.ecomm_process_box}>
                <div className={styles.ecom_box_icon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={70}
                    height={70}
                  />
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
