"use client";
import Image from "next/image";
import styles from "./about.module.scss";
import { Link } from "react-scroll"; // ✅ react-scroll import
import { Fade } from "react-awesome-reveal";

export default function About_us() {
  return (
    <section className={styles.about_section}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-12 col-12 mb-4 mb-md-0">
            <Fade direction="up" triggerOnce={true}>
            <div className={styles.about_img}>
              <Image
                src="/images/landing_page/people-working-as-team-company.webp" // apni image ka path lagao
                alt="About Us"
                width={600}
                height={400}
                className="img-fluid rounded"
              />
            </div>
            </Fade>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className={styles.about_content}>
              <Fade direction="up" triggerOnce={true}>
                 <h2>About Us</h2>
              </Fade>
              <Fade direction="up" delay={100} triggerOnce={true}>
              <p>
                We are a passionate software development company specializing in
                building modern, scalable, and user-friendly digital solutions.
                Our mission is to help businesses grow by delivering
                high-quality web, mobile, and custom software products.
              </p>
              </Fade>
              <ul>
                <Fade direction="up" delay={150} triggerOnce={true}>
                <li>✅ 3+ Years of Experience</li>
                </Fade>
                <Fade direction="up" delay={200} triggerOnce={true}>
                <li>✅ Expert Team of Developers & Designers</li>
                </Fade>
                 <Fade direction="up" delay={250} triggerOnce={true}>
                <li>✅ 100% Client Satisfaction</li>
                </Fade>
                  <Fade direction="up" delay={300} triggerOnce={true}>
                <li>✅ Scalable & Secure Solutions</li>
                </Fade>
              </ul>
              <Fade direction="up" delay={350} triggerOnce={true}>
              <Link className={styles.btn} to="contact">
                <span className={styles.btn_label} data-text="Get Free Consultation">
                  Get Free Consultation
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
