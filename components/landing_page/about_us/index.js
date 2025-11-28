"use client";
import Image from "next/image";
import styles from "./about.module.scss";
import { Link } from "react-scroll";

// ⭐ NEW IMPORT
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function About_us() {
  return (
    <section className={styles.about_section}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* ⭐ Left Side - Image with Slide Animation */}
          <div className="col-lg-6 col-md-12 col-12 mb-4 mb-md-0">
            <Slide direction="left" triggerOnce>
              <div className={styles.about_img}>
                <Image
                  src="/images/landing_page/people-working-as-team-company.webp"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="img-fluid rounded"
                />
              </div>
            </Slide>
          </div>

          {/* ⭐ Right Side - Content */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className={styles.about_content}>

              {/* Heading */}
              <Fade direction="up" triggerOnce>
                <h2>About Us</h2>
              </Fade>

              {/* Paragraph */}
              <Fade direction="up" delay={100} triggerOnce>
                <p>
                  We are a passionate software development company specializing in
                  building modern, scalable, and user-friendly digital solutions.
                  Our mission is to help businesses grow by delivering
                  high-quality web, mobile, and custom software products.
                </p>
              </Fade>

              {/* List (Stagger animation) */}
              <Fade cascade damping={0.2} direction="up" triggerOnce>
                <ul>
                  <li>✅ 3+ Years of Experience</li>
                  <li>✅ Expert Team of Developers & Designers</li>
                  <li>✅ 100% Client Satisfaction</li>
                  <li>✅ Scalable & Secure Solutions</li>
                </ul>
              </Fade>

              {/* Button */}
              <Zoom triggerOnce>
                <Link className={styles.btn} to="contact">
                  <span
                    className={styles.btn_label}
                    data-text="Get Free Consultation"
                  >
                    Get Free Consultation
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>
              </Zoom>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
