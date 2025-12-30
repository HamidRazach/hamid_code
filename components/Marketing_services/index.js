import React from "react";
import Image from "next/image";
import styles from "./Difference_markting.module.scss";

export default function Difference_markting() {
  return (
    <section className={styles.difference_markting}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12">
            <h2>
              See the <span>Difference We Can Make</span> with Our Digital
              Marketing Services
            </h2>
            <p>
              Your business deserves more than one-size-fits-all solutions and
              we are here to deliver it. At Digitalmindson, we understand your
              business goals and deliver customized digital marketing services
              designed to unlock your growth potential and maximize ROI.
            </p>
            <Image
              src="/images/backgrounds/diffrence-marktin-img.webp"
              alt="diffrence-markting"
              width={690}
              height={411}
            />
          </div>
          <div className="offset-xl-1 col-xxl-6 col-xl-6 col-lg-7 col-md-12 col-12">
            <div className={styles.difference_scroll}>
              <div className={styles.digital_difference_main}>
                {/* 01 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>01</div>
                    <div className={styles.digital_num_box}>
                      <i class="fa-regular fa-lightbulb"></i>
                      <h5>A Strategy Built Around Your Business</h5>
                      <p>
                        We design every roadmap from scratch using your unique
                        goals, baseline, and market opportunities. Our
                        strategies are data-driven, ensuring your business
                        receives the tailored attention it deserves.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 02 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>02</div>
                    <div className={styles.digital_num_box}>
                     <i class="fa-regular fa-handshake"></i>
                      <h5>Services That Work Hand-in-Hand</h5>
                      <p>
                        At Digitalmindson, no marketing channel works in isolation.
                        Every campaign aligns seamlessly to create a unified
                        strategy, driving consistent results across the entire
                        marketing funnel.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 03 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>03</div>
                    <div className={styles.digital_num_box}>
                    <i class="fa-regular fa-users"></i>
                      <h5>A Dedicated Team of Experts</h5>
                      <p>
                        With a team of specialized professionals including
                        dedicated account managers, we function as your
                        strategic growth partners focused solely on achieving
                        your business objectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 04 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>04</div>
                    <div className={styles.digital_num_box}>
                       <i class="fa-regular fa-award"></i>
                      <h5>Long-Term Commitment to Your Success</h5>
                      <p>
                        With a 98% client retention rate, our experts are here
                        for the long haul. We’re committed to deliver digital
                        marketing solutions aimed at your sustained growth and a
                        lasting partnership.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 05 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>05</div>
                    <div className={styles.digital_num_box}>
                     <i className="fa-regular fa-chart-line tracking-icon"></i>
                      <h5>Transparency Through Performance Tracking</h5>
                      <p>
                        Your custom dashboard consolidates data from all
                        channels, giving you clear insights into campaign
                        performance. Weekly calls and monthly meetings ensure
                        continuous, transparent updates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 06 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>06</div>
                    <div className={styles.digital_num_box}>
                      <i class="fa-regular fa-arrow-trend-up"></i>
                      <h5>Results You Can See And Measure</h5>
                      <p>
                        From conversions to ROI, our digital marketing solutions
                        are measurable and impactful. We help businesses achieve
                        real, tangible success with tried-and-tested
                        methodologies.
                      </p>
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
