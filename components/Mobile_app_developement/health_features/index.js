"use client";
import { useState } from "react";
import styles from "./health_features.module.scss";
import Image from "next/image";

export default function HealthFeatures() {
  const [activeTab, setActiveTab] = useState("platforms");

  const tabs = [
    { id: "platforms", label: "Platforms" },
    { id: "programming", label: "Programming Language" },
    { id: "database", label: "Database And Reporting" },
  ];

  const logos = {
    platforms: [
      "/images/mobile-app-development/microsoft-dynamic.webp",
      "/images/mobile-app-development/share-point.webp",
      "/images/mobile-app-development/aws-logo.webp",
      "/images/mobile-app-development/kotlin.webp",
      "/images/mobile-app-development/angular.webp",
      "/images/mobile-app-development/xamarin.webp",
      "/images/mobile-app-development/azure-logo.webp",
      "/images/mobile-app-development/meteor.webp",
      "/images/mobile-app-development/google-cloud.webp",
      "/images/mobile-app-development/android-studio.webp",
      "/images/mobile-app-development/microsoft-dynamic.webp",
      "/images/mobile-app-development/react-logo.webp",
      "/images/mobile-app-development/rails-logo.webp",
      "/images/mobile-app-development/salesforce.webp",
      "/images/mobile-app-development/adobe-experience.webp",
    ],
    programming: [
      "/images/mobile-app-development/c.webp",
      "/images/mobile-app-development/golang-logo.webp",
      "/images/mobile-app-development/java.webp",
      "/images/mobile-app-development/javascript.webp",
      "/images/mobile-app-development/objective-c-logo.webp",
      "/images/mobile-app-development/php.webp",
      "/images/mobile-app-development/python.webp",
      "/images/mobile-app-development/R_logo.webp",
      "/images/mobile-app-development/react-native.webp",
      "/images/mobile-app-development/swift-logo.webp",
    ],
    database: [
      "/images/mobile-app-development/AWS.webp",
      "/images/mobile-app-development/cassandra-logo-1.webp",
      "/images/mobile-app-development/cognos-logo.webp",
      "/images/mobile-app-development/hadoop.webp",
      "/images/mobile-app-development/jaspera.webp",
      "/images/mobile-app-development/MongoDB.webp",
      "/images/mobile-app-development/MySQL.webp",
      "/images/mobile-app-development/Oracle-Logo.webp",
      "/images/mobile-app-development/pentaho.webp",
      "/images/mobile-app-development/postgresql.webp",
    ],
  };

  return (
    <section className={styles.health_features}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2>
              Tech Stack We Use For <span>Mobile App Development</span>
            </h2>
          </div>
          <div className="col-lg-6 col-12">
            <p>
              At Digitalmindson, we use a carefully selected technology stack with the
              best tools and frameworks to build reliable and future-ready mobile
              apps. We work with everything from AI and AR/VR to modern
              development frameworks to make sure each app performs well, scales
              easily, and stays secure.
            </p>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className={styles.nav_tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab_btn} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Logos */}
        <div className={styles.tech_logos}>
          <ul>
            {logos[activeTab].map((logo, i) => (
              <li key={i}>
                <Image src={logo} alt={`tech-${i}`} width={100} height={60}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
