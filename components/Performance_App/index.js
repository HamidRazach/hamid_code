import React from "react";
import Link from "next/link";
import styles from './performance_app.module.scss';

export default function Performance_app() {
  return (
    <section className={styles.industry_uk_app}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <h2>High-Value Features for <span>High-Performance Apps</span></h2>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <p>
              Our mobile application development services are designed to
              integrate essential, high-performance features into your mobile
              app. Real-time analytics for immediate insights. Offline
              functionality to ensure continuous operation. AI-driven chatbots
              for intelligent user interaction.
            </p>
          </div>
        </div>
        <div className="mt-3 row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.industy_uk_main}>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
              <i class="fa-regular fa-user-gear"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Personalization</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                <i class="fa-regular fa-chart-line"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Real-time Analytics</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                <i class="fa-regular fa-wifi-slash"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Offline Functionality</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                 <i class="fa-regular fa-message"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Push Notifications</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
               <i class="fas fa-network-wired"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Social Media Integration</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                  <i class="fas fa-credit-card"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Payment Gateway Integration</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                <i class="fas fa-vr-cardboard"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>AR/VR Experiences</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                  <i class="fas fa-robot"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Chatbot Integration</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                <i class="fas fa-microphone-lines"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Voice Recognition</h5>
                </div>
              </div>
              <div className={styles.industy_uk_item}>
                <div className={styles.industry_uk_icon}>
                <i class="fas fa-globe"></i>
                </div>
                <div className={styles.industry_uk_content}>
                  <h5>Multi-language Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 row">
          <div className="m-auto text-center col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Consult Project Scope">
                Consult Project Scope
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
