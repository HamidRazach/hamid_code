"use client";
import Link from 'next/link';
import React from 'react'
import styles from "./boarden_buiness.module.scss";

export default function Business() {
  return (
  <div className={styles.technoloy_sec}>
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-10 col-lg-10 col-xl-9 col-xxl-9 m-auto text-center">
        <h2>
          Custom Web Development Services to Broaden{" "}
          <span>Business Prospects</span>
        </h2>
        <p>
          Experience web development prowess with a team specialized in agile
          project management and delivery. Here are the top web development
          solutions, businesses trust Digitalmindson for.
        </p>
      </div>
      <div className="col-xs-12 col-md-12 col-lg-12 col-xl-11 col-xxl-11 m-auto">
        <div className={styles.technology_main}>
          <div className={styles.technology_item}>
            <div className={styles.svg_icon}>
             <i class="fa-regular fa-globe"></i>
            </div>
            <h6>Websites</h6>
            <p>
              Create dynamic websites with responsive design and scalable
              architectures. Offer easy navigation with zero latency and
              generate leads.
            </p>
          </div>
          <div className={styles.technology_item}>
            <div className={styles.svg_icon}>
            <i class="fa-regular fa-bag-shopping"></i>
            </div>
            <h6>E-Commerce</h6>
            <p>
              Build mobile-first, secure e-commerce platforms with user-focused
              features. Optimize for SERPs, reach customers easily, and scale.
            </p>
          </div>
          <div className={styles.technology_item}>
            <div className={styles.svg_icon}>
            <i class="fa-regular fa-layer-group"></i>
            </div>
            <h6>Web Applications</h6>
            <p>
              Progressive web apps for mobile-like experiences. Compatible,
              interactive products that keep dwell metrics above par across
              devices.
            </p>
          </div>
          <div className={styles.technology_item}>
            <div className={styles.svg_icon}>
           <i class="fa-regular fa-file-pen"></i>
            </div>
            <h6>Content Management System</h6>
            <p>
              Custom, headless CMS for automated content staging and accelerated
              time-to-market using intuitive workflows and personalized
              templates.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-auto text-center mt-4">
         <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Discuss Project Scope">
                Discuss Project Scope
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
          </Link>
      </div>
    </div>
  </div>
</div>

  )
}
