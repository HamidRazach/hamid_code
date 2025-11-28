import React from "react";
import styles from "./seo_strategy.module.scss";
import Link from "next/link";

export default function Seo_strategy() {
  return (
    <section className={styles.trusted_ecommerce_web}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-8 col-xl-8 col-lg-9 col-md-10 col-12">
            <h2>
              Why is SEO Strategy the Key to the <span>Digital Growth</span> of
              Your Business?
            </h2>
            <p>
              In this regard, having a proper SEO approach is crucial for any
              business when it comes to <Link
                href="/digital-marketing-services"
                target="_blank"
                className={styles.link_para}
              >
                digital marketing
              </Link> strategies. Not only does it help you get more internet exposure
              but it also ensures that your brand is circulating effectively in
              a constantly changing market.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="m-auto col-xxl-11 col-xl-11 col-lg-12 col-md-12 col-12">
            <div className="mt-3 mt-md-4 row">
              <div className="mb-4 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>01</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Improves Visibility &amp; Rankings</h5>
                    <p>
                      Effective SEO ensures that your website ranks high with
                      search engines hence enabling the potential customers to
                      find you easily. With a higher ranking of a website, it is
                      easy to target a specific niche audience and thus
                      eliminate the competition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>02</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Drives Web Traffic</h5>
                    <p>
                      SEO assists you in ranking your site for better organic
                      traffic because it focuses on the right keywords and
                      content. The increased traffic to your site also enhances
                      the opportunity to convert visitors into customers, thus,
                      fostering sustainable traffic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-md-0 mb-4 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>03</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Shows Authority</h5>
                    <p>
                      An effective SEO plan and strategy position your
                      business as the go-to source of information on products
                      and services within a particular market. By regularly
                      occupying the first pages and offering relevant content,
                      you gain the trust of the audience and strengthen its
                      recognition of your competence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                <div className={styles.trusted_ecomm_box}>
                  <div className={styles.ecomm_title}>04</div>
                  <div className={styles.ecomm_box_content}>
                    <h5>Enhances Customer Experience</h5>
                    <p>
                      One of the important things to understand is that SEO is
                      not only a method of working with search engines, but also
                      with users. As such, aspects like site speed and mobile
                      responsiveness improve the overall experience of site
                      visitors, which in turn can improve conversion rates and
                      satisfaction levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
