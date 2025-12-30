"use client";
import React from "react";
import styles from "./Technologies.module.scss";

export default function Technologies_Uses() {
  return (
    <div className={styles.technoloy_sec}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-12">
            <div className={styles.example} data-text="Tech">
              <h2>
                Technologies Digitalmindson Uses for <span>Web Design Development</span>
              </h2>
            </div>
          </div>
          <div className="my-auto offset-xl-1 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <p>
              As a professional web design and development company, we leverage
              the latest tools and technologies to meet each project's unique
              needs.
            </p>
          </div>
          <div className="m-auto col-xxl-11 col-xl-11 col-lg-12 col-md-12 col-12">
            <div className={styles.technology_main}>
              <div className={styles.technology_item}>
                <div className={styles.svg_icon}>
                 <i class="fa-solid fa-laptop-code"></i>
                </div>
                <h6>Frontend Development</h6>
                <p>WordPress, Drupal, Webflow, React, Angular, Bootstrap</p>
              </div>
              <div className={styles.technology_item}>
                <div className={styles.svg_icon}>
                  <i class="fas fa-database"></i>
                </div>
                <h6>Backend</h6>
                <p>
                  PHP, Laravel, .NET Core, Scala, Ruby, Lua, Java, Sails, MySQL
                </p>
              </div>
              <div className={styles.technology_item}>
                <div className={styles.svg_icon}>
                  <i class="fas fa-cloud"></i>
                </div>
                <h6>Cloud Services</h6>
                <p>AWS Azure, Oracle Cloud, Google Cloud Platform</p>
              </div>
              <div className={styles.technology_item}>
                <div className={styles.svg_icon}>
                 <i class="fas fa-shopping-cart"></i>
                </div>
                <h6>E-commerce Platforms</h6>
                <p>WooCommerce Shopify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
