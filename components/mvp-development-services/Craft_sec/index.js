import React from "react";
import styles from "./Craft_sec.module.scss";
import Link from "next/link";

export default function Craft_sec({ data }) {
  if (!data) return null;

  const { heading, highlight, description, buttonText, buttonLink } = data;

  return (
    <section className={styles.Craft_sec}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 mx-auto">
            <div className="text-center">
              <h2>
                {heading} <br />
                <span>{highlight}</span>
              </h2>
              <p>{description}</p>

              {buttonText && (
                <Link className={styles.btn} href={buttonLink || "contact"}>
                  <span className={styles.btn_label} data-text={buttonText}>
                     {buttonText}
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>

              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
