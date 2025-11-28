"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./development_workflow.module.scss";

export default function DevelopmentWorkflow() {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "cloud", label: "Cloud" },
  ];

  const tabContent = {
    frontend: [
      { src: "/images/site_logo/frontend/html5.webp", alt: "HTML Frontend Web development", label: "HTML" },
      { src: "/images/site_logo/frontend/css3.webp", alt: "CSS Frontend Web development", label: "CSS" },
      { src: "/images/site_logo/frontend/js.webp", alt: "JavaScript Frontend Web development", label: "JavaScript" },
      { src: "/images/site_logo/frontend/jquery.webp", alt: "jQuery Frontend Web development", label: "jQuery" },
      { src: "/images/site_logo/frontend/reactjs.webp", alt: "React.js Frontend Web development", label: "React.js" },
      { src: "/images/site_logo/frontend/angular.webp", alt: "Angular Frontend Web development", label: "Angular" },
    ],
    backend: [
      { src: "/images/site_logo/Backend/java.webp", alt: "Java Backend Web development", label: "Java" },
      { src: "/images/site_logo/Backend/node.webp", alt: "Node Backend Web development", label: "Node" },
      { src: "/images/site_logo/Backend/php.webp", alt: "PHP Backend Web development", label: "PHP" },
      { src: "/images/site_logo/Backend/python.webp", alt: "Python Backend Web development", label: "Python" },
      { src: "/images/site_logo/Backend/rails.webp", alt: "Rails Backend Web development", label: "Rails" },
    ],
    database: [
      { src: "/images/site_logo/Database/cassandria.webp", alt: "Cassandra Database for Web development Service", label: "Cassandra" },
      { src: "/images/site_logo/Database/mongodb.webp", alt: "MongoDB Database for Web development Service", label: "MongoDB" },
      { src: "/images/site_logo/Database/mysql.webp", alt: "MySQL Database for Web development Services", label: "MySQL" },
      { src: "/images/site_logo/Database/postgre.webp", alt: "Postgre Database for Web development Services", label: "Postgre" },
    ],
    cloud: [
      { src: "/images/site_logo/Cloud/aws-2.webp", alt: "AWS Cloud for Website development", label: "AWS" },
      { src: "/images/site_logo/Cloud/azure-2.webp", alt: "Azure cloud for Website development", label: "Azure" },
      { src: "/images/site_logo/Cloud/google_cloud.webp", alt: "Google Platforms cloud for Website development", label: "Google Platforms" },
      { src: "/images/site_logo/Cloud/kubernetes.webp", alt: "Kubernetes cloud for Website development", label: "Kubernetes" },
    ],
  };

  return (
    <div className={styles.tabing_section}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-lg-10 col-md-12 col-12">
            <h2 className={styles.h3_head}>
              Tech Stack That Powers <span>Our Web Development Services</span>
            </h2>
            <p className={styles.description}>
              At Digitalmindson our web developers use the latest technologies to help
              businesses stay ahead of the curve. Our robust tech stack ensures
              high-quality web development services in the USA, delivering
              innovative solutions tailored to meet diverse business needs.
            </p>
          </div>
        </div>

        <ul className={`nav nav-tabs gap-0 ${styles.custom_nav_tabs}`} role="tablist">
          {tabs.map((tab) => (
            <li className={`nav-item ${styles.nav_item}`} key={tab.id}>
              <button
                type="button"
                role="tab"
                className={`nav-link ${styles.nav_link} ${activeTab === tab.id ? styles.nav_link_active : ""}`}
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={`tab-content ${styles.tab_content}`}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
              role="tabpanel"
            >
              <ul className={`list-unstyled d-flex flex-wrap justify-content-start gap-3 ${styles.tab_list}`}>
                {tabContent[tab.id].map((item, index) => (
                  <li key={index} className={styles.tab_list_item}>
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
