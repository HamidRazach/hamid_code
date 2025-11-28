'use client';
import React from "react";
import styles from "./vision_values.module.css";
import Image from "next/image";

export default function Vision_mission() {
  return (
    <section className={styles.vision_mission}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <ul className={styles.custom_tab}>
            <li className={`${styles.tabs} ${styles.active}`}>
                <div className={styles.example} data-text="Mission">
                  <h2>Mission</h2>
                </div>
              </li>
              <li className={styles.tabs}>
                <div className={styles.example} data-text="Vision">
                  <h2>Vision</h2>
                </div>
              </li>
              <li className={styles.tabs}>
                <div className={styles.example} data-text="Values">
                  <h2>Values</h2>
                </div>
              </li>
            </ul>
            <div className="d-flex h-100 row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <div className={styles.content_about}>
                  <h2>
                    To be forever curious and impactful in revolutionizing <span> technology for our partner</span>
                  </h2>
                  <p>
                    We aspire to create and deliver the best digital solutions
                    for businesses wanting to acquire a competitive edge in the
                    industry and serve their customers through robust digital
                    channels.
                  </p>
                  <p>
                    Digital Minds On aims to help startups and organizations recognize
                    their potential and leverage optimum, highly customized
                    solutions for business growth and ROI.
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <span
                  className=" lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <Image
                    src="/images/about/about.png"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </span>
              </div>
            </div>
            <div className="d-none h-100 row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <div>
                  <h4>
                    Transforming the world through technologies that disrupt
                  </h4>
                  <p>
                    We aim to extend the scope of current technologies into
                    societal issues and deliver back to the community for the
                    greater good.
                  </p>
                  <p>
                    Our vision is to help 20 million lives with better education
                    and employment opportunities, acquire ten active ventures,
                    scale five businesses to exit, get listed to Nasdaq, become
                    the most preferred workplace in Pakistan, and enter the
                    Fortune 500 club in the next five years.
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <span
                  className=" lazy-load-image-background blur"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <span
                    className="img-fluid"
                    style={{ display: "inline-block" }}
                  />
                </span>
              </div>
            </div>
            <div className="d-none h-100 row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <div>
                  <h4>Curiosity</h4>
                  <p>
                    We encourage our team members to question the norm and
                    explore innovative solutions to problems.
                  </p>
                  <h4>Honesty</h4>
                  <p>
                    We value integrity and ethical behavior in all our
                    interactions, both internally and externally.
                  </p>
                  <h4>Positivity</h4>
                  <p>
                    We value the power of positivity and believe that it leads
                    to higher productivity, creativity, and job satisfaction.
                  </p>
                  <h4>Impact</h4>
                  <p>
                    We strive to make a meaningful impact in everything we do at
                    TekRevol.{" "}
                  </p>
                  <h4>Disruption</h4>
                  <p>
                    We believe that disruptive innovation is the key to solving
                    complex problems and creating new opportunities.
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <span
                  className=" lazy-load-image-background blur"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <span
                    className="img-fluid"
                    style={{ display: "inline-block" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
