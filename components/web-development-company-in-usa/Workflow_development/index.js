"use client";
import React from "react";
import styles from "./Workflow_development.module.scss";
import Link from "next/link";

export default function Webflow_development({ data }) {
  const { heading, highlight, description, workflowSteps } = data;

  return (
    <section className={styles.workflow_content}>
      <div className="container">

        <div className="row">
          <div className="m-auto text-center col-xxl-10 col-xl-10">
            <h2>
              {heading} <span>{highlight}</span>
            </h2>
            <p>{description}</p>
          </div>
        </div>

        <div className={`row ${styles.workflow_section}`}>
          {workflowSteps.map((step, index) => (
            <div key={index} className="my-auto col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
              <div className={styles.workflow_items}>
                <div className={styles.item_name}>
                  <span>{step.number}</span>
                  {step.title}
                  <div className={styles.item_icon}>{step.icon}</div>
                </div>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="m-auto text-center mt-5 col-12">
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Talk To Our Experts">
                Talk To Our Experts
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
