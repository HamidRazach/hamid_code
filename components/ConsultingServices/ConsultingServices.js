"use client";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./consultingservice.module.scss";

// ✅ Now you can edit title/description for each card here:
const cardData = [
  {
    title: "Cloud Computing",
    description:
      "Cloud technology makes it possible to build excellent IT infrastructure",
    link: "#",
  },
  {
    title: "CTO Consultant",
    description:
      "Work with C-level tech executives to experience fundamental digital transformation.",
    link: "#",
  },
  {
    title: "Emerging Technology",
    description:
      "Digitalmindson delivers world-class enterprise emerging technology solution",
    link: "#",
  },
  {
    title: "Digital Transformation",
    description:
      "As premier digital transformation consultants, our digital transformation services provide our clients",
    link: "#",
  },
  {
    title: "Digital Marketplace",
    description:
      "Create fully-featured online niche marketplaces, attract relevant global traffic",
    link: "#",
  },
  {
    title: "Data Analytics",
    description:
      "Digitalmindson big data analytics services are designed for enterprise organizations.",
    link: "/data-insight-services",
  },
  {
    title: "Digital Strategy",
    description:
      "Our digital strategy consulting services are user-centric digitalized concepts",
    link: "#",
  },
  {
    title: "Ip Protection",
    description:
      "Protecting Intellectual Property can be an incredibly expensive, time consuming and complex task.",
    link: "#",
  },
  {
    title: "Technology Consulting",
    description:
      "Our tech consulting services encompass all the modern aspects",
    link: "#",
  },
  // 🔁 Add more cards here until you reach 37
  {
    title: "MVP Software Development",
    description:
      "Digitalmindson is experienced in designing, developing, and launching minimum viable products",
    link: "/mvp-development-services",
  },
  {
    title: "Managing Mobility",
    description:
      "Digitalmindson helps you set up the architecture, build mobility systems",
    link: "#",
  },
  {
    title: "Lean Startup Plan",
    description:
      "Our lean startup services enable startups to find the right areas that impact consumers",
    link: "#",
  },
  {
    title: "Research and Development",
    description:
      "Digitalmindson is a technology research and development company working to improve existing services",
    link: "#",
  },
  {
    title: "Startup Prototype",
    description:
      "Discover the potential of your product idea with a pioneering Startup Prototype Development Company.",
    link: "#",
  },
  {
    title: "Managed Cloud Services",
    description: "Our cloud-managed services help your business evolve digitally by utilizing modern cloud computing.",
    link: "#",
  },
  {
    title: "Cloud Application Development",
    description:
      "To drive intelligent business decisions, you need cloud-based application development.",
    link: "#",
  },
  {
    title: "Serverless Computing Services",
    description:
      "Our serverless computing services are designed to help your business.",
    link: "#",
  },
  {
    title: "Infrastructure Migration Services",
    description:
      "The team at Tekrevol comes in handy if you are looking for state-of-the-art infrastructure migration services.",
    link: "#",
  },
  {
    title: "Cloud Migration",
    description:
      "Digitalmindson cloud migration services help businesses seamlessly transition applications and databases to the cloud with precision and efficiency.",
    link: "#",
  },
  {
    title: "Devops Enablement",
    description:
      "Empower your teams with a cutting-edge framework for DevOps Enablement that ensures high-quality software development.",
    link: "/devops-consulting-services",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Balance your budget with deeper insights of cloud optimization and build a strategy that optimizes the overall workflow by streamlining the operations.",
    link: "#",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Get a robust and agile cloud infrastructure for your business to stay competitive and innovative.",
    link: "#",
  },
  {
    title: "Cloud Support And Maintenance",
    description:
      "Digitalmindson helps its clients future-proof their digital transformation journey with cloud support and maintenance services.",
    link: "#",
  },
  {
    title: "SEO",
    description:
      "Build your website’s authority with promising results following our proven SEO strategy.",
    link: "/seo-services",
  },
  {
    title: "Woocommerce Development Services",
    description:
      "Get your WooCommerce site up and running with our expert team.",
    link: "/woocommerce-development-services",
  },
  {
    title: "Vendor Portal Development",
    description:
      "With 5+ years' experience, TekRevol’s vendor portals streamline workflows and strengthen partnerships in one hub.",
    link: "#",
  },
  {
    title: "Ionic App Development",
    description:
      "Digitalmindson specializes in creating top-notch ionic applications using open-source UI toolkits across different platforms.",
    link: "#",
  },
  {
    title: "B2B Portal Development",
    description:
      "B2B portal development creates an integrated platform for efficient interactions among partners, suppliers, and buyers.",
    link: "#",
  },
];

export default function ConsultingServices() {
  return (
    <section className={styles.primary_services}>
      <div className="container">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
          <div className={styles.example} data-text="Consulting">
            <h2>Consulting Services</h2>
          </div>
        </div>
        <div className="row">
          {cardData.map((card, idx) => (
            <div key={idx} className="col-sm-6 col-lg-4 mb-4">
              <div className={styles.service_card}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className={styles.card_title}>{card.title}</h5>
                    <p className={styles.card_text}>{card.description}</p>
                  </div>
                  <div className={styles.mt_3} id="arrow-sine">
                    <button className={styles.arrow_btn}>
                      <Link href={card.link} className={styles.arrow_btn}>
                        <FiArrowRight />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
