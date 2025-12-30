import React from "react";
import styles from "./Front-End-Development.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FrontendRewriteData } from "../../../constant/services/front-end-development-services";

export default function Frontend_rewrite() {
  return (
    <section className={styles.rewrite_sec}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h2 className={styles.h2_head}>
              {FrontendRewriteData.heading} <span>{FrontendRewriteData.highlighted}</span>
            </h2>
          </div>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_text}>
              {FrontendRewriteData.content.map((item, index) => (
                <div className={styles.rewrite_div} key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}

              <Link className={styles.btn} href={FrontendRewriteData.button.link}>
                <span
                  className={styles.btn_label}
                  data-text={FrontendRewriteData.button.text}
                >
                  {FrontendRewriteData.button.text}
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_img}>
              <Image
                src={FrontendRewriteData.image.src}
                alt={FrontendRewriteData.image.alt}
                width={FrontendRewriteData.image.width}
                height={FrontendRewriteData.image.height}
                className={styles.img_fluid}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
