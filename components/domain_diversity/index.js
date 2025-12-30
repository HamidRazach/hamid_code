"use client";
import React from "react";
import styles from "./domain_content.module.scss";
import Link from "next/link";

export default function DomainContent() {
  return (
    <section className={styles.domain_diversity}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <h2>
              Our Domain <span>Diversity</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.domain_main}>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                <i class="far fa-cart-shopping"></i>
                  <h6>eCommerce</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                 <i class="far fa-credit-card"></i>
                  <h6>Fintech</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                <i class="fas fa-heartbeat"></i>
                  <Link
                    href="#"
                    target="_blank"
                  >
                    <h6>Healthcare</h6>
                  </Link>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                 <i class="fas fa-graduation-cap"></i>
                  <h6>Education</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                <i class="fas fa-users"></i>
                  <h6>Social Networking</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
              <i class="fas fa-hotel"></i>
                  <h6>Hospitality</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                <i class="fas fa-music"></i>
                  <h6>Entertainment</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                  <i class="fas fa-building"></i>
                  <h6>Government</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                  <i class="fas fa-house"></i>
                  <h6>Real Estate</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                  <i class="fas fa-handshake"></i>
                  <h6>Business</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                <i class="fas fa-truck-fast"></i>
                  <h6>Logistics</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                 <i class="fas fa-microchip"></i>
                  <h6>Tech &amp; IT</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                 <i class="fas fa-hand-holding-heart"></i>
                  <h6>Non-Profit</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                 <i class="fas fa-truck"></i>
                  <h6>Automotive</h6>
                </div>
              </div>
              <div className={styles.domain_item}>
                <div className={styles.domain_content}>
                 <i class="fas fa-globe"></i>
                  <h6>Travel &amp; Tourism</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
