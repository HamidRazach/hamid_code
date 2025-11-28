"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Stack_use.module.scss";
import { StackUseData } from "../../../constant/data";

export default function Stack_use() {
  const [activeTab, setActiveTab] = useState(StackUseData.tabs[0].id);

  const { sectionHeading, highlight, description, tabs, logos } = StackUseData;

  return (
    <section className={styles.health_features}>
      <div className="container">
        <div className="row">
          {/* Heading and Description */}
          <div className="col-lg-6 col-12">
            <h2>
              {sectionHeading} <span>{highlight}</span>
            </h2>
          </div>
          <div className="col-lg-6 col-12">
            <p>{description}</p>
          </div>
        </div>

        {/* Tabs Navigation */}
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

        {/* Logos Grid */}
        <div className={styles.tech_logos}>
          <ul>
            {logos[activeTab].map((logo, i) => (
              <li key={i}>
                <Image src={logo} alt={`tech-${i}`} width={100} height={60} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
