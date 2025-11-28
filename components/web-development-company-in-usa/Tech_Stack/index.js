"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Tech_Stack.module.scss";

export default function Tech_Stack({ data }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id);

  const { heading, subheading, description, tabs, tabContent } = data;

  return (
    <div className={styles.tabing_section}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-lg-10 col-md-12 col-12">
            <h2 className={styles.h3_head}>
              {heading} <span>{subheading}</span>
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        <ul className={`nav nav-tabs gap-0 ${styles.custom_nav_tabs}`} role="tablist">
          {tabs.map((tab) => (
            <li className={`nav-item ${styles.nav_item}`} key={tab.id}>
              <button
                type="button"
                role="tab"
                className={`nav-link ${styles.nav_link} ${
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

        <div className={`tab-content ${styles.tab_content}`}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
              role="tabpanel"
            >
              <ul
                className={`list-unstyled d-flex flex-wrap justify-content-start gap-3 ${styles.tab_list}`}
              >
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
