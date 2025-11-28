import React from "react";
import styles from "./feel_easy.module.scss";
import Link from "next/link";

export default function Feel_easy() {
  return (
    <section className={styles.call_to_action}>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <h2>
            Want Your Website to Look Good and Feel Easy to Use? <span>Our UI Design
            Services are Made to do Just That!</span>
          </h2>
          <div className={styles.btn_call}>
          <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Contact Us Today!">
                Contact Us Today!
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
