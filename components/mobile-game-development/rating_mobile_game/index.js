import React from "react";
import styles from "./rating_game.module.scss";
import Image from "next/image";

export default function Rating_mobile_game() {
  return (
    <div
      className={styles.rating_usa}
      style={{
        backgroundImage:
          'url("images/game-developement/game-development-rating.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="mb-xl-0 mb-md-4 mb-0 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
              <Image src="/images/mobile-game-development/Game-developers.png" alt="icon" width={70} height={70} />
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>10+</div>
                <p>Game developers</p>
              </div>
            </div>
          </div>
          <div className="mb-xl-0 mb-md-4 mb-0 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <Image src="/images/mobile-game-development/Successful-game-launches.png" alt="icon" width={70} height={70} />
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>10+</div>
                <p>Successful game launches</p>
              </div>
            </div>
          </div>
          <div className="ps-xl-4 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <Image src="/images/mobile-game-development/Years-of-industry-experience.png" alt="icon" width={70} height={70} />
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>3+</div>
                <p>Years of industry experience</p>
              </div>
            </div>
          </div>
          <div className="ps-xl-5 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <Image src="/images/mobile-game-development/Satisfied-clients.png" alt="icon" width={70} height={70} />
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>50+</div>
                <p>Satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
