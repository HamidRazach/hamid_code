import React from "react";
import styles from "./creative.module.scss";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

export default function Creative_design() {
  return (
    <section className={styles.professional_Web}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>
              Best UI &amp; UX Design Company in India{" "}
              <span className="colored-text">
                {" "}
                Turning Ideas into Creative Websites{" "}
              </span>{" "}
            </h2>
            <ul className={styles.profassion_list}>
              <li className={styles.text_white}>
                <span>
                  <GiCheckMark />
                </span>{" "}
                Fully Custom UI &amp; UX Designs Tailored to Your Business Goals
              </li>
              <li className={styles.text_white}>
                {" "}
                <span>
                  <GiCheckMark />
                </span>{" "}
                User, Mobile Friendly, &amp; Conversion-Focused Design Solutions{" "}
              </li>
              <li className={styles.text_white}>
                <span>
                  <GiCheckMark />
                </span>{" "}
                Built to Improve Engagement, User Experience, and Brand Trust{" "}
              </li>
            </ul>
            <p>
              Great design isn’t just about looks—it’s about results. We focus
              on building smart, user-centered experiences that increase
              engagement, build trust, and convert visitors into customers. As a
              top UI &amp; UX design company in India, we create clean,
              responsive, and high-performing interfaces that adapt seamlessly
              to all devices. Being a reliable UI &amp; UX design services
              company, we align every design decision with your business
              goals—whether you're launching a new app, revamping a website, or
              improving product usability. Every click, scroll, and interaction
              is crafted to deliver impact.
            </p>
          </div>
          <div className="col-md-5 professinal-img">
            <Image
              src="/images/ui-ux-design/shopify-dev-right-img.webp"
              alt="Shopify Development"
              width={924}
              height={548}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
