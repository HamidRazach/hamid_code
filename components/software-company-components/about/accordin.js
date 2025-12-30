"use client";
import React, { useState } from "react";
import styles from "./customaccordin.module.scss";

// Static data can be defined outside the component
  const accordionItems = [
    {
      title: "Discovery & Analysis 01",
      contentTitle: "Discovery & Analysis",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Identify business needs and technical requirements through in-depth consultations. Analyze current systems and processes to pinpoint areas for improvement.",
      icon: (
     <i class="fa-solid fa-file-search"></i>
    ),
    },
    {
      title: "Feasibility & Impact Assessment 02",
      contentTitle: "Feasibility & Impact Assessment",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Evaluate technical feasibility and potential impact on business operations. Provide detailed cost and timeline estimates based on comprehensive analysis.",
       icon: (
      <i class="fa-solid fa-users"></i>
    ),
    },
    {
      title: "Solution Architecture Design 03",
      contentTitle: "Solution Architecture Design",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Develop a robust, scalable architecture tailored to your business needs. Ensure seamless integration with existing systems and future scalability.",
        icon: (
     <i class="fa-solid fa-pencil-ruler"></i>
    ),
    },
    {
      title: "Technology Selection & Prototyping 04",
      contentTitle: "Technology Selection & Prototyping",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Select the most suitable technologies and create prototypes. Validate design choices and gather stakeholder feedback for iterative improvements.",
     icon: (
      <i class="fas fa-microchip"></i>
    ),
    },
    {
      title: "Agile Development Process 05",
      contentTitle: "Agile Development Process",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Implement solutions using Agile methodologies. Ensure continuous integration, testing, and delivery for high-quality, reliable outputs.",
        icon: (
        <i class="fas fa-sync-alt"></i>
    ),
    },
    {
      title: "System Integration & Testing 06",
      contentTitle: "System Integration & Testing",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Integrate new solutions with existing infrastructure. Conduct thorough testing to ensure functionality, performance, and security.",
      icon: (
      <i class="fas fa-cogs"></i>
    ),
    },
    {
      title: "Deployment & User Training 07",
      contentTitle: "Deployment & User Training",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Deploy the solution across the organization. Provide comprehensive training to ensure smooth adoption and maximize user efficiency.",
      icon: (
       <i class="fas fa-rocket"></i>
    ),
    },
    {
      title: "Continuous Support & Optimization 08",
      contentTitle: "Continuous Support & Optimization",
      mainTitle: "Guided Roadmap to <span>Digital Success</span>",
      description:
        "Offer ongoing support and optimization services. Monitor performance, gather feedback, and implement enhancements to drive sustained growth and innovation.",
       icon: (
      <i class="fas fa-sync-alt"></i>
    ),
    },
  ];

const MainTitle = ({ htmlString }) => {
    const parts = htmlString.split(/<\/?span>/);
    if (parts.length < 2) {
        return <>{htmlString}</>;
    }
    return (
        <>
            {parts[0]}
            <span>{parts[1]}</span>
            {parts[2]}
        </>
    );
};

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.discoverySection}>
            <div className={styles.accordion}>
                {accordionItems.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <div
                            className={`${styles.cardHeader} ${activeIndex === index ? styles.active : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className={styles.headerText}>{item.title}</span>
                            <div className={styles.arrowIcon}>
                                <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.3408 27.4683L28.3844 17.6534L20.3408 9.60984" stroke="#f47a1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className={`${styles.cardBody} ${activeIndex === index ? styles.active : ""}`}>
                            <div className={styles.contentWrap}>
                                <div className={styles.mainTitle}>
                                    <MainTitle htmlString={item.mainTitle} />
                                </div>
                                <div className={styles.icon}>{item.icon}</div>
                                <h3 className={styles.title}>{item.contentTitle}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomAccordion;

