"use client";
import React from "react";
import styles from "./Ecommerce_Domain.module.scss";

export default function Ecommerce_Domain() {
  const domainList = [
    {
      label: "Fashion & Apparel",
      svg: (
      <i class="fa-solid fa-shirt"></i>

      ),
    },
    {
      label: "Grocery",
      svg: (
    <i class="fa-solid fa-cart-shopping"></i>
      ),
    },
    {
      label: "Electronics & Gadgets",
      svg: (
     <i class="fa-solid fa-plug"></i>
      ),
    },
    {
      label: "Healthcare",
      svg: (
        <i class="fa-solid fa-heart-pulse"></i>
      ),
    },
    {
      label: "Beauty",
      svg: (
     <i className="fa-solid fa-spa"></i>
      ),
    },
    {
      label: "Education",
      svg: (
     <i class="fa-solid fa-graduation-cap"></i>
      ),
    },
    {
      label: "Home Decor",
      svg: (
        <i class="fa-solid fa-lightbulb"></i>
      ),
    },
    {
      label: "Sports & Fitness",
      svg: (
       <i class="fa-solid fa-dumbbell"></i>
      ),
    },
  ];

  return (
    <section className={styles.domain_diversity}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 text-center">
            <h2>
              Expertise Across <span>eCommerce Industries</span>
            </h2>
            <p>
              At Digitalmindson, we offer specialized eCommerce web development
              services across top industries. Our business analysts and product
              planners use in-depth industry knowledge to refine your product
              strategy for a successful launch. From retail to healthcare, we
              have the technical prowess to make your eCommerce strategy and
              product successful.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
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
