"use client";
import { useState } from "react";
import styles from "./Process_turns.module.scss";
import { Process_TurnsData } from "../../../constant/services/mobile-app-development-company-in-usa"; // 👈 import your data file

export default function Process_turn() {
  const [activeTab, setActiveTab] = useState(0);

  // Assuming you only have one process object in the data array (like id:1)
  const process = Process_TurnsData[0];
  const tabs = process.tabs;

  return (
    <section className={styles.digital_masterpieces}>
      <div className="container">
        {/* Heading Row */}
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2>
              {process.mainHeading}{" "}
              <span>{process.highlight}</span>
            </h2>
          </div>
          <div className="col-lg-6 col-12">
            <p>{process.description}</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className={`row mt-5 ${styles.tab_section}`}>
          {/* Left Tabs */}
          <div className={`col-lg-4 col-12 ${styles.tabs_col}`}>
            <ul className={styles.tab_list}>
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`${styles.tab_item} ${
                    activeTab === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="col-lg-8 col-12">
            <div className={styles.tab_content}>
              <h3>{tabs[activeTab].heading}</h3>
              <p>{tabs[activeTab].desc}</p>
              <h4>Key Activities:</h4>
              <ul>
                {tabs[activeTab].activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
