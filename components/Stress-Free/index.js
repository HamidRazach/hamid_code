import React from "react";
import styles from "./Stree_from.module.scss";

export default function Stree_from() {
  return (
    <section
      className={styles.roadmap_software + " text_white"}
      style={{
        backgroundImage: 'url("/images/backgrounds/stress-free-back.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-12">
            <h2>
              Here's How We Deliver Results <span>Stress-Free!</span>
            </h2>
            <p>
              Join the ranks of our successful clients by relying on our
              customized digital marketing strategies. Here’s how we deliver
              measurable results through a proven, data-driven approach for
              sustainable growth and continuous optimization.
            </p>
          </div>

          <div className="mt-3 mt-md-4 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.roadmap_container}>
              <div className={styles.roadmap}>
                {/* Step 01 */}
                <div className={styles.roadmap_box + " left"}>
                  <div className={styles.roadmap_flex}>
                    <div className={styles.left_div}>
                      <div className={styles.num}>01</div>
                      <div className={styles.content}>
                        <h5>Initial Strategy Consultation</h5>
                        <p>
                          Kick off with a deep dive into your business goals and
                          target audience, setting the stage for a strategy that
                          truly resonates.
                        </p>
                      </div>
                    </div>
                    <div className={styles.icon}>
                     <i class="fa-regular fa-lightbulb"></i>
                    </div>
                  </div>
                </div>

                {/* Step 02 */}
                <div className={styles.roadmap_box + " right"}>
                  <div className={styles.roadmap_flex}>
                    <div className={styles.left_div}>
                      <div className={styles.num}>02</div>
                      <div className={styles.content}>
                        <h5>Comprehensive Audit & Analysis</h5>
                        <p>
                          Uncover hidden opportunities with thorough SEO, SEM,
                          and content audits, pinpointing exactly where
                          improvements can be made.
                        </p>
                      </div>
                    </div>
                    <div className={styles.icon}>
                     <i class="fa-regular fa-clipboard-check"></i>
                    </div>
                  </div>
                </div>

                {/* Step 03 */}
                <div className={styles.roadmap_box + " left"}>
                  <div className={styles.roadmap_flex}>
                    <div className={styles.left_div}>
                      <div className={styles.num}>03</div>
                      <div className={styles.content}>
                        <h5>Customized Campaign Planning</h5>
                        <p>
                          Craft bespoke marketing campaigns that align with your
                          unique business objectives, driven by insightful data.
                        </p>
                      </div>
                    </div>
                    <div className={styles.icon}>
                     <i class="fa-regular fa-chart-line"></i>
                    </div>
                  </div>
                </div>

                {/* Step 04 */}
                <div className={styles.roadmap_box + " right"}>
                  <div className={styles.roadmap_flex}>
                    <div className={styles.left_div}>
                      <div className={styles.num}>04</div>
                      <div className={styles.content}>
                        <h5>Execution & Implementation</h5>
                        <p>
                          Bring your strategy to life with precision-targeted
                          tactics and expert technical execution.
                        </p>
                      </div>
                    </div>
                    <div className={styles.icon}>
                      <i class="fa-regular fa-gears"></i>
                    </div>
                  </div>
                </div>

                {/* Step 05 */}
                <div className={styles.roadmap_box + " left"}>
                  <div className={styles.roadmap_flex}>
                    <div className={styles.left_div}>
                      <div className={styles.num}>05</div>
                      <div className={styles.content}>
                        <h5>Continuous Monitoring & Optimization</h5>
                        <p>
                          Stay ahead of your competitors by tracking performance
                          metrics and fine-tuning strategies in real-time for
                          optimal results.
                        </p>
                      </div>
                    </div>
                    <div className={styles.icon}>
                    <i class="fa-regular fa-arrows-rotate"></i>
                    </div>
                  </div>
                </div>

                {/* Step 06 */}
                <div className={styles.roadmap_box + " right"}>
                  <div className={styles.roadmap_flex}>
                    <div className={styles.left_div}>
                      <div className={styles.num}>06</div>
                      <div className={styles.content}>
                        <h5>Reporting & Sustainable Growth</h5>
                        <p>
                          Receive detailed insights and enjoy ongoing growth
                          with our adaptive marketing solutions, ensuring your
                          success is both measurable and sustainable.
                        </p>
                      </div>
                    </div>
                    <div className={styles.icon}>
                   <i class="fa-regular fa-chart-pie"></i>
                    </div>
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
