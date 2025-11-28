import React from "react";
import styles from "./seo_marketing_agency.module.scss";

export default function Seo_marketing_agency() {
  return (
    <section className={styles.voice_services}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <h2>Why Choose Us as Your <span>SEO Marketing Agency</span></h2>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
              <p>
                You must work with the most suitable SEO partner to ensure the
                best growth of your business’s online presence. At TekRevol, we
                can help you develop and implement specific SEO solutions that
                yield tangible outcomes. These values are our driving force,
                which distinguishes us as the right choice for your digital
                transformation and growth.
              </p>
          </div>
        </div>
        <div className="mt-sm-3 mt-md-4 row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 p-0">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_head}>
                      <h5>Proven Track Record</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      These SEO campaigns have always proven a positive impact
                      evidenced by higher rankings and boosted organic traffic
                      for clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 p-0">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_head}>
                      <h5>Data-Driven Approach</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      With the support of data and analytics, we create only the
                      best approaches that will serve your purposes well.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 p-0">
                <div className={styles.voice_service_box} style={{ borderRight: "none" }}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_head}>
                      <h5>Experienced Team</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      Our SEO specialists are result-oriented and have extensive
                      experience and professional knowledge in their work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 p-0">
                <div className={styles.voice_service_box} style={{ borderBottom: "none" }}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_head}>
                      <h5>Transparent Reporting</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      It is our policy to offer comprehensive reports on SEO
                      campaigns’ performance and updates, ensuring you are
                      well-informed about results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 p-0">
                <div className={styles.voice_service_box} style={{ borderBottom: "none" }}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_head}>
                      <h5>Long-Term Success</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      We strive for sustainable development, meaning that all
                      our actions involve both immediate and long-term
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 p-0">
                <div className={styles.voice_service_box} style={{ borderRight: "none" , borderBottom: "none" }}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_head}>
                      <h5>Client-Centric Focus</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      Any goal that you have for your digital marketing strategy
                      becomes our goal as well, and we provide you with constant
                      help.
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
