import React from "react";
import styles from "./magento_brand.module.scss";

export default function Magento_brand({ data }) {
  return (
    <section className={styles.game_changers_software}>
      <div className="container">
        <div className="row">
          {/* Left Title */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <div className={styles.small}>{data.small}</div>
            <h2>
              {data.heading} <span>{data.highlighted}</span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <p>{data.description}</p>
          </div>
        </div>

        {/* Dynamic Items */}
        <div className="mt-3 mt-md-4 row">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="mb-4 mb-md-0 col-lg-4 col-md-6 col-12"
            >
              <div
                className={styles.game_changers_box}
                style={{ background: "rgb(8, 28, 40)" }}
              >
                <div className={styles.content}>
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>{item.title}</h5>
                  <p style={{ color: "rgb(255, 255, 255)" }}>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
