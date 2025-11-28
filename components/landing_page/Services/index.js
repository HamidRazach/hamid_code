"use client";

import Image from "next/image";
import styles from "./Services.module.scss";
import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const servicesData = [
  { id: 1, icon: "/images/landing_page/web.webp", title: "Web Development", desc: "Digital Minds On leads in web development, creating responsive, and user-friendly websites using advanced technologies to deliver exceptional digital experiences for businesses worldwide." },
  { id: 2, icon: "/images/landing_page/Mobile_service.png", title: "Mobile Development", desc: "Digital Minds On excels in mobile app development services, delivering innovative, user-friendly, and high-performance applications tailored to meet business needs across various industries." },
  { id: 3, icon: "/images/landing_page/wordspp.webp", title: "WordPress Development", desc: "Digital Minds On specializes in WordPress development, offering custom themes, plugins, and seamless integrations to create dynamic, user-friendly websites that drive engagement and growth." },
  { id: 4, icon: "/images/landing_page/digitalmarketing.png", title: "Digital Marketing", desc: "Grow your brand with SEO, PPC, and social media marketing strategies." },
  { id: 5, icon: "/images/landing_page/uiux.webp", title: "UI/UX Design", desc: "Digital Minds On offers expert UI/UX design services, creating intuitive, visually appealing interfaces that enhance user experience and drive engagement across digital platforms and applications." },
  { id: 6, icon: "/images/landing_page/web.webp", title: "Website Design & Development", desc: "Digital Minds On leads in web development, creating responsive, and user-friendly websites using advanced technologies to deliver exceptional digital experiences for businesses worldwide." },
  { id: 7, icon: "/images/landing_page/soft.webp", title: "Software Development", desc: "Digital Minds On specializes in software development, crafting innovative solutions with cutting-edge technologies to deliver exceptional, and user-centric digital experiences for businesses." },
  { id: 8, icon: "/images/landing_page/game.webp", title: "Mobile Game Development", desc: "Digital Minds On excels in game development, creating immersive, engaging, and innovative gaming experiences using advanced technologies to captivate players across platforms worldwide." },
  { id: 9, icon: "/images/landing_page/seo.png", title: "SEO", desc: "Digital Minds On provides expert SEO services, delivering optimized strategies that enhance visibility, engagement, and ranking across major search engines." }
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
        },
      });
    };

    loadGsap();
  }, []);

  return (
    <section className={styles.services_section}>
      <div className="container">

        <Fade triggerOnce direction="up">
          <h2 className={styles.section_title}>Our Services</h2>
        </Fade>

        <div className="row">
          {servicesData.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.service_card}>
                <Fade triggerOnce direction="up">
                  <div className={styles.icon_box}>
                    <Image src={service.icon} alt={service.title} width={170} height={170} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </Fade>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
