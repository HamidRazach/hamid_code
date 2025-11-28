"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./mobile_workflow.module.scss";

export default function MobileWorkflow() {
  const [activeTab, setActiveTab] = useState("Programming_Languages");

  const tabs = [
    { id: "Programming_Languages", label: "Programming Languages" },
    { id: "Frameworks", label: "Frameworks" },
    { id: "cloud", label: "Cloud" },
  ];

  const tabContent = {
    Programming_Languages: [
      { src: "/images/site_logo/frontend/html5.webp", alt: "HTML", label: "HTML" },
      { src: "/images/site_logo/programer_language/cplusplus.webp", alt: "C++", label: "C++" },
      { src: "/images/site_logo/programer_language/javascript.webp", alt: "JavaScript", label: "JavaScript" },
      { src: "/images/site_logo/programer_language/csharp.webp", alt: "C#", label: "Csharp" },
      { src: "/images/site_logo/programer_language/python.webp", alt: "Python", label: "Python" },
      { src: "/images/site_logo/programer_language/swift.webp", alt: "Swift", label: "Swift" },
      { src: "/images/site_logo/programer_language/java.webp", alt: "Java", label: "Java" },
      { src: "/images/site_logo/programer_language/kotlin.webp", alt: "Kotlin", label: "Kotlin" },
      { src: "/images/site_logo/programer_language/apple_objective.webp", alt: "Objective-C", label: "Objective-C" },
    ],
    Frameworks: [
      { src: "/images/site_logo/Backend/Node-js.webp", alt: "Node", label: "Node" },
      { src: "/images/site_logo/Framework/phonegap.webp", alt: "Phonegap", label: "Phonegap" },
      { src: "/images/site_logo/Framework/Xamarin.webp", alt: "Xamarin", label: "Xamarin" },
      { src: "/images/site_logo/Framework/Flutter.webp", alt: "Flutter", label: "Flutter" },
      { src: "/images/site_logo/Framework/Ionic.webp", alt: "Ionic", label: "Ionic" },
    ],
    cloud: [
      { src: "/images/site_logo/Cloud/aws-2.webp", alt: "AWS", label: "AWS" },
      { src: "/images/site_logo/Cloud/azure-2.webp", alt: "Azure", label: "Azure" },
      { src: "/images/site_logo/Cloud/google_cloud.webp", alt: "Google Cloud", label: "Google Cloud" },
    ],
  };

  return (
    <div className={styles.tabing_section}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-7 col-md-7 col-12 my-auto">
            <h3 className={styles.h3_head}>
              Tech Stack Our <span>Mobile Application Development</span> Company Leverages
            </h3>
          </div>
          <div className="col-lg-5 col-md-5 col-12 my-auto">
            <p className={styles.description}>
              Empowering your apps with novel, high-end, and in-demand tech stacks for consistent performance and innovation.
            </p>
          </div>
        </div>

        <ul className={`d-flex ${styles.custom_nav_tabs}`} role="tablist">
          {tabs.map((tab) => (
            <li className={styles.nav_item} key={tab.id}>
              <button
                type="button"
                role="tab"
                className={`${styles.nav_link} ${
                  activeTab === tab.id ? styles.nav_link_active : ""
                }`}
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.tab_content}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${styles.tab_content_item} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              role="tabpanel"
            >
              <ul className={`list-unstyled d-flex flex-wrap justify-content-start gap-3 ${styles.tab_list}`}>
                {tabContent[tab.id].map((item, index) => (
                  <li key={index} className="text-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={84}
                      height={84}
                      className={styles.tab_image}
                        unoptimized
                    />
                    <div className={styles.text_tabs_web}>
                      <h6>{item.label}</h6>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
