"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./associatesslider.module.scss";

const reviews = [
  {
    name: "Brian Ferguson",
    title: "Executive Director, Project Impact Mississippi",
    quote: "It’s been an awesome experience. It feels like we’re a family.",
    score: 5.0,
    quality: 5.0,
    schedule: 5.0,
    cost: 5.0,
    refer: 5.0,
    link: "https://clutch.co/",
  },
  {
    name: "Cameron Maxey",
    title: "Co-Founder, Younit",
    quote: "Their communication has been great.",
    score: 5.0,
    quality: 5.0,
    schedule: 5.0,
    cost: 5.0,
    refer: 5.0,
    link: "https://clutch.co/",
  },
  {
    name: "Stephanie Berman",
    title: "CEO & Founder, Engagement Through Education",
    quote: "Everything has been flowing pretty smoothly.",
    score: 5.0,
    quality: 5.0,
    schedule: 4.0,
    cost: 5.0,
    refer: 5.0,
    link: "https://clutch.co/",
  },
  {
    name: "Brian Ferguson",
    title: "Executive Director, Project Impact Mississippi",
    quote: "It’s been an awesome experience. It feels like we’re a family.",
    score: 5.0,
    quality: 5.0,
    schedule: 5.0,
    cost: 5.0,
    refer: 5.0,
    link: "https://clutch.co/",
  },
  {
    name: "Cameron Maxey",
    title: "Co-Founder, Younit",
    quote: "Their communication has been great.",
    score: 5.0,
    quality: 5.0,
    schedule: 5.0,
    cost: 5.0,
    refer: 5.0,
    link: "https://clutch.co/",
  },
  {
    name: "Stephanie Berman",
    title: "CEO & Founder, Engagement Through Education",
    quote: "Everything has been flowing pretty smoothly.",
    score: 5.0,
    quality: 5.0,
    schedule: 4.0,
    cost: 5.0,
    refer: 5.0,
    link: "https://clutch.co/",
  },
];

export default function AssociatesSlider() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000, // smooth and steady transition
    autoplaySpeed: 0, // continuous flow
    cssEase: "linear", // no acceleration/deceleration
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.associates_slider}>
      <div className="container">
        <div className="row">
          <div className="text-center m-auto col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-12">
            <h2>
              Our Business <span>Associates on Working</span> with Digitalmindson
            </h2>
          </div>
        </div>

        <Slider {...settings}>
          {reviews.map((item, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.card}>
                {/* Left side */}
                <div className={styles.left}>
                  <h3 className={styles.name}>{item.name}</h3>
                  <span className={styles.title}>{item.title}</span>
                  <p className={styles.quote}>{item.quote}</p>
                  <Link className={styles.btn} href={item.link}>
                    <span className={styles.btn_label} data-text="Check Review">
                      Check Review
                    </span>
                    <span className={styles.btn_icon}>
                      <i className="fa-solid fa-arrow-up-right" />
                    </span>
                  </Link>
                </div>

                {/* Right side */}
                <div className={styles.right}>
                  <div className={styles.score}>{item.score.toFixed(1)}</div>
                  <ul>
                    <li>
                      Quality <span>{item.quality.toFixed(1)}</span>
                    </li>
                    <li>
                      Schedule <span>{item.schedule.toFixed(1)}</span>
                    </li>
                    <li>
                      Cost <span>{item.cost.toFixed(1)}</span>
                    </li>
                    <li>
                      Willing to Refer <span>{item.refer.toFixed(1)}</span>
                    </li>
                  </ul>
                  <div className={styles.powered}>
                    Powered by{" "}
                    <Image
                      src="/images/icons/clutch.webp"
                      alt="Clutch"
                      width={60}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
