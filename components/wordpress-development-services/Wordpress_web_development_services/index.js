"use client";
import React from "react";
import Link from "next/link";
import styles from "./WordpressWebDevelopment.module.scss";

export default function WordpressWebDevelopmentServices() {
  return (
    <div className={styles.Robustand_section}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
            <h2>
              Our WordPress Development {""}
              <span>Services</span>
            </h2>
            <p>
              As a custom WordPress development company, we design, develop, and
              optimize websites, ensuring they meet your goals and deliver
              exceptional user experiences. Here are our WordPress web
              development services:
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Revolutionize Your Website">
                Revolutionize Your Website
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-7 col-xl-6 col-xxl-6 offset-xl-1">
            <div className={styles.robustscroll}>
              <div className={styles.robust_box}>
                <div className={styles.robust_content}>
                  <h4>Custom WordPress Web Development</h4>
                  <p>
                    We specialize in developing unique WordPress websites that
                    align with your specific requirements. As a top-notch
                    WordPress web design company, we use advanced tools like
                    PHPStorm and Git to ensure your site looks great and
                    functions flawlessly for an exceptional user experience.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>WordPress Custom Theme Development</h4>
                  <p>
                    Crafting unique identities, our WordPress custom theme
                    development ensures your website stands out. As a top-grade
                    WordPress website development company, we design themes that
                    align with your brand, using expert techniques to deliver
                    visually appealing, responsive, and functional experiences
                    for an outstanding online presence.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>WordPress CMS Development</h4>
                  <p>
                    Our WordPress CMS development delivers dynamic,
                    user-friendly websites. We prioritize building a robust
                    content management system, ensuring effortless content
                    updates, and providing an intuitive admin interface for easy
                    website management.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Enterprise WordPress Development</h4>
                  <p>
                    Providing scalable solutions for enterprise WordPress
                    development, we craft powerful, customized, and
                    smooth-functioning websites. Aligned with enterprise-level
                    requirements, our focus ensures security, flexibility, and
                    integration with existing systems for optimal functionality
                    and business success.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>WordPress E-commerce Development</h4>
                  <p>
                    As one of the leading WordPress development companies, we
                    specialize in building dynamic online stores with
                    user-friendly interfaces using tools like WooCommerce. Our
                    focus is on delivering secure, scalable, and visually
                    appealing e-commerce solutions, ensuring a smooth shopping
                    experience for enhanced business growth.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>WordPress Plugin Development</h4>
                  <p>
                    Our WordPress plugin development focuses on enhancing your
                    website’s functionality, aiming to build solutions that
                    integrate smoothly with your WordPress site. This ensures
                    optimal performance which addresses specific needs for an
                    improved user experience.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>API Integration and Customization</h4>
                  <p>
                    Integrating third-party APIs into your systems enhances
                    functionality. As a premium WordPress website design company
                    in the US, we customize APIs to meet your specific needs,
                    ensuring smooth operation and optimal performance for your
                    business processes.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>WordPress Migration</h4>
                  <p>
                    We can smoothly transfer your website to a new hosting
                    environment in our WordPress migration services. Our focus
                    is on preserving data integrity, ensuring a smooth
                    transition, and optimizing performance, resulting in a
                    hassle-free migration experience for improved website
                    functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
