"use client";
import Image from "next/image";
import styles from "./WhyChooseUs.module.scss";
import { Link } from "react-scroll"; // ✅ react-scroll import
import { Fade } from "react-awesome-reveal";


const features = [
  {
    id: 1,
    icon: "/images/landing_page/1.png",
    title: "3+ Years of Experience",
    desc: "We have been delivering professional and modern software solutions for businesses worldwide.",
  },
  {
    id: 2,
    icon: "/images/landing_page/2.png",
    title: "Secure & Scalable",
    desc: "Our solutions are built with security and scalability in mind to grow with your business.",
  },
  {
    id: 3,
    icon: "/images/landing_page/3.png",
    title: "Expert Team",
    desc: "A dedicated team of designers and developers focused on creating high-quality solutions.",
  },
  {
    id: 4,
    icon: "/images/landing_page/4.png",
    title: "24/7 Support",
    desc: "We provide continuous support and maintenance to ensure your product runs smoothly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.why_section}>
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
             <Fade direction="up" triggerOnce>
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
          <div className="col-lg-6 col-md-6 col-12">
             <Fade direction="up" delay={120} triggerOnce>
            <div className={styles.about_content}>
              <h2>Why Choose Digital Minds On?</h2>
              <p>
                At Digital Minds On, we deliver innovative and reliable software
                solutions tailored to your business needs. With a team of
                experienced developers and the latest technologies, we focus on
                creating custom applications that drive growth, efficiency, and
                success. Our client-first approach ensures transparency,
                collaboration, and proven results, making us the trusted choice
                for businesses seeking top-quality software development.
              </p>
              <Link className={styles.btn} to="contact">
                <span className={styles.btn_label} data-text="Get Free Consultation">
                  Get Free Consultation
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            </div>
            </Fade>
          </div>
        </div>
        <div className="row align-items-center">
          {features.map((feature, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
              key={feature.id}
            >
              <Fade
                direction="up"
                delay={index * 80}
                triggerOnce
              >
              <div className={styles.feature_card}>
                <div className={styles.icon_box}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={170}
                    height={170}
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
