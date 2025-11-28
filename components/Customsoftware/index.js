import Link from "next/link";
import React from "react";
import styles from './Customcrafting.module.scss';

export default function Customcrafting() {
  return (
    <section className={styles.crafting_cta}>
      <div className="container">
        <div
          className={styles.crafting_custom_cta}
          style={{
            backgroundImage: 'url("images/backgrounds/cta-crafting.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-9 col-md-12 col-12">
              <h2>
                Let’s Build the <span>Custom Software</span> Your Business
                Deserves
              </h2>
              <p>
                Give your business an edge with tailored software solutions that
                solve unique problems and boost success.
              </p>
              <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Schedule Consultation">
                  Schedule Consultation
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
