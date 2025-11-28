import React from "react";
import styles from "./developement_game.module.scss";
import Link from "next/link";

export default function Game_development() {
  return (
    <section
      className={styles.streamline_cloud}
      style={{
        backgroundImage:
          'url("/images/game-developement/best-game-cta.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-12 col-12">
            <h2>
              Build Your Dream with <span>Our Game Development</span> Services!
            </h2>
            <p>
              At Digitalmindson, we turn dreams into sensational gaming realities that
              entertain and engage players with unforgettable gaming
              experiences.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Game Project">
                Game Project
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
