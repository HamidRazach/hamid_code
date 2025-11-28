"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./tech_stack.module.scss";

export default function Tech_stack() {
  const [activeTab, setActiveTab] = useState("Frontend_Development");

  const tabs = [
    { id: "Frontend_Development", label: "Frontend Development" },
    { id: "backend", label: "Backend Development" },
    { id: "database", label: "Database" },
    { id: "APIs_Integrations", label: "APIs Integrations" },
    { id: "DevOps", label: "DevOps" },
    { id: "Payment_Gateways", label: "Payment Gateways" },
    { id: "Performance_Optimization", label: "Performance Optimization" },
    { id: "security", label: "Security" },
  ];

  const tabContent = {
    Frontend_Development: [
      { src: "/images/site_logo/frontend/NextJs.webp", alt: "NextJs", label: "NextJs" },
      { src: "/images/site_logo/frontend/React.webp", alt: "React", label: "ReactJs" },
      { src: "/images/site_logo/frontend/Vue.webp", alt: "Vue", label: "VueJs" },
    ],
    backend: [
      { src: "/images/site_logo/Backend/Node-js.webp", alt: "Node", label: "Node.js" },
      { src: "/images/site_logo/Backend/ExpressJs.webp", alt: "Express", label: "Express.js" },
      { src: "/images/site_logo/Backend/Django.webp", alt: "Django", label: "Django" },
    ],
    database: [
      { src: "/images/site_logo/Database/mysql.webp", alt: "My Sql", label: "MySql" },
      { src: "/images/site_logo/Database/mongodb.webp", alt: "MongoDB", label: "MongoDB" },
      { src: "/images/site_logo/Database/postgre.webp", alt: "Postgre SQL", label: "PostgreSQL" },
    ],
    APIs_Integrations: [
      { src: "/images/site_logo/api_intregration/Firebase_Cloud_Messaging.webp", alt: "Firebase Cloud Messaging", label: "Firebase Cloud Messaging" },
      { src: "/images/site_logo/api_intregration/GraphQL.webp", alt: "GraphQL", label: "GraphQL" },
      { src: "/images/site_logo/api_intregration/RESTful_APIs.webp", alt: "RESTful APIs", label: "RESTful APIs" },
    ],
    DevOps: [
      { src: "/images/site_logo/devops/docker.webp", alt: "Docker", label: "Docker" },
      { src: "/images/site_logo/devops/GitHub_Actions.webp", alt: "GitHub Actions", label: "GitHub Actions" },
      { src: "/images/site_logo/devops/Jenkins.webp", alt: "Jenkins", label: "Jenkins" },
    ],
    Payment_Gateways: [
      { src: "/images/site_logo/payment_gateway/PayPal.webp", alt: "PayPal", label: "PayPal" },
      { src: "/images/site_logo/payment_gateway/Square.webp", alt: "Square", label: "Square" },
      { src: "/images/site_logo/payment_gateway/Stripe.webp", alt: "Stripe", label: "Stripe" },
    ],
    Performance_Optimization: [
      { src: "/images/site_logo/perfrmance_optimization/Lighthouse.webp", alt: "Lighthouse", label: "Lighthouse" },
      { src: "/images/site_logo/perfrmance_optimization/Webpack.webp", alt: "Webpack", label: "Webpack" },
    ],
    security: [
      { src: "/images/site_logo/secrity/JWT.webp", alt: "JWT", label: "JWT" },
      { src: "/images/site_logo/secrity/OAuth.webp", alt: "OAuth", label: "OAuth" },
      { src: "/images/site_logo/secrity/TLS.webp", alt: "TLS", label: "TLS" },
    ],
  };

  return (
    <div className={styles.tabing_section}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-lg-10 col-md-12 col-12">
            <h3 className={styles.h3_head}>
              Tech Stack for <span> eCommerce Website Development </span> Services
            </h3>
            <p className={styles.description}>
              As a leading eCommerce website development company, we specialize in building novel, scalable, and high-performance online stores. Our tech stack leverages the latest, most reliable technologies to ensure seamless and responsive user experiences.
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
          {tabContent[activeTab] && (
            <div className="tab-pane fade show active" role="tabpanel">
              <ul className={`list-unstyled d-flex flex-wrap justify-content-start gap-3 ${styles.tab_list}`}>
                {tabContent[activeTab].map((item, index) => (
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
          )}
        </div>
      </div>
    </div>
  );
}
