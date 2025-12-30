"use client";
import React from "react";
import styles from './webflow.module.scss';
import Link from "next/link";

export default function Webflowcards() {
  return (
    <div
      className={styles.workflow_content}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-12">
            <h2>
              Our Simple, Frictionless Web Development <span>Workflow</span>
            </h2>
            <p>
              We use lean, agile methodology for collaborative development and
              faster turnarounds. Join the ranks of the 100s of companies we
              helped with our optimized and result-driven web development
              process.
            </p>
          </div>
        </div>
         <div className={`row ${styles.workflow_section}`}>
          <div className="my-auto col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.workflow_items}>
              <div className={styles.item_name}>
                <span>01</span>Kick-Off with Project Idea
                <div className={styles.item_icon}>
                  {" "}
                  <i class="fa-regular fa-file-pen"></i>
                </div>
              </div>
              <p>
                Evaluate project scope and set objectives with expert
                consultation.
              </p>
            </div>
          </div>
          <div className="my-auto col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.workflow_items}>
              <div className={styles.item_name}>
                <span>02</span>Decide Tech Stack
                <div className={styles.item_icon}>
                  {" "}
                 <i class="fa-regular fa-star"></i>
                </div>
              </div>
              <p>Move forward, right and quick, with useful-only resources.</p>
            </div>
          </div>
          <div className="my-auto col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.workflow_items}>
              <div className={styles.item_name}>
                <span>03</span>Design
                <div className={styles.item_icon}>
                  {" "}
                  <i class="fa-regular fa-pen-to-square"></i>
                </div>
              </div>
              <p>
                Create an appealing, intuitive interface with our UI/UX experts.
              </p>
            </div>
          </div>
          <div className="my-auto col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.workflow_items}>
              <div className={styles.item_name}>
                <span>04</span>Develop
                <div className={styles.item_icon}>
                  <i class="fa-regular fa-gears"></i>
                </div>
              </div>
              <p>
                Code to add functionality and backend features with pro
                developers.
              </p>
            </div>
          </div>
          <div className="my-auto col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.workflow_items}>
              <div className={styles.item_name}>
                <span>05</span>Test
                <div className={styles.item_icon}>
                 <i class="fa-regular fa-circle-check"></i>
                </div>
              </div>
              <p>Test, debug, and repeat until its launch-ready.</p>
            </div>
          </div>
          <div className="my-auto col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.workflow_items}>
              <div className={styles.item_name}>
                <span>06</span>Launch &amp; Maintain
                <div className={styles.item_icon}>
                 <i class="fa-regular fa-rocket"></i>
                </div>
              </div>
              <p>Go live and reach users. Adapt as you go.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="m-auto text-center mt-5 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
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
    </div>
  );
}
