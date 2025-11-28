import React from "react";
import styles from "./seo_partner.module.scss";
import Link from "next/link";

export default function Seo_partner() {
  return (
    <section
      className={styles.streamline_cloud}
      style={{
        backgroundImage: 'url("/images/backgrounds/seo-partner.webp")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-9 col-12">
            <h2>
              You’ve Discovered the <span>SEO Partner</span> You’ve Been Looking
              For
            </h2>
            <p>
              Digitalmindson offers the SEO strategies you need to outshine your
              competitors. Don’t wait any longer—let's elevate your online
              presence and get your business noticed!
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Boost My Leads Now">
                Boost My Leads Now
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
