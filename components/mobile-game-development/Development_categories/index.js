"use client";
import React from "react";
import styles from "./Development_categories.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function Development_categories() {
  const categoryData = [
    { img: "/images/game-developement/role-playing-games.webp", alt: "role-playing-games" },
    { img: "/images/game-developement/first-person-games.webp", alt: "first-person-shooter" },
    { img: "/images/game-developement/adventure-games.webp", alt: "adventure-games" },
    { img: "/images/game-developement/puzzle-games.webp", alt: "puzzle-games" },
    { img: "/images/game-developement/action-games.webp", alt: "action-games" },
    { img: "/images/game-developement/casual-games.webp", alt: "casual-games" },
  ];

  // Split into two columns
  const leftCol = categoryData.slice(0, Math.ceil(categoryData.length / 2));
  const rightCol = categoryData.slice(Math.ceil(categoryData.length / 2));

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          vertical: true,
          slidesToShow: 2,
        },
      },
    ],
  };

  // Reverse settings for the right column (scrolls upward naturally)
  const reverseSliderSettings = {
    ...sliderSettings,
    rtl: true, // makes it scroll in the opposite direction
  };

  return (
    <section
      className={styles.gamecategory}
      style={{
        backgroundImage: 'url("/images/game-developement/game_category.webp")',
      }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          {/* Left Text */}
          <div className="col-xxl-5 col-xl-5 col-md-12 col-lg-6">
            <div className={styles.arrayGameMain}>
              <h2>
                Game App <span>Development Categories</span>
              </h2>
              <p>
                Our expertise spans across a spectrum of genres, ensuring that
                every game we craft is a unique masterpiece tailored to
                captivate and engage distinct audiences.
              </p>
              <p>
                Here are the game development categories that we have expertise
                in:
              </p>
              <Link className={styles.btn} href="contact">
                <span className={styles.btn_label} data-text="Build Game App">
                  Build Game App
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            </div>
          </div>

          {/* Two Column Slider */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 offset-xl-1">
            <div className={styles.sliderWrapper}>
              {/* Left Column */}
              <div className={styles.sliderColumn}>
                <Slider {...sliderSettings}>
                  {leftCol.map((item, idx) => (
                    <div key={idx} className={styles.item_cat}>
                      <Image src={item.img} alt={item.alt} width={236} height={236} />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Right Column - Reverse direction */}
              <div className={styles.sliderColumn}>
                <Slider {...reverseSliderSettings}>
                  {rightCol.map((item, idx) => (
                    <div key={idx} className={styles.item_cat}>
                      <Image src={item.img} alt={item.alt} width={220} height={220} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
