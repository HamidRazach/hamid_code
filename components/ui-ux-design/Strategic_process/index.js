import React from "react";
import styles from "./strategic_process.module.scss";
import Link from "next/link";

export default function Strategic_process() {
  const steps = [
    {
      step: "01",
      title: "Research & Discovery",
      desc: `We begin by understanding your business, users, and goals through research,
        competitor analysis, and user behavior insights. As a dedicated UI & UX design
        company, our goal is to build a strong foundation that ensures every design
        decision is backed by real data and focused on user needs.`,
    },
    {
      step: "02",
      title: "Wireframing & UI Planning",
      desc: `Next, we create wireframes and layout blueprints to plan your site’s
        structure and interface. Our UI design services focus on clarity, usability, and
        intuitive navigation—ensuring users can find what they need quickly and enjoyably
        across all devices.`,
    },
    {
      step: "03",
      title: "Visual Design & Prototyping",
      desc: (
        <>
          We bring the interface to life with custom visuals, brand colors,
          typography, and interactive elements—delivered as part of our UI & UX,{" "}
          logo design, and graphic design services. As a creative UI & UX design
          agency, we ensure your website doesn’t just look good—it aligns with
          your brand identity across every page.
        </>
      ),
    },
    {
      step: "04",
      title: "Testing & Iteration",
      desc: `Before launch, we conduct usability testing and collect real feedback to
        refine the user journey. Our expert UX design services focus on eliminating
        friction, improving engagement, and ensuring your website delivers the best
        possible experience for your audience.`,
    },
  ];

  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <div className={styles.head}>
          <h2>
            Smart, Simple, Strategic — &amp;{" "}
            <span>Our UI UX Design Process</span>
          </h2>
          <p className={styles.timelineText}>
            We follow a smart and easy process to deliver{" "}
            <Link href="/website-design-development" className={styles.pHref}>
              web development services
            </Link>{" "}
            and design websites that people enjoy using. Mandy Web Design is a
            trusted UI &amp; UX design company in India that turns ideas into
            smooth, user-friendly experiences.
          </p>
        </div>

        <div className="row">
          {steps.map((item, index) => (
            <div className="col-lg-6 col-md-12" key={index}>
              <div className={styles.timelineBox} data-step={item.step}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
