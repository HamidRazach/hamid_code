"use client";
import { FiArrowRight } from "react-icons/fi";
import styles from "./primary_services.module.scss";
import Link from "next/link";

// ✅ Now you can edit title/description for each card here:
const cardData = [
  {
    title: "Web Development",
    description:
      "Digital Minds On leads in web development, creating responsive, and user-friendly websites using advanced technologies to deliver exceptional digital experiences for businesses worldwide.",
    link: "web-development-services",
  },
  {
    title: "Mobile App Development",
    description:
      "Digital Minds On excels in mobile app development services, delivering innovative, user-friendly, and high-performance applications tailored to meet business needs across various industries.",
      link: "mobile-app-development",
  },
  {
    title: "Software Development",
    description:
      "Digital Minds On specializes in software development, crafting innovative solutions with cutting-edge technologies to deliver exceptional, and user-centric digital experiences for businesses.",
      link: "custom-software-development",
  },
  {
    title: "Game Development",
    description:
      "Digital Minds On excels in game development, creating immersive, engaging, and innovative gaming experiences using advanced technologies to captivate players across platforms worldwide.",
      link: "/mobile-game-development",
  },
  {
    title: "WordPress Sevelopment",
    description:
      "Digital Minds On specializes in WordPress development, offering custom themes, plugins, and seamless integrations to create dynamic, user-friendly websites that drive engagement and growth.",
      link: "/wordpress-development-services",
  },
  {
    title: "Network Solutions",
    description:
      "Digital Minds On provides comprehensive network solutions, expert computer networking, and robust IT infrastructure to enhance performance, security, and scalability for businesses of all sizes.",
      link: "#",
  },
  {
    title: "UI/UX Design",
    description:
      "Digital Minds On offers expert UI/UX design services, creating intuitive, visually appealing interfaces that enhance user experience and drive engagement across digital platforms and applications.",
      link: "/ui-ux-design",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Digital Minds On provides expert SEO services, optimizing websites to enhance visibility, drive organic traffic, and boost rankings for sustainable business growth and success.",
      link: "/seo-services",
  },
  {
    title: "Mobile App Support",
    description:
      "Digitalmindson provides result-orientated and efficient application support and maintenance solution for after deployment.",
      link: "#",
  },
  // 🔁 Add more cards here until you reach 37
  {
    title: "Content creator",
    description:
      "Digital Minds On empowers brands with professional content creation, delivering engaging, high-quality, and impactful content tailored to captivate audiences and elevate digital presence.",
      link: "#",
  },
  {
    title: "Cloud Native Development",
    description:
      "Creating and delivering an innovative business experience to your stakeholder.",
      link: "#",
  },
  {
    title: "IoT Development",
    description:
      "As a forward-thinking startup or enterprise, working on IoT technology is a wise move.",
      link: "/iot-app-development-services",
  },
  {
    title: "API Integration",
    description:
      "Scale the capabilities of your business solutions through custom API development and integration services",
      link: "/api-integration-services",
  },
  {
    title: "E-Commerce Software Development",
    description:
      "Scale the capabilities of your business solutions through custom API development and integration services",
      link: "/ecommerce-website-development",
  },
  {
    title: "Chatbot Development",
    description: "Boost customer engagement and communication efforts 10x",
    link: "#",
  },
  {
    title: "Mobile App Development",
    description:
      "Digitalmindson is a mobile app development company that implements a data-driven and disruptive approach to leverage technologies.",
      link: "/mobile-app-development",
  },
  {
    title: "Magento Development Services",
    description:
      "As a leading Magento development agency, Digitalmindson offers tailored solutions to promote your e-commerce venture.",
      link: "/magento-development-services",
  },
  {
    title: "Enterprise App Development",
    description:
      "Digitalmindson stands as a top-grade enterprise app development company, dedicated to propelling your business forward through cutting-edge solutions.",
      link: "/enterprise-software-development-services",
  },
  {
    title: "Wordpress Development",
    description:
      "As a renowned WordPress Development Company, Digitalmindson help you to create an exceptional digital presence for your brand.",
      link: "/wordpress-development-services",
  },
  {
    title: "Unity Game App Development",
    description:
      "Struggling to find a Unity game development company you can truly rely on? Look no further!",
      link: "/unity-game-development-services",
  },
  {
    title: "Unreal Engine Game Development",
    description:
      "Frustrated in your search for a dependable Unreal Engine game development company?",
      link: "/unreal-game-development-services",
  },
  {
    title: "Web Application Development",
    description:
      "Revitalize your online presence with our leading web app development company,",
      link: "/web-development-services",
  },
  {
    title: "Web3 Development Company",
    description:
      "We excel in creating interactive web 3.0 solutions using blockchain, AI, and IoT technologies.",
      link: "#",
  },
  {
    title: "Saas Video Production",
    description:
      "We produce thought-provoking SaaS explainer videos that are engaging, and creative.",
      link: "#",
  },
  {
    title: "Hire.Net Developer",
    description:
      "Digitalmindson is a premier marketplace connecting you with the industry's top .NET developers and coders.",
      link: "#",
  },
  {
    title: "Hire IOS App Developers",
    description:
      "Transform your business with expert iOS app developers, available for freelance and full-time roles.",
      link: "#",
  },
  {
    title: "Hire Android App Developers",
    description:
      "Upscale your business with highly skilled Android app developers available for full-time and hybrid roles.",
      link: "#",
  },
  {
    title: "Hire Reactjs App Developers",
    description:
      "Digitalmindson provides unparalleled assistance in sourcing and hiring elite React developers for freelance and full-time positions.",
      link: "#",
  },
  {
    title: "Ecommerce Website Development",
    description:
      "Build mobile-ready, user-first shopping solutions with your favorite eCommerce store.",
      link: "/ecommerce-website-development",
  },
  {
    title: "Web3 Game Development",
    description:
      "Digitalmindson uses talent and technology to help game and media startups develop and launch Web3 games three times faster.",
      link: "#",
  },
  {
    title: "Web Portal Development",
    description:
      "Digitalmindson has transformed visionary concepts into fully functional, user-friendly web portals for 5+ years.",
      link: "/web-portal-development",
  },
  {
    title: "Digital Marketing Services",
    link: "/digital-marketing-services",
    description:
      "Our agency helps businesses with channel selection, integrated communications, and brand building to tackle online challenges.",
  },
  {
    title: "Logistic App Development",
    description:
      "Conceptualize, design, and code high-end, feature-rich applications with our logistics app development company.",
      link: "#",
  },
  {
    title: "Retail App Development",
    description:
      "Upgrade your retail business with custom apps designed to streamline operations and boost sales.",
      link: "#",
  },
  {
    title: "Telecom Software",
    description:
      "Unlock next-gen connectivity with telecom software using AI and cloud-native tech for superior performance and reliability.",
      link: "#",
  },
  {
    title: "Construction Software",
    description:
      "Construction businesses face budget overruns and operational bottlenecks, leading to stalled progress and expensive project delays.",
      link: "#",
  },
  {
    title: "AI Agent Development",
    description:
      "As a leading AI agent development company, we create intelligent, scalable, and fully customized AI agents tailored to your business needs.",
      link: "#",
  },
];

export default function PrimaryServices() {
  return (
    <section className={styles.primary_services}>
      <div className="container">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
          <div className={styles.example} data-text="Primary">
            <h2>Primary Services</h2>
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
