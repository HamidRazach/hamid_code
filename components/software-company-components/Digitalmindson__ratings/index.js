import React from "react";
import styles from "./digital__ratings.module.scss";
import CountUp from "react-countup";

export default function Digital__ratings() {
  return (
    <section className={styles.digital__ratings}>
      <div className="container">
        <div className="row">
          <div className="mt-auto mb-auto rat-outer col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <div className={styles.rat_wrap}>
              <span>
                <CountUp end={50} duration={3} suffix="+" />
              </span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="mt-auto mb-auto rat-outer col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <div className={styles.rat_wrap}>
              <span>
                <CountUp end={5} duration={3} decimals={1} />
              </span>
              <p>Ratings</p>
            </div>
          </div>

          <div className="mt-auto mb-auto rat-outer col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <div className={styles.rat_wrap}>
              <span>
                <CountUp end={7} duration={3} prefix="0" />
              </span>
              <p>Current Major Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
