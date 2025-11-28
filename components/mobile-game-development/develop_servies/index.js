import React from "react";
import styles from "./develop_servies.module.scss";
import Image from "next/image";

export default function Develop_servies() {
  return (
    <section
      className={styles.develop_servies}
      style={{
        backgroundImage:
          'url("/images/game-developement/consider-mobile-app-back.webp")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-lg-8 col-xl-8 m-auto text-center">
            <h2>When To Consider <span>Our Mobile Game Development</span> Services</h2>
            <p>
              We offer comprehensive game app solutions tailored to the unique
              needs of businesses including startups to large-scale enterprises.
              We can engineer and deliver your product in 12 to 18 months.
            </p>
          </div>
        </div>
        <div className="row services_develop_container">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className={styles.services_develop_box}>
              <div className={styles.main_title}>
                <div className={styles.tit}>
                  Launching a New Game
                </div>
                <div className={styles.icon}>
                  <Image
                    src="/images/game-developement/icon_01.webp"
                    alt="digitalmindson"
                    className="img-fluid"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <p>
                  If you're an aspiring game entrepreneur with a groundbreaking
                  idea for the next big mobile game but lack the technical
                  expertise to bring it to life, consider our game app
                  development services. We specialize in turning innovative
                  concepts into fully functional, market-ready games.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className={styles.services_develop_box}>
              <div className={styles.main_title}>
                <div className={styles.tit}>
                  Educational Institutions Going Digital
                </div>
                <div className={styles.icon}>
                  <Image
                    src="/images/game-developement/icon_02.webp"
                    alt="digitalmindson"
                    className="img-fluid"
                    width={106}
                    height={102}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <p>
                  We can create engaging educational games that transform
                  traditional learning into an interactive experience. Our
                  gaming solutions make learning enjoyable and effective for
                  students of all ages, ensuring they stay motivated and engaged
                  throughout their educational journey.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className={styles.services_develop_box}>
              <div className={styles.main_title}>
                <div className={styles.tit}>
                  Existing Apps in Need of Gamification
                </div>
                <div className={styles.icon}>
                  <Image
                    src="/images/game-developement/icon_03-player.webp"
                    alt="digitalmindson"
                    className="img-fluid"
                    width={130}
                    height={66}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <p>
                  When your existing app could benefit from gamification
                  elements to boost user engagement and retention, our expertise
                  comes into play. We can seamlessly integrate game features
                  into your app, transforming it into an interactive and
                  enjoyable experience for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
