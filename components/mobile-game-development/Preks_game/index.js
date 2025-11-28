import React from "react";
import styles from "./preks_game.module.scss";

export default function Preks_game() {
  return (
    <section className={styles.preksgame}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12">
            <h2>
              Perks Of <span>Working</span> With A <span>Proficient</span> Game
              App Development Company
            </h2>
            <p>
              Collaborating with Digitalmindson streamlines your game idea and turns
              it into a living and breathing masterpiece. We carefully handle
              every aspect, ensuring a seamless journey and providing you with a
              top-tier experience.
            </p>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12">
            <div className={styles.preks_box}>
              <div className={styles.preks_item}>
                <h6>
                  Utilization of Modern Technologies <span>01</span>
                </h6>
                <p>
                  Innovating your business by utilizing the latest technologies
                  for game app development with robust features.
                </p>
              </div>
              <div className={styles.preks_item}>
                <h6>
                  Scalability and Flexibility Options <span>02</span>
                </h6>
                <p>
                  Scale up your game application based on the increasing
                  requirements with our flexible development approach.
                </p>
              </div>
              <div className={styles.preks_item}>
                <h6>
                  Absolute Process Transparency <span>03</span>
                </h6>
                <p>
                  Stay consistently informed about the ongoing procedures by
                  utilizing our project management tools, taking into account
                  all relevant insights.
                </p>
              </div>
              <div className={styles.preks_item}>
                <h6>
                  Cost-Effective Pricing Models Options <span>04</span>
                </h6>
                <p>
                  Get the right estimate for your project from our app cost
                  calculator formulated with cost-effective pricing models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
