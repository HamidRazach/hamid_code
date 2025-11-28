"use client";
import React from "react";
import styles from "./toptier.module.scss";
import Link from "next/link";
export default function TierMobileApp() {
  return (
    <div className={styles.androidbuss} style={{ background: "#001B28" }}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <h2>
              Access <span>Top-Tier Mobile App</span> Development Prowess
            </h2>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Build My Custom App">
                Build My Custom App
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
          <div className="mt-4 mt-md-0 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <p>
              Access full-stack, enterprise-grade mobile app development
              services Digitalmindson. From immersive frontends to high-tech backends,
              we employ top talent and novel technologies to deliver compelling
              results. Every project our app development company deploys is
              responsive, highly fault-tolerant, and cyber-secure – in short, we
              build apps that are performant and loved by users.
            </p>
          </div>
        </div>
        <div className={`row ${styles.buss_padd}`}>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.androidbuss_box}>
              <div className={styles.andoidbuss_content}>
                <h6>Maximized API Integration</h6>
                <p>
                  Connect your app to existing systems with custom APIs,
                  enhancing functionality and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.androidbuss_box}>
              <div className={styles.andoidbuss_content}>
                <h6>Scalable Microservices Architecture</h6>
                <p>
                  Deploy microservices to ensure your app scales smoothly under
                  increasing user loads.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.androidbuss_box}>
              <div className={styles.andoidbuss_content}>
                <h6>Robust Security Compliance</h6>
                <p>
                  Protect user data with encryption and biometric security,
                  meeting industry regulations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.androidbuss_box}>
              <div className={styles.andoidbuss_content}>
                <h6>AI-Driven User Personalization</h6>
                <p>
                  Deliver personalized experiences with AI-driven content
                  recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.androidbuss_box}>
              <div className={styles.andoidbuss_content}>
                <h6>Real-Time Monitoring</h6>
                <p>
                  Monitor app performance in real-time to optimize speed and
                  reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className={styles.androidbuss_box}>
              <div className={styles.andoidbuss_content}>
                <h6>Accelerated DevOps Pipelines</h6>
                <p>
                  Accelerate development with automated CI/CD pipelines for
                  faster releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
