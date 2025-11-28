import React from "react";
import styles from "./Back-end-development-company.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function BackendRewrite() {
  return (
    <section className={styles.rewrite_sec}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h2 className={styles.h2_head}>
              Why Choose Digitalmindson As Your{" "}
              <span>Back-End Development Company?</span>
            </h2>
          </div>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_text}>
              <div className={styles.rewrite_div}>
                <h5>We Are Adaptive</h5>
                <p>
                  We build backend systems tailored to your evolving needs. Whether you’re scaling
                  with microservices or using a monolithic architecture, our team designs
                  infrastructures that are flexible, secure, and optimized for performance across
                  any environment—cloud or on-premise.
                </p>
              </div>

              <div className={styles.rewrite_div}>
                <h5>We Are Innovative</h5>
                <p>
                  Innovation drives our backend development. By leveraging cutting-edge technologies,
                  we create efficient, secure, and scalable systems that integrate seamlessly with
                  your existing tech stack. Our cloud-based and API-driven solutions allow for
                  high-speed data processing and flexible service management.
                </p>
              </div>

              <div className={styles.rewrite_div}>
                <h5>We Are Impactful</h5>
                <p>
                  Our backend solutions are built for reliability, with a focus on optimizing data
                  flow, speed, and fault tolerance. We develop systems that handle high loads and
                  complex processes without sacrificing performance. From architecture to deployment,
                  our backend designs deliver efficiency and long-term stability for your digital
                  products.
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
                src="/images/back-end-development-services/backend-3.png"
                alt="back-end development services"
                width={1024}
                height={819}
                className={styles.img_fluid}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
