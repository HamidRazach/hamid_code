"use client";
import React from "react";
import Image from "next/image";
import styles from "./Better_experience.module.scss";

export default function Better_experience() {
  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          {/* Content Section */}
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2 className={styles.h2}>
              Give Your Users a Better Experience with{" "}
              <span>Our UI & UX Design Services</span>
            </h2>
            <p>
              A great user experience can turn casual visitors into loyal
              customers. That’s why UI & UX design is more than just looks—it’s
              about making your website easy, clear, and enjoyable to use. As a
              leading user experience design firm, we focus on designing
              interfaces that guide users smoothly from start to finish.
            </p>
            <p>
              Mandy Web Design is recognized as a UI & UX design agency in India
              with years of experience. We blend creativity with strategy to
              build websites that work well, look great, and leave a lasting
              impression on every user.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center">
            <Image
              src="/images/ui-ux-design/ui-ux-design-right.webp"
              alt="web development company"
              width={1635}
              height={939}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
