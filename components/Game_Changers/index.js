"use client";
import React from "react";
import styles from "./Techtrend.module.scss";

export default function Techtrend() {
  return (
    <section
      className={styles.game_changers_software}
      style={{
        backgroundImage: 'url("images/backgrounds/game-changers.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-9 col-xl-9 col-lg-10 col-md-12 col-12">
            <h2>
              Game Changers <span>Tech Trends</span> For Your Business
            </h2>
            <p>
              We have a dedicated and highly professional team of consultants
              who will use the best available technologies to help your business
              adapt to a rapidly changing market.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          {[
            {
              title: "Artificial Intelligence",
              desc: "We empower your business with AI and ML technologies that simulate human intelligence, enabling smarter decision-making, better planning, and more accurate forecasting.",
            },
            {
              title: "Blockchain",
              desc: "We provide blockchain services that enable clients to increase visibility, increase security, and increase speed in transaction handling for efficiency.",
            },
            {
              title: "Big Data",
              desc: "We help you manage big data efficiently, offering solutions that enhance data collection, processing, storage, and comprehensive analysis.",
            },
            {
              title: "Computer Vision",
              desc: "We assist you extract meaningful insights from images and videos using advanced computer vision, improving processes and decision-making.",
            },
            {
              title: "Mixed Reality",
              desc: "We employ advanced mixed reality techniques to connect digital and physical interactions, streamlining daily tasks and boosting both safety and enjoyment.",
            },
            {
              title: "Internet of Things",
              desc: "We utilize IoT technology to collect, store, and visualize data collected from sensors, thus turning your processes into smart managed environments.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`mb-4 mb-4 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12`}
            >
              <div className={styles.game_changers_box}>
                <div className={styles.icon}>
                <i class="fa-solid fa-circle-check"></i>
                </div>
                <div className={styles.content}>
                  <h5 className={styles.h5}>{item.title}</h5>
                  <p className={styles.p}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
