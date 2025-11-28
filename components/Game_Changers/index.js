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
                  <svg width={41} height={41} viewBox="0 0 41 41" fill="none">
                    <path
                      d="M17.8113 29.325L31.9113 15.225L29.1113 12.425L17.8113 23.725L12.1113 18.025L9.31133 20.825L17.8113 29.325ZM20.6113 40.125C17.8447 40.125 15.2447 39.6 12.8113 38.55C10.378 37.5 8.26133 36.075 6.46133 34.275C4.66133 32.475 3.23633 30.3583 2.18633 27.925C1.13633 25.4917 0.611328 22.8917 0.611328 20.125C0.611328 17.3583 1.13633 14.7583 2.18633 12.325C3.23633 9.89167 4.66133 7.775 6.46133 5.975C8.26133 4.175 10.378 2.75 12.8113 1.7C15.2447 0.65 17.8447 0.125 20.6113 0.125C23.378 0.125 25.978 0.65 28.4113 1.7C30.8447 2.75 32.9613 4.175 34.7613 5.975C36.5613 7.775 37.9863 9.89167 39.0363 12.325C40.0863 14.7583 40.6113 17.3583 40.6113 20.125C40.6113 22.8917 40.0863 25.4917 39.0363 27.925C37.9863 30.3583 36.5613 32.475 34.7613 34.275C32.9613 36.075 30.8447 37.5 28.4113 38.55C25.978 39.6 23.378 40.125 20.6113 40.125Z"
                      fill="#F47A1F"
                    />
                  </svg>
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
