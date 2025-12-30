"use client";
import React from "react";
import styles from "./Customsoftware.module.scss";

const services = [
  {
    title: "Software Development Outsourcing",
    description:
      "As a leader in providing the best custom software development services, we seamlessly integrate our expertise with your concept to produce smooth and intelligent solutions. Our devoted, passionate staff provides you with the most scalable solutions for your organization.",
    icon: (
    <i class="fa-regular fa-users-gear"></i>
    ),
  },
  {
    title: "Dedicated Software Development Team",
    description:
      "We have a devoted and talented crew that is full of enthusiasm and focused solely on coding, integrating, and testing. By using a refined development cycle, we ensure the timely and successful execution of our project commitments.",
    icon: (
  <i class="fa-regular fa-people-group"></i>
    ),
  },
  {
    title: "Team Augmentation",
    description:
      "We supplement your present team with competent individuals in frontend and backend development, design, project management, and so on. Our structured approach ensures active collaboration while delivering the knowledge and skills that will assist your project.",
    icon: (
    <i class="fa-regular fa-user-group"></i>
    ),
  },
];

export default function Custom() {
  return (
    <section className={`text_white ${styles.partner_software}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 text-center">
            <h2>
              Partner with Us for Your <span>Custom Software Development</span>{" "}
              Journey
            </h2>
            <p>
              As a top-ranked software development company, we take pride in
              providing our clients with perfect synergy and strong, customized
              services that fit your needs. Whether your project demands a
              dedicated team or additional resources, we implement a customized
              software development approach to facilitate smooth management and
              delivery.
            </p>
          </div>
        </div>

        <div className="row mt-3 mt-md-4">
          {services.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className={styles.softwareBox}>
                <div className={styles.iconBox}>{item.icon}</div>
                <div className={styles.content}>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
