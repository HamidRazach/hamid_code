"use client";
import { useState } from "react";
import styles from "./Digital_Masterpieces.module.scss";

export default function Digital_Masterpieces() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "01. Discovery & Strategy",
      heading: "Discovery & Strategy",
      desc: `We begin by diving deep into your vision, not just what you want built, but why. Through discovery sessions,
      competitor analysis, and user profiling, we extract key insights to shape a strong product foundation. This is where we align innovation with market fit, purpose with performance.`,
      activities: [
        "Business goals alignment",
        "Competitor benchmarking",
        "Target audience profiling",
        "Feature prioritization",
        "Roadmap and milestone planning",
      ],
    },
    {
      title: "02. Product Architecture",
      heading: "Product Architecture",
      desc: `Ideas are nothing without a solid framework. Our architects design the backbone of your app, selecting the right tech stack, defining system flows, and building a foundation that supports long-term scalability and security.`,
      activities: [
        "Technical architecture planning",
        "API and database structuring",
        "Platform and stack selection",
        "Cloud & hosting configuration",
        "Scalability and security mapping",
      ],
    },
    {
      title: "03. UI/UX Design",
      heading: "UI/UX Design",
      desc: `This is where your product takes shape, visually and experientially. Our designers build intuitive interfaces rooted in behavioral psychology and aesthetic excellence.`,
      activities: [
        "Wireframes and journey mapping",
        "Interactive prototypes",
        "Visual branding and interface design",
        "Animation and micro-interactions",
        "Usability testing and feedback loops",
      ],
    },
    {
      title: "04. Agile Development",
      heading: "Agile Development",
      desc: `We bring your product to life with clean, maintainable code written by top-tier engineers. Using agile methodology, we develop in rapid, testable sprints, delivering functional builds at every stage.`,
      activities: [
        "Frontend and backend development",
        "Sprint planning and execution",
        "Automated and manual code testing",
        "Git-based version control",
        "Continuous integration and deployment",
      ],
    },
    {
      title: "05. Quality Assurance",
      heading: "Quality Assurance",
      desc: `Before we hit launch, we break it, test it, and fix it, again and again. Our QA engineers rigorously test across browsers, devices, and edge cases to ensure your product is bulletproof.`,
      activities: [
        "End-to-end functionality testing",
        "Cross-platform and device compatibility",
        "Load and stress testing",
        "Vulnerability and penetration testing",
        "Bug tracking and resolution",
      ],
    },
    {
      title: "06. Launch & Deployment",
      heading: "Launch & Deployment",
      desc: `Your launch is our command performance. We handle everything, from App Store submissions to cloud deployment, ensuring a smooth, stress-free release.`,
      activities: [
        "App Store and Google Play submission",
        "Backend launch and server configuration",
        "Domain, SSL, and analytics setup",
        "Final QA and go-live checklist",
        "Deployment of marketing tools and SDKs",
      ],
    },
    {
      title: "07. Feedback Phase",
      heading: "Feedback Phase",
      desc: `Your app’s launch isn’t the finish line; it’s the starting point. We stay on to track, refine, and scale using real-world insights to shape future updates.`,
      activities: [
        "Real-time analytics and performance tracking",
        "Post-launch optimizations",
        "Feature iterations and upgrades",
        "Design and UX refinements",
        "Dedicated support and app maintenance",
      ],
    },
  ];

  return (
    <section className={styles.digital_masterpieces}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2>
              Our Process Turns Raw Ideas Into{" "}
              <span>Scalable Digital Masterpieces</span>
            </h2>
          </div>
          <div className="col-lg-6 col-12">
            <p>
              At Digitalmindson, our process isn’t linear; it’s crafted for momentum.
              We blend business strategy with creative execution and technical
              precision to take your idea from a spark to a full-scale digital
              solution.
            </p>
          </div>
        </div>

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
                {tabs[activeTab].activities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
