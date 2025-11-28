"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./brand.module.scss";

const brandLogos = [
  { src: "/images/trusted-logo/truth_gpt.webp", alt: "TruthGPT" },
  { src: "/images/trusted-logo/mocuts.webp", alt: "MoCuts" },
  { src: "/images/trusted-logo/onsite.webp", alt: "OnSite" },
  { src: "/images/trusted-logo/milocare.webp", alt: "MiloCare+" },
  { src: "/images/trusted-logo/soundly.webp", alt: "Soundly" },
  { src: "/images/trusted-logo/teemates.webp", alt: "TeeMates" },
  { src: "/images/trusted-logo/oz_leasing.webp", alt: "OZ" },
  { src: "/images/trusted-logo/pure_plank.webp", alt: "Pure Plank" },
];

export default function Trustedlogo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className={styles.trustedtop_brands}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className={styles.head_h5}>Trusted by the <span>Top Brands</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="top_brands_slider swiper-container overflow-x-hidden">
              <Slider {...settings}>
                {brandLogos.concat(brandLogos).map((logo, index) => (
                  <div
                    key={index}
                    className={styles.swiper_slide}
                    style={{ width: "205.2px", marginRight: "10px" }}
                  >
                    <div className={styles.top_brands_item_img}>
                      <Image src={logo.src} alt={logo.alt} loading="lazy" width={200} height={200}/>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
