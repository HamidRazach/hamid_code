"use client";
import React from "react";
import styles from "./Awards_recognition.module.scss";
import Link from "next/link";
import AwardsSlider from "./Awards_slider";

export default function Awards_recognitions() {
  const awardData = {
    title: "Awards & Recognitions",
    description: `At digitalmindson, we’re proud to be recognized for our hard work and
    success. These awards reflect our growth as a trusted digital
    marketing company and leader in B2B digital marketing. They
    highlight our creativity, commitment, and passion for helping
    businesses reach new heights through reliable, impactful
    solutions.`,
    reviewsText: "Check Reviews",
    reviewsLink: "https://clutch.co/",
    ratingText: "75+ reviews on clutch",
    ratingValue: "4.8",
    stars: 1,
  };

  const renderStars = (count) => {
    return [...Array(count)].map((_, index) => (
      <svg viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 0L30.6129 17.2746H48.7764L34.0818 27.9508L39.6946 45.2254L25 34.5491L10.3054 45.2254L15.9182 27.9508L1.22359 17.2746H19.3871L25 0Z" fill="#FFB800"></path>
                            <path d="M75 0L80.6129 17.2746H98.7764L84.0818 27.9508L89.6946 45.2254L75 34.5491L60.3054 45.2254L65.9182 27.9508L51.2236 17.2746H69.3871L75 0Z" fill="#FFB800"></path>
                            <path d="M125 0L130.613 17.2746H148.776L134.082 27.9508L139.695 45.2254L125 34.5491L110.305 45.2254L115.918 27.9508L101.224 17.2746H119.387L125 0Z" fill="#FFB800"></path>
                            <path d="M175 0L180.613 17.2746H198.776L184.082 27.9508L189.695 45.2254L175 34.5491L160.305 45.2254L165.918 27.9508L151.224 17.2746H169.387L175 0Z" fill="#FFB800"></path>
                            <path d="M225 0L230.613 17.2746H248.776L234.082 27.9508L239.695 45.2254L225 34.5491L210.305 45.2254L215.918 27.9508L201.224 17.2746H219.387L225 0Z" fill="#FFB800"></path>
                        </svg>
    ));
  };

  return (
    <div className={styles.digitalmindson_awards}>
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className={`col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mt-auto mb-auto ${styles.tekrevol_awards_title}`}>
            <div className={styles.example} data-text="Winning Awards">
              <h3 className={styles.h3_head}>{awardData.title}</h3>
            </div>
            <p>{awardData.description}</p>
            <Link className={styles.btn} href={awardData.reviewsLink}>
                <span className={styles.btn_label} data-text={awardData.reviewsText}>
                  {awardData.reviewsText}
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
          </div>

          {/* Right Content */}
          <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 text-end mt-auto">
            <div className={styles.digitalmindson_rating}>
              <span className={styles.ratingText}>{awardData.ratingText}</span>
              <div className={styles.digitalmindson_rating_numbers}>{awardData.ratingValue}</div>
              <div className={styles.digtalmindson_star}>{renderStars(awardData.stars)}</div>
            </div>
          </div>
        </div>
        <div className={styles.awards_slider}>
          <AwardsSlider />
        </div>
      </div>
    </div>
  );
}
