import React from "react";
import Image from "next/image";
import styles from "./Ecommerce_solutions.module.scss";

export default function Ecommerce_solutions() {
  return (
    <section className={styles.difference_markting}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12">
            <h2>
              Ecommerce Solutions that <span> Digital Minds On </span> Offers
            </h2>
            <p>
              We design custom eCommerce platforms that accommodate a variety of
              business models. Launching a new store or growing an existing one,
              our capabilities guarantee reliability, flexibility, and long-term
              viability.
            </p>
            <Image
              src="/images/ecommerce-web/ecommerce-solutions.webp"
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
                      <div class={styles.num_box}>01</div>
                      <h5>Microservices-Based eCommerce</h5>
                      <p>
                        We develop modular, scalable architectures that allow
                        businesses to scale quickly while maintaining high
                        performance and streamlined operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 02 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>02</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>02</div>
                      <h5>Online Multistore</h5>
                      <p>
                        Our solutions support multi-brand, multi-region
                        eCommerce management with centralized control for
                        product catalogs, pricing, and customer experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 03 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>03</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>03</div>
                      <h5>Online Marketplaces</h5>
                      <p>
                        We build feature-rich marketplaces that facilitate
                        smooth transactions between sellers and buyers while
                        ensuring secure payment processing and order
                        fulfillment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 04 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>04</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>04</div>
                      <h5>Web Portals</h5>
                      <p>
                        From vendor management to product catalogs, our
                        ecommerce website development services include
                        developing portals that improve business workflows and
                        enhance customer engagement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 05 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>05</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>05</div>
                      <h5>Headless Commerce</h5>
                      <p>
                        Our headless commerce offerings allow businesses to
                        build deeply customized, API-first shopping experiences
                        on web, mobile, and new digital touchpoints.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 06 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>06</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>06</div>
                      <h5>Progressive Web Apps (PWA)</h5>
                      <p>
                        PWAs deliver fast, app-like experiences on mobile
                        devices with the ease of access provided by traditional
                        websites, enabling businesses to drive maximum
                        engagement.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 07 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>06</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>07</div>
                      <h5>B2C eCommerce</h5>
                      <p>
                        We create visually compelling and conversion-driven B2C
                        online stores that ensure an enjoyable shopping
                        experience for end users.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 08 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>08</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>08</div>
                      <h5>B2B eCommerce</h5>
                      <p>
                        Our B2B solutions simplify bulk ordering, custom
                        pricing, and workflow automation, helping businesses
                        manage transactions efficiently.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 09 */}
                <div className={styles.digital_item}>
                  <div className={styles.digital_flex}>
                    <div className={styles.digital_num}>09</div>
                    <div className={styles.digital_num_box}>
                      <div class={styles.num_box}>09</div>
                      <h5>Subscription-Based eCommerce</h5>
                      <p>
                        We develop recurring revenue models with automated
                        billing, personalized subscription options, and seamless
                        renewal processes to retain customers.
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
