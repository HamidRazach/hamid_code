"use client";
import React, { useState } from "react";
import styles from "./redefinepatient_services.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Redefinepatient_services() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "01. Boost Customer Engagement",
      desc: "A game app is a fun and interactive way to keep your audience engaged with your brand.",
      img: "/images/game-developement/key-feature-img-1.webp",
      alt: "3D game development",
      width: 802,
      height: 953,
    },
    {
      title: "02. Increase Brand Loyalty",
      desc: "When customers enjoy playing your game, they feel a connection to your brand which forces them to come back for more.",
      img: "/images/game-developement/key-feature-img-2.webp",
      alt: "3D game developers",
      width: 558,
      height: 1000,
    },
    {
      title: "03. Interactive Marketing",
      desc: "A game app is a new way of interacting with customers by letting them experience it firsthand through the game.",
      img: "/images/game-developement/key-feature-img-3.webp",
      alt: "3d mobile game development",
      width: 664,
      height: 944,
    },
    {
      title: "04. Make Learning Fun",
      desc: "Teaching through playful content engages audiences, making learning feel like fun rather than a tedious task to complete.",
      img: "/images/game-developement/key-feature-img-4.webp",
      alt: "3d game designers",
      width: 720,
      height: 988,
    },
    {
      title: "05. Boost Sales and Revenue",
      desc: "Game apps elevate sales with in-app purchases, ads, and premium features, paving the way for diversified revenue streams.",
      img: "/images/game-developement/key-feature-img-5.webp",
      alt: "3d game development",
      width: 682,
      height: 1003,
    },
    {
      title: "06. Improved User Experience",
      desc: "With an app, you can offer a smoother and more user-friendly interaction, which can enhance the reputation of your brand.",
      img: "/images/game-developement/key-feature-img-6.webp",
      alt: "3d game development company",
      width: 846,
      height: 969,
    },
  ];

  return (
    <section className={styles.redefinepatient_services}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerRow}>
          <div className={styles.btn_section}>
            <h2>
              Why Get a <span>Game App</span> For Your Business?
            </h2>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Get Started">
                Get Started
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div>
            <p>
              The mobile game market is expected to exhibit a compound annual
              growth rate (CAGR 2023-2027) of 7.43%, resulting in a projected
              market volume of US$118.90bn by 2027.
            </p>
            <p>
              This makes it the best time for you to enter into this business.
              Now, whether you're trying to introduce a new game or trying to
              gamify your already existing business, here's how a game app can
              redefine your business strategy:
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {/* Left Tabs List */}
          <div className={styles.redefine_tabs}>
            <ul className={styles.nav}>
              {tabs.map((tab, idx) => (
                <li className={styles.nav_item} key={idx}>
                  <button
                    className={`${styles.nav_link} ${
                      activeTab === idx ? styles.activeTab : ""
                    }`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {tab.title}
                    <p>{tab.desc}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Content */}
          <div className={styles.tab_content}>
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                className={`${styles.tabPane} ${
                  activeTab === idx ? styles.show : ""
                }`}
              >
                <Image
                  src={tab.img}
                  alt={tab.alt}
                  width={tab.width}
                  height={tab.height}
                  className={styles.responsiveImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
