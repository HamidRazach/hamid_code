import React from "react";
import styles from "./why_choose.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Why_choose() {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className="row">
          <div className="my-auto mb-4 mb-md-0  col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <h2>
              Why <span>Choose Digitalmindson</span> As Your Game App Development
              Company?
            </h2>
            <p>
              When you opt for our game app development from Digitalmindson, you're
              choosing a team of experts ready to turn your ideas into
              successful game projects.
            </p>
            <p>
              Our dynamic team of skilled developers, designers, and strategists
              works collaboratively to turn your gaming aspirations into
              exceptional realities.
            </p>
            <p>
              Our user-centric approach involves careful attention to detail in
              game design, creating intuitive interfaces that captivate and
              engage players from the first interaction.
            </p>
            <p>
              Moreover, we keep you informed at every stage, from project
              initiation to delivery, ensuring that your vision aligns
              seamlessly with the evolving development process. Our diverse
              portfolio spans various genres, showcasing our versatility and
              ability to create games that cater to a broad spectrum of
              audiences.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Free Consultation">
                Free Consultation
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 my-auto text-center">
            <Image
              src="/images/game-developement/why-choose-game-updated.webp"
              alt="game development company"
              width={385}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
