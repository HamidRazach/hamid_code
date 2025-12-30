import React from "react";
import styles from "./Discover.module.scss";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Discover() {
  return (
    <section className={styles.rev_ai_cta_home}>
      <div className="container">
        <div className="mb-4 row">
           <Fade direction="down" triggerOnce>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
              <h2 style={{ color: "rgb(49, 66, 82)" }}>
                What's New at Digital Minds On
              </h2>
            </div>
          </Fade>
        </div>
        <div
          className={styles.rev_ai_cta_home_box}
          style={{
            backgroundImage:
              'url("images/backgrounds/rev-cta-back-658e5742cfc70c21ef339107d81371be.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="align-items-center row h-100">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-12">
              <Fade direction="up" triggerOnce>
              <h2>
                Discover What <span>Rev AI</span> Can Do For You
              </h2>
              </Fade>
              <Fade direction="up" delay={150} triggerOnce>
              <p>
                A groundbreaking initiative designed to supercharge productivity
                by merging human creativity with AI precision. Whether it's
                automating tasks or making smarter decisions faster, Rev AI is
                built to empower your teams like never before.
              </p>
              </Fade>
               <Fade direction="up" delay={300} triggerOnce>
              <div className={styles.rev_btn}>
                <Link className={styles.btn} href="/contact">
                  <span className={styles.btn_label} data-text="Explore Rev AI">
                    Explore Rev AI
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>
                 <Link className={styles.btn} href="/contact">
                  <span className={styles.btn_label} data-text="Talk to Experts">
                    Talk to Experts
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
