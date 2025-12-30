"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; // Corrected import path
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowDownRight } from "react-icons/go";
import styles from "./Service_Slider.module.scss";

const servicesData = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications with seamless user experiences, robust security, and scalable architectures, tailored to meet user and business expansion needs.",
    icon: (
    <i class="fa-solid fa-mobile-screen"></i>
    ),
    type: "icon",
    hoverImage: "/images/slider/Mobile_app_developement.webp",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our web development services deliver responsive, high-speed websites with secure, scalable back-end solutions, optimized for both user engagement and operational efficiency.",
    icon: (
      <i class="fa-solid fa-code"></i>
    ),
    type: "icon",
    hoverImage: "/images/slider/webdevelopement.webp",
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "We create custom software solutions that enhance business processes, featuring advanced integrations, strong security measures, and scalable designs to support your growth.",
    icon: (
      <i class="fa-solid fa-laptop-code"></i>
    ),
    type: "icon",
    hoverImage: "/images/slider/software.webp",
  },
   {
    id: 4,
    title: "Seo Service",
    description:
      "Boost your brand’s visibility with our SEO services. We use smart, human-focused strategies to attract real customers and build long-term online growth.",
    icon: (
     <i class="fa-solid fa-magnifying-glass"></i>
    ),
    type: "icon",
    hoverImage: "/images/slider/seo-services.webp",
  },
    {
    id: 5,
    title: "Digital Marketing",
    description:
      "Grow your business with our digital marketing services. We create personalized strategies to increase visibility, attract real customers, and boost your online success.",
    icon: (
      <i class="fa-solid fa-arrow-trend-up"></i>
    ),
    type: "icon",
    hoverImage: "/images/slider/digitalmarketing.webp",
  },
  {
    id: 6,
    title: "Game Development",
    description:
      "Our game development expertise spans from concept to deployment. We excel at developing immersive graphics, fluid gameplay, and optimized performance across platforms.",
    icon: (
     <i class="fa-solid fa-puzzle-piece"></i>
    ),
    type: "icon",
    hoverImage: "/images/slider/game-developement.webp",
  },
  {
    id: 7,
    title: "IT Staff Augmentation",
    description:
      "Our IT staff augmentation services provide skilled professionals to augment your team, ensuring you have the right expertise for every project phase.",
    icon: (
      <i class="fa-solid fa-users-gear"></i>

    ),
    type: "icon",
    hoverImage: "/images/slider/it-staff.webp",
  },
  {
    id: 8,
    title: "Cloud Consulting",
    description:
      "We offer cloud consulting services that optimize your cloud strategy, enhance security, and ensure scalable, cost-effective infrastructure designed to complement organizational growth.",
    icon: (
   <i class="fa-solid fa-cloud-arrow-up"></i>
    ),
    type: "icon",
    hoverImage: "/images/slider/cloud.webp",
  },
];

export default function ServicesSlider() {
  const swiperRef = useRef(null);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderHeader}>
        <h2 className={styles.sliderTitle}></h2>
        <div className={styles.sliderNav}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={styles.navButton}
          >
            &lt;
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={styles.navButton}
          >
            &gt;
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className={styles.mySwiper}
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <div className={styles.card}>
              <div
                className={styles.cardBackground}
                style={{ backgroundImage: `url(${service.hoverImage})` }}
              ></div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <div className={styles.cardArrow}><GoArrowDownRight /></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
