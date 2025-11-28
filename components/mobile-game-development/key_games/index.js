import React from "react";
import styles from "./key_games.module.scss";
import Image from "next/image";

export default function Key_games() {
  return (
    <section
      className={styles.key_games}
      style={{ background: "#F8F8FB" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.key_games_main}>
              <div className={styles.key_games_item}>
                <div className={styles.key_games_content}>
                  <h2>
                    Designing Cross-Screen <span>Gaming Magic</span> at Our
                    Mobile Game Development Studio
                  </h2>
                  <p>
                    At Digitalmindson, we design high-performance games for every
                    screen that run smoothly across platforms so you can target
                    players everywhere.
                  </p>
                </div>
              </div>
              <div className={styles.key_games_item}>
                <div className={styles.key_games_img}>
                  <Image src="/images/game-developement/key-games-img.webp" alt="3d game development services" className="img-fluid" width={1000} height={503} />
                </div>
              </div>
              <div className={styles.key_games_item}>
                <dsiv className={styles.key_games_list}>
                  <h4 style={{ color: "#f47a14" }}>Web Gaming</h4>
                  <p>
                    Creating engaging web-based games that deliver excitement
                    and interactivity directly through browsers, anytime,
                    anywhere.
                  </p>
                  <h4 style={{ color: "#f47a14" }}>Mobile Gaming</h4>
                  <p>
                    Designing intuitive mobile games that offer seamless
                    experiences and fun, perfect for gaming on the go.
                  </p>
                  <h4 style={{ color: "#f47a14" }}>VR Gaming</h4>
                  <p>
                    We build immersive VR experiences that transport players
                    into captivating worlds, redefining the boundaries of
                    gaming.
                  </p>
                  <h4 style={{ color: "#f47a14" }}>TV Gaming</h4>
                  <p>
                    Developing console-quality games for TV that enhance family
                    entertainment and bring friends together for unforgettable
                    moments.
                  </p>
                </dsiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
