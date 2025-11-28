import React from "react";
import styles from "./featured_wrapper.module.scss";
import Link from "next/link";

export default function Freature_wrapper() {
  return (
    <section className={styles.featured_wrapper} >
      <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 col-lg-9">
              <h2>Our Featured UI &amp; UX Projects </h2>
              <p>
                Explore Our UI &amp; UX Work — where smart design meets real
                results. Every project here reflects our focus on creating
                websites that are not only beautiful but also easy to use. As a
                best UX/UI designing company, we offer UX design services that
                help businesses connect better with their users through clear,
                functional, and engaging design.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-5 text-center justify-content-center">
                <Link className={styles.btn} href="/portfolio">
                  <span className={styles.btn_label} data-text="View Portfolio">
                    View Portfolio
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>
            </div>
          </div>
        </div>
    </section>
  );
}
