import React from "react";
import styles from "./partner_usa.module.scss";

export default function Partner_usa() {
  return (
    <div className={styles.partner_usa}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <div className={styles.partner_content}>
              <h2>
              Partner with Expert <span> Mobile Game Developers</span>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <p>
              At Digitalmindson, we have a team of top mobile game developers
              specialized in using state-of-the-art mobile game development
              tools and engines like Unity, Unreal engine, Lumberyard, etc. Here
              are our achievements in the domain of mobile game development:
            </p>
          </div>
        </div>
        <div className="row h-100 partner_padd">
          <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            <div className={styles.partner_box}>
              <div className={styles.partner_num}>3rd</div>
              <div className={styles.partner_para}>
                <p>
                  Among Top Game Development Companies in 2023 on Rightfirms
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            <div className={styles.partner_box}>
              <div className={styles.partner_num}>4.8</div>
              <div className={styles.partner_para}>
                <p>Average Review Rating on RightFirms</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            <div className={styles.partner_box}>
              <div className={styles.partner_num}>4.8</div>
              <div className={styles.partner_para}>
                <p>Average Review Rating on Clutch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
