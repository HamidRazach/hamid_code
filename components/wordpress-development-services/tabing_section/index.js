import React, { useState } from "react";
import styles from "./tabing_section.module.scss";

export default function Tabing_section() {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <div className={styles.tabing_section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <h3 className={styles.h3_head}>
              Tech Stack for <span>WordPress Development</span>
            </h3>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <p>Here is our tech stack for WordPress development services</p>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className="row">
          <ul className={styles.nav_tabs}>
            <li
              className={`${styles.nav_item} ${
                activeTab === "languages" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("languages")}
            >
              Programming Languages
            </li>
            <li
              className={`${styles.nav_item} ${
                activeTab === "databases" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("databases")}
            >
              Databases
            </li>
            <li
              className={`${styles.nav_item} ${
                activeTab === "frameworks" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("frameworks")}
            >
              Frameworks
            </li>
          </ul>

          {/* Tab Content */}
          <div className={styles.tab_content}>
            {activeTab === "languages" && (
              <ul className={styles.tab_list}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
              </ul>
            )}
            {activeTab === "databases" && (
              <ul className={styles.tab_list}>
                <li>Plesk</li>
                <li>cPanel</li>
                <li>phpMyAdmin</li>
                <li>MySQL Client</li>
              </ul>
            )}
            {activeTab === "frameworks" && (
              <ul className={styles.tab_list}>
                <li>Bootstrap</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>Next.js</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
