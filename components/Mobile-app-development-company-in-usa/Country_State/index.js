"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Country_state.module.scss";

export default function CountryState({ data }) {
  const { heading, subheading, description, statesData } = data;

  return (
    <section className={styles.country_section}>
      <div className="container">

        {/* Heading Section */}
        <div className={styles.heading_wrap}>
          <h2>
            {heading} <span>{subheading}</span>
          </h2>
          <p>{description}</p>
        </div>

        {/* States Grid */}
        <div className={styles.state_grid}>
          {statesData.map((state, index) => (
            <Link href="#" key={index} aria-label={state.name}>
              <div className={styles.state_card}>
                <div className={styles.state_grid_card}>
                  <div className={styles.image_box}>
                    <Image
                      src={state.img}
                      alt={state.name}
                      width={512}
                      height={512}
                      className={styles.state_img}
                    />
                  </div>
                  <h4>{state.name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
