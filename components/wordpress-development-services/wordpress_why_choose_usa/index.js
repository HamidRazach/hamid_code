import React from "react";
import styles from "./whychooseusa.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Why_choose_usa() {
  return (
    <div className={styles.whychooseusa}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="m-auto text-center col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-12">
            <h2>
              <span>Why Choose</span> Us as Your Trusted WordPress Design
              Company?
            </h2>
          </div>
        </div>
        <div className="h-100 choose_padd row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12">
            <p>
              Wondering why we stand out as a top-notch WordPress development
              company? That’s because we turn ideas into impactful websites!
            </p>
            <p>
              Here’s why you should choose us as your custom WordPress
              development company:
            </p>
            <ul>
              <li>
                <strong>Proven Expertise:</strong> With years of experience,
                we've honed our skills in WordPress design, ensuring top-notch
                solutions that resonate with your brand.
              </li>
              <li>
                <strong>Custom Designs:</strong> Designs customized to your
                needs, we go beyond templates, delivering unique and impactful
                solutions for an effective online presence.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> We collaborate
                closely, understanding your vision to create WordPress designs
                that exceed expectations and drive success.
              </li>
              <li>
                <strong>Smooth Integration:</strong> Our designs smoothly
                integrate with WordPress functions, providing visual appeal and
                a user-friendly browsing experience for visitors.
              </li>
            </ul>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Build WordPress Site">
                Build WordPress Site
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-12">
            <Image src="/images/wordpress-development-services/Why-Choose.webp" width={635} height={532}/>
          </div>
        </div>
      </div>
    </div>
  );
}
