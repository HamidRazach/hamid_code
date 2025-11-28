import React from "react";
import styles from "./magento_craft.module.scss";
import Link from "next/link";

export default function Magento_craft({ data }) {
  return (
    <section className={styles.Craft_sec}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9 col-md-12 col-12">
            <header>
              <h2>
                {data.heading}{" "}
                <span className={styles.gardient_text}>
                  {data.highlighted}
                </span>
              </h2>
            </header>

            <article>
              {data.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </article>

            {data.button && (
              <Link className={styles.btn} href={data.button.link}>
                <span className={styles.btn_label} data-text={data.button.text}>
                  {data.button.text}
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
