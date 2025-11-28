"use client";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

export default function About_banner() {
  return (
    <section className={styles.about_banner_section}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs_style}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about" aria-current="page">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Content */}
      <div className={styles.services_banner}>
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <div className={styles.banner_content}>
                <div className={styles.example} data-text="Who We Are">
                  <h1>About Digital Minds On</h1>
                </div>
                <div className={styles.banner_content_txt}>
                  <p>
                    Digitalmindson is an enterprise software development company
                    helping startups and organizations build and implement
                    digital transformation solutions tailored to their demand
                    and needs.
                  </p>
                  <ul>
                    <li>Tech Integrated Solutions</li>
                    <li>Client Focused Approach</li>
                    <li>Disruptive Innovation</li>
                    <li>Digital Transformation Partner</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 my-auto ms-auto">
              <Image
                src="/images/about/banner_about.png"
                alt="About"
                className="img-fluid"
                width={759}
                height={490}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
