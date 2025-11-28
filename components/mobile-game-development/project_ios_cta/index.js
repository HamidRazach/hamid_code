import React from "react";
import styles from "./Project_ios.module.scss";
import Link from "next/link";
export default function Project_ios_cta() {
  return (
    <section className={styles.game_idea_bg}>
      <div className="h-100 container">
        <div
          className={styles.project_cta_box_wrap}
          style={{
            backgroundImage:
              'url("images/game-developement/game-idea-bg.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-100 align-content-center row">
            <div className="my-auto col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12">
              <h2>
                Let’s Build <span>the Next Big </span> Game Together
              </h2>
              <p>
                Dream it, build it, play it. At digitalmindson, our mobile game
                development studio transforms your wildest game ideas into epic
                experiences. Ready to create the game of the future?
              </p>
              <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Create Game App">
                Create Game App
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
