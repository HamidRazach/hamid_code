import React, { useState } from "react";
import styles from "./Portal_track.module.scss";
import Image from "next/image";

const techCategories = {
  Frontend: [
    { name: "AngularJs", icon: "/images/site_logo/frontend/angular.webp" },
    { name: "CSS", icon: "/images/site_logo/frontend/css3.webp" },
    { name: "HTML", icon: "/images/site_logo/frontend/html5.webp" },
    { name: "Javascript", icon: "/images/site_logo/frontend/js.webp" },
    { name: "Meteor", icon: "/images/site_logo/frontend/Meteor.webp" },
    { name: "NextJs", icon: "/images/site_logo/frontend/NextJs.webp" },
    { name: "React Js", icon: "/images/site_logo/frontend/React.webp" },
    { name: "Vue Js", icon: "/images/site_logo/frontend/Vue.webp" },
  ],
  Backend: [
    { name: "Go", icon: "/images/site_logo/Backend/Go_lan.webp" },
    { name: "Java", icon: "/images/site_logo/Backend/java.webp" },
    { name: "MS.Net", icon: "/images/site_logo/Backend/MS.Net.webp" },
    { name: "Node js", icon: "/images/site_logo/Backend/node.webp" },
    { name: "Php", icon: "/images/site_logo/Backend/php.webp" },
    { name: "Python", icon: "/images/site_logo/Backend/python.webp" },
  ],
  "Cloud Database": [
    { name: "Amazon_DynamoDB", icon: "/images/site_logo/Cloud/Amazon_DynamoDB.webp" },
    { name: "Amazon redshift", icon: "/images/site_logo/Cloud/amazon_redshift.webp" },
    { name: "Azure SQL Database", icon: "/images/site_logo/Cloud/Azure_SQL_Database.webp" },
    { name: "Google Cloud Datastore", icon: "/images/site_logo/Cloud/Google_Clou_Datastore.webp" },
  ],
  "Cloud Web": [
    { name: "AWS", icon: "/images/site_logo/Cloud/aws-2.webp" },
    { name: "Azure", icon: "/images/site_logo/Cloud/azure-2.webp" },
    { name: "Digital Ocean", icon: "/images/site_logo/Cloud/digital_ocean.webp" },
    { name: "Google Cloud Platform", icon: "/images/site_logo/Cloud/Google_Cloud_Platform.webp" },
    { name: "Reckspace", icon: "/images/site_logo/Cloud/reckspace.webp" },
  ],
  "Database Storage": [
    { name: "Azure SQL Database", icon: "/images/site_logo/Database/Azure_SQL_Database.webp" },
    { name: "Cassandra", icon: "/images/site_logo/Database/cassandria.webp" },
    { name: "My SQL", icon: "/images/site_logo/Database/mysql.webp" },
    { name: "Oracle", icon: "/images/site_logo/Database/Oracle.webp" },
    { name: "PostgreSQL", icon: "/images/site_logo/Database/PostgreSQL.webp" },
    { name: "SQL Server", icon: "/images/site_logo/Database/SQL_server.webp" },

  ],
  "Mobile Platform": [
    { name: "Android", icon: "/images/site_logo/Mobile-platform/Android.webp" },
    { name: "Cordova", icon: "/images/site_logo/Mobile-platform/Cordova.webp" },
    { name: "Flutter", icon: "/images/site_logo/Mobile-platform/Flutter.webp" },
    { name: "Ionic", icon: "/images/site_logo/Mobile-platform/Ionic.webp" },
    { name: "React Native", icon: "/images/site_logo/Mobile-platform/Reactnative.webp" },
    { name: "Xamarin", icon: "/images/site_logo/Mobile-platform/Xamarin.webp" },
],
  "Platform Web": [
    { name: "Joomla", icon: "/images/site_logo/Platform-web/Joomla.webp" },
    { name: "Magento", icon: "/images/site_logo/Platform-web/Magento.webp" },
    { name: "SalesForce", icon: "/images/site_logo/Platform-web/SalesForce.webp" },
    { name: "SharePoint", icon: "/images/site_logo/Platform-web/SharePOint.webp" },
    { name: "Wordpress", icon: "/images/site_logo/Platform-web/Wordpress.webp" },

],
  "Real Time Data Processing": [
    { name: "Amazon kinesis", icon: "/images/site_logo/Real-Time-Data-Processing/amazon_kinesis.webp" },
    { name: "Apache storm", icon: "/images/site_logo/Real-Time-Data-Processing/apche_storm.webp" },
    { name: "Azure Event Hub", icon: "/images/site_logo/Real-Time-Data-Processing/azure_event_hub.webp" },
    { name: "Flink", icon: "/images/site_logo/Real-Time-Data-Processing/flink.webp" },
    { name: "Kafka Streams", icon: "/images/site_logo/Real-Time-Data-Processing/kafk_sreams.webp" },
],
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className={styles.techSection}>
      <div className="container">
        <h2 className={styles.heading}>
          Tech Stack for <span>Web Portal Development</span> Services
        </h2>

        {/* Tabs */}
        <ul className={styles.tabs}>
          {Object.keys(techCategories).map((cat) => (
            <li
              key={cat}
              className={`${styles.tabItem} ${
                activeTab === cat ? styles.active : ""
              }`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Tech Icons */}
        <div className={styles.techGrid}>
          {techCategories[activeTab].map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <Image
                src={tech.icon}
                alt={tech.name}
                width={60}
                height={60}
                className={styles.icon}
                unoptimized
              />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
