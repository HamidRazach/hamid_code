import React from "react";
import styles from "./Digitalmarketingcard.module.scss";
import Link from "next/link";

export default function Digitalmarketingcard() {
  const cards = [
    {
      title: "SEO Services",
      svg: (
       <i class="fa-regular fa-chart-line"></i>
      ),
      desc: (
        <>
          Enhance your website's visibility with technical SEO audits and SERP
          performance optimization strategies. Our comprehensive
          <Link href="seo-services" style={{ color: "rgb(244, 122, 20)" }}>
            search engine optimization services</Link> ensure high SERP rankings through data-driven analysis and continuous
          performance monitoring.
        </>
      ),
    },
    {
      title: "SEM Services",
      svg: (
      <i class="fa-regular fa-bullhorn"></i>
      ),
      desc: (
        <>
          Drive targeted traffic with precision
          <Link href="seo-services" style={{ color: "rgb(244, 122, 20)" }}>search engine marketing services</Link>. Our PPC
          campaigns focus on optimal keyword bidding, ad copy testing, and
          budget management.
        </>
      ),
    },
    {
      title: "PPC Services",
      svg: (
        <i class="fa-regular fa-crosshairs"></i>
      ),
      desc: (
        <>
          Maximize your brand's reach with strategic
          <Link href="digital-marketing-services" style={{ color: "rgb(244, 122, 20)" }}>
            social media marketing services
          </Link>
          . We craft tailored content, engage with your audience, and leverage
          data analytics to optimize campaigns.
        </>
      ),
    },
    {
      title: "Web Design and Development",
      svg: (
       <i class="fa-regular fa-laptop-code"></i>
      ),
      desc: "Transform your digital presence with creative web design and development services. We focus on responsive designs, streamlined navigation, and high-speed performance to deliver websites that captivate users and convert leads.",
    },
    {
      title: "CRO Services",
      svg: (
      <i class="fa-regular fa-arrow-trend-up"></i>
      ),
      desc: "Convert more visitors into customers with advanced CRO techniques. We use A/B testing, heatmap analysis, and user behavior insights to improve website usability.",
    },
    {
      title: "Content Marketing Services",
      svg: (
       <i class="fa-regular fa-pen-to-square"></i>
      ),
      desc: "Engage and inform your audience with high-quality content marketing. Our services include content creation, distribution, and performance tracking.",
    },
    {
      title: "Email Marketing Services",
      svg: (
        <i class="fa-regular fa-envelope"></i>
      ),
      desc: "Boost your communication strategy with targeted email marketing. We design personalized campaigns, segment your audience, and track performance metrics.",
    },
    {
      title: "eCommerce Marketing",
      svg: (
      <i class="fa-regular fa-cart-shopping"></i>
      ),
      desc: "Take your online sales to the next level with our specialized eCommerce marketing solutions. Combining SEO, PPC, and email retargeting strategies.",
    },
    {
      title: "A/B Testing Services",
      svg: (
      <i class="fa-regular fa-flask"></i>
      ),
      desc: "Make every marketing decision count with our A/B testing services. We test variations of pages, emails, or ads to see what resonates best with your audience.",
    },
  ];

  return (
    <section className={styles.premier_custom_solution}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-12">
            <h2>
              Explore <span>Digital Marketing</span> Services That Deliver 20%
              Higher ROI
            </h2>
            <p>
              Digital marketing isn’t one-size-fits-all, and neither are our
              digital marketing services. From boosting your search ranking to
              creating campaigns that spark conversions, we customize everything
              to fit your goals. With Digitalmindson, you’ll have a dedicated team
              that goes out of the way to help you achieve your goal and treats
              your business as its own.
            </p>
          </div>
        </div>

        <div className="mt-3 mt-md-4 row">
          {cards.map((item, index) => (
            <div
              key={index}
              className="mb-4 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12"
            >
              <div className={styles.premier_sol_box}>
                <div className={styles.icon}>{item.svg}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
