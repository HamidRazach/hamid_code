"use client";
import Link from "next/link";
import styles from "./trendingservice.module.scss";
import { FiArrowRight } from "react-icons/fi";

// ✅ Now you can edit title/description for each card here:
const cardData = [
  {
    title: "AI Development",
    description:
      "TekRevol is a leading AI software development company laser-focused on building, training and deploying AI-based algorithms.",
    link: "#",
  },
  {
    title: "AR/VR Company",
    description:
      "An AR/VR app development company to cater to next-gen digital media enthusiasts.",
    link: "#",
  },
  {
    title: "Digital Strategy",
    description:
      "Our digital strategy consulting services are user-centric digitalized concepts",
    link: "#",
  },
  {
    title: "Automation Consultancy",
    description:
      "Put the right talent, data, and intelligence into action for business transformation.",
    link: "#",
  },
  {
    title: "Bluetooth App Development",
    description:
      "Deliver low-consumption interactive experiences to your end users through beacon-based digital products.",
    link: "#",
  },
  {
    title: "NFT Development",
    description:
      "Digitalmindson specializes in building blockchain ecosystems for creating and managing NFTs.",
    link: "#",
  },
  {
    title: "Machine Learning",
    description: "Use ML solutions and establish stronger foundations for effective business processes",
    link: "#",
  },
  {
    title: "Blockchain Development",
    description: "We are a Blockchain development services provider to help enterprises to acquire transparency and automation",
    link: "#",
  },
  {
    title: "BlockChain App Development",
    description:
      "Lead the digital world by incorporating next-gen business practices based on blockchain technology.",
    link: "#",
  },
  // 🔁 Add more cards here until you reach 37
  {
    title: "Metaverse Development",
    description:
      "Build your own shared and immersive experiences where players and avatars can engage with each other",
    link: "#",
  },
  {
    title: "DevOps Consultancy",
    description:
      "Accomplish your technical delivery objectives and create, deploy and test your products and solutions faster.",
    link: "#",
  },
  {
    title: "React Native App Development",
    description:
      "Partner with TekRevol as your react native app development company.",
    link: "/react-native-app-development-services",
  },
  {
    title: "Generative AI",
    description:
      "Gen AI – a new accelerator in the transformative digital landscape enables process automation and optimization.",
    link: "#",
  },
  {
    title: "Natural Language Processing",
    description:
      "Integrate Natural Language Processing solutions across core operations.",
    link: "#",
  },
  {
    title: "Speech Recognition",
    description:
      "Accelerate data entry, minimize regular workload, and enhance software accessibility with advanced voice technology solutions from Belitsoft.",
    link: "#",
  },
  {
    title: "App Store Optimization",
    description:
      "Turn app searches into downloads with targeted ASO services.",
    link: "#",
  },
  {
    title: "Search Engine Marketing",
    description:
      "Get found by millions of potential prospects with custom, high-impact search ads.",
    link: "#",
  },
  {
    title: "Social Media Marketing",
    description:
      "Tekrevol provides top-tier social media marketing services that ensure high engagement with your target audience.",
    link: "#",
  },
  {
    title: "2D Game Development",
    description:
      "Our 2D game development services help you design interactive environments with highly responsive functionalities",
    link: "#",
  },
  {
    title: "3D Game Development",
    description:
      "Digitalmindson is a leading 3D game development company that produces modern and attractive 2D and 3D games on iOS and Android.",
    link: "/3d-game-development-services",
  },
  {
    title: "Shopify Web Development",
    description:
      "Create a unique Shopify store with our secure, custom, and SEO-optimized web development services.",
    link: "/shopify-development-services",
  },
  {
    title: "Progressive Web App",
    description:
      "Digitalmindson is a leading progressive web app development company in developing unique PWAs tailored to your business needs.",
    link: "/web-development-services",
  }
];

const  TrendingServices_temp =() =>{
  return (
    <section className={styles.primary_services}>
      <div className="container">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
          <div className={styles.example} data-text="Trending">
            <h2>Trending Services</h2>
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
export default  TrendingServices_temp;
