import React from "react";
import styles from "./game_technologyuse.module.scss";
import Image from "next/image";

export default function Game_technologyuse() {
  return (
    <section
      className={styles.technologyuse}
      style={{
        backgroundImage:
          'url("/images/game-developement/technology-latest-back.webp")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-9 m-auto text-center">
            <h2>
              Tools and Technologies We Use for{" "}
              <span>Mobile Game Development</span>
            </h2>
            <p>
              Our mobile game app developers utilize the latest technologies to
              create a robust game.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-5 row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className={styles.tech_game_main}>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={75}
                  src="/images/game-developement/firebase-tech.webp"
                  alt="firebase"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/unreal-engine-techwebp.webp"
                  alt="unreal-engine"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/azure-tech.webp"
                  alt="azure"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/apple-icon-tech.webp"
                  alt="apple"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/android-tech.webp"
                  alt="android"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/unity-tech.webp"
                  alt="unity"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/google-cloud-tech.webp"
                  alt="google-cloud"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/c-programming-tech.webp"
                  alt="c-programming-tech"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/amazon-web-tech.webp"
                  alt="amazon"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/html-5-tech.webp"
                  alt="html-5"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/google-assistance-tech.webp"
                  alt="google-assistance"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/swift-tech.webp"
                  alt="swift-tech"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/gcs-tech.webp"
                  alt="gcs-tech"
                  className="img-fluid"
                />
              </div>
              <div className={styles.tech_game_item}>
                <Image
                width={100}
                height={1000}
                  src="/images/game-developement/cryengine-tech.webp"
                  alt="cryengine"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
