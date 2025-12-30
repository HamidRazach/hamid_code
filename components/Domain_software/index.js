"use client";
import React from "react";
import styles from "./Domain.module.scss";

export default function DomainSoftware() {
  const domainList = [
    {
      label: "Healthcare",
      svg: (
      <i class="fa-solid fa-heart-pulse"></i>
      ),
    },
    {
      label: "Banking",
      svg: (
     <i class="fa-solid fa-building-columns"></i>
      ),
    },
    {
      label: "Insurance",
      svg: (
     <i class="fa-solid fa-shield-check fa-2x"></i>
      ),
    },
    {
      label: "Lending",
      svg: (
     <i class="fa-solid fa-hand-holding-dollar"></i>
      ),
    },
    {
      label: "Investment",
      svg: (
    <i class="fa-regular fa-hand-holding-dollar"></i>

      ),
    },
    {
      label: "Retail",
      svg: (
    <i class="fa-regular fa-store"></i>
      ),
    },
    {
      label: "Manufacturing",
      svg: (
      <i class="fa-regular fa-gear"></i>

      ),
    },
    {
      label: "Oil & Gas",
      svg: (
        <i class="fa-solid fa-droplet fa-2x"></i>
      ),
    },
    {
      label: "Engineering & Construction",
      svg: (
     <i class="fa-regular fa-helmet-safety"></i>
      ),
    },
    {
      label: "Professional services",
      svg: (
      <i class="fa-regular fa-briefcase"></i>
      ),
    },
    {
      label: "Logistics & Transportation",
      svg: (
     <i class="fa-regular fa-truck-fast"></i>
      ),
    },
    {
      label: "Telecoms",
      svg: (
      <i class="fa-regular fa-tower-cell"></i>
      ),
    },
  ];

  return (
    <section className={styles.domain_diversity}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 text-center">
            <h2>
              Proven <span>Expertise</span> Across Diverse Fields
            </h2>
            <p>
              Our diverse industry experience enables us to offer valuable
              insights and deliver effective, customized solutions to our
              clients.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-12 col-xl-9 mx-auto text-center">
            <div className={styles.domain_main}>
              {domainList.map((item, index) => (
                <div key={index} className={styles.domain_item}>
                  <div className={styles.domain_content}>
                    {item.svg}
                    <h6>{item.label}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
