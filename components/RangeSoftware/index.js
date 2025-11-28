"use client";
import React from "react";
import styles from './wide_range.module.scss';

export default function RangeSoftware() {
  return (
    <section
      className={styles.wide_range_software}
      style={{
        backgroundImage:
          'url("images/backgrounds/wide-range-back.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-7 col-xl-7 col-lg-8 col-md-9 col-12">
            <h2>
              We Specialize in a Wide <span>Range of Software</span> Solutions
            </h2>
            <p>
              From web portals to enterprise systems, Digitalmindson is a top-tier
              software development service provider offering a vast array of
              software solutions that solve complex challenges and meet business
              needs.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.wide_list}>
              <ul>
                <li>Product Management Software</li>
                <li>Inventory Management Software</li>
                <li>Online Marketplace</li>
                <li>ERP Software</li>
                <li>CMS Software</li>
                <li>Restaurant Management Software</li>
                <li>Cab and Rideshare Services Software</li>
                <li>Payment Processing Solutions</li>
                <li>SCM Software</li>
                <li>Asset Management Software</li>
                <li>Food Delivery Platforms</li>
                <li>Project Management Software</li>
                <li>HRM Software</li>
                <li>Dating Platforms</li>
                <li>Social Networking Solutions</li>
                <li>Data Analytics Platforms</li>
                <li>Cybersecurity Software</li>
                <li>Fitness Platforms</li>
                <li>Learning Management Systems</li>
                <li>Real Estate Management Software</li>
                <li>CRM Software</li>
                <li>Job Portals</li>
                <li>Content Creation Systems</li>
                <li>Fleet Management Software</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
