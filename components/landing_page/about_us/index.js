"use client";
import Image from "next/image";
import styles from "./about.module.scss";
import { Link } from "react-scroll"; // ✅ react-scroll import

export default function About_us() {
  return (
    <section className={styles.about_section}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-12 col-12 mb-4 mb-md-0">
            <div className={styles.about_img}>
              <Image
                src="/images/landing_page/people-working-as-team-company.webp" // apni image ka path lagao
                alt="About Us"
                width={600}
                height={400}
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className={styles.about_content}>
              <h2>About Us</h2>
              <p>
                We are a passionate software development company specializing in
                building modern, scalable, and user-friendly digital solutions.
                Our mission is to help businesses grow by delivering
                high-quality web, mobile, and custom software products.
              </p>
              <ul>
                <li>✅ 3+ Years of Experience</li>
                <li>✅ Expert Team of Developers & Designers</li>
                <li>✅ 100% Client Satisfaction</li>
                <li>✅ Scalable & Secure Solutions</li>
              </ul>
              <Link className={styles.btn} to="contact">
                <span className={styles.btn_label} data-text="Get Free Consultation">
                  Get Free Consultation
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
