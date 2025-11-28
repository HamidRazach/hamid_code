"use client";
import Link from "next/link";
import React from "react";
import styles from "./Broaden_Business.module.scss";
import { broadenBusinessData } from "../../../constant/data";

export default function Boarden_Business() {
  const { heading, subheading, description, technologies, button } = broadenBusinessData;

  return (
    <div className={styles.technoloy_sec}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-10 col-xl-9 col-xxl-9 m-auto text-center">
            <h2>
              {heading} <span>{subheading}</span>
            </h2>
            <p>{description}</p>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-11 col-xxl-11 m-auto">
            <div className={styles.technology_main}>
              {technologies.map((tech, index) => (
                <div key={index} className={styles.technology_item}>
                  <div className={styles.svg_icon}>{tech.svg}</div>
                  <h6>{tech.title}</h6>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-auto text-center mt-4">
            <Link className={styles.btn} href={button.href}>
              <span className={styles.btn_label} data-text={button.text}>
                {button.text}
              </span>
              <span className={styles.btn_icon}>
                <i className={button.iconClass} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
