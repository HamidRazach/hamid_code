import React from "react";
import styles from "./Assessment_solutions.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Cyber_developmentRewrite() {
  return (
    <section className={styles.rewrite_sec}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h2 className={styles.h2_head}>
              Comprehensive Security{" "}
              <span>Assessment Solutions</span>
            </h2>
          </div>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_text}>
              <div className={styles.rewrite_div}>
                <h5>ICS Security Assessment</h5>
                <p>
                  Case-specific threat modelling and vulnerability assessment of Industrial Control Systems and their components, providing an insight into your existing attack surface and the corresponding business impact of potential attacks.
                </p>
              </div>

              <div className={styles.rewrite_div}>
                <h5>Transportation Systems Security Assessment</h5>
                <p>
                  Specialized research focused on identifying security problems related to mission-critical components of modern transportation infrastructure, from Automotive to Aerospace.
                </p>
              </div>

              <div className={styles.rewrite_div}>
                <h5>Smart Technologies and IoT Security Assessment</h5>
                <p>
                 Detailed evaluation of highly-interconnected devices and their backend infrastructure, revealing vulnerabilities in firmware, network, and application layers.
                </p>
              </div>

              <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Free Consultation">
                  Free Consultation
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_img}>
              <Image
                src="/images/cyber-security-services/cyber-1.png"
                alt="cyber security services"
                width={1540}
                height={920}
                className={styles.img_fluid}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
