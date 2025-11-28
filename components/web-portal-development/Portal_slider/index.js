"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "./Portal_slider.module.scss";
import Link from "next/link";
import Image from "next/image";

const Portal_slider = () => {
  const slides = [
    {
      id: 1,
      title: "Web Portal Efficiency Success by Digitalmindson",
      logo: "/images/web-portal-development/nde-offshore-logo.webp",
      heading: "NDE Offshore",
      description:
        "NDE Offshore required a robust upgrade to their web portals to support inspection, maintenance, and construction services across multiple regions. Digitalmindson enhanced their portals with improved backend stability and flexibility, enabling smoother operations and better service delivery.",
      results: [
        "Improved portal uptime by 40%",
        "Streamlined maintenance scheduling by 30%",
        "Enhanced user access speed by 25%",
      ],
      image: "/images/web-portal-development/nde-offshore.webp",
      link: "/contact",
    },
    {
      id: 2,
      title: "Inventory Portal Success by Digitalmindson",
      logo: "/images/web-portal-development/stock-ship-logo.webp",
      heading: "Stock n Ship",
      description:
        "Stock n Ship needed an all-in-one platform to unify inventory, order management, and product logistics for stores and suppliers. Digitalmindson developed a comprehensive web portal that delivers real-time insights into supply chain processes, improving transparency and operational efficiency.",
      results: [
        "Increased inventory accuracy by 35%",
        "Reduced order processing time by 20%",
        "Improved supplier coordination by 30%",
      ],
      image: "/images/web-portal-development/stock-ship.webp",
      link: "/contact",
    },
  ];

  return (
    <section className={styles.portal_slider}>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.slideBox}>
                <h2 className="text-center mb-5">{slide.title}</h2>
                <div className="row">
                  {/* Left Content */}
                  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                    <div className={styles.icon}>
                      <Image src={slide.logo} alt={slide.heading} width={175} height={50}/>
                    </div>
                    <div className={styles.content}>
                      <h3>{slide.heading}</h3>
                      <p>{slide.description}</p>
                      <h5>The result</h5>
                      <ul>
                        {slide.results.map((item, index) => (
                          <li key={index}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill="#F47A1F"
                                d="M9.86 19.874A9.85 9.85 0 0 1 0 10.014 9.85 9.85 0 0 1 9.86.154a9.85 9.85 0 0 1 9.86 9.86 9.85 9.85 0 0 1-9.86 9.86m0-18.56a8.69 8.69 0 0 0-8.7 8.7c0 4.814 3.886 8.7 8.7 8.7s8.7-3.886 8.7-8.7-3.886-8.7-8.7-8.7"
                              />
                              <path
                                fill="#F47A1F"
                                d="M8.7 14.309 3.654 9.263l.812-.812L8.7 12.685l6.554-6.554.812.812z"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link className={styles.btn} href={slide.link}>
                        <span className={styles.btn_label} data-text="View Case Study">
                            View Case Study
                          </span>
                          <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right" />
                          </span>
                        </Link>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="col-lg-6 col-md-12 text-center my-auto">
                    <Image
                      src={slide.image}
                      alt={slide.heading}
                      className={styles.slideImage}
                      width={482}
                      height={414}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portal_slider;
