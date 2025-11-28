import React from "react";
import Image from "next/image";
import styles from "./shopify_choose.module.scss";

export default function Shopify_Why_choose() {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-lg-8 col-md-12">
            <div className={styles.augment_head}>
              <h2>
                Shopify Development Services For{" "}
                <span>Seamless Shopping Experiences</span>
              </h2>
              <p>
                Your success is our commitment because we provide progressive
                development so you can experience excellence in every line of
                code.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 col-12">
            <div className={styles.why_ctext}>
              <h2>
                Experience Immediate Growth With Our {" "}
                <span>
                  Shopify Website Development
                </span>
              </h2>
              <p>
                Embark on a virtual odyssey with our Shopify development
                services, where each click exposes a masterpiece tailored to
                engage and captivate. Unveil a world of possibilities with
                feature-rich functionality that invites exploration, promising
                an unforgettable shopping journey. Witness your brand come to
                life through meticulous customization, fostering an immersive
                experience that resonates with your audience. As the
                orchestrators of online excellence, we provide ongoing support,
                ensuring your website becomes an irresistible destination where
                time stands still, inviting visitors to linger and explore the
                magic we've crafted just for them.
              </p>
              <div className={styles.out_s_text}>
                <ul>
                  <li>
                    Streamline The Purchasing Journey For A Smooth And Efficient
                    Checkout.
                  </li>
                  <li>
                    Stay Ahead Of Industry Trends With Cutting-Edge Solutions In
                    Your Shopify Store.
                  </li>
                  <li>
                    Optimize Your Shopify Store For Speed And User-Friendliness.
                  </li>
                  <li>
                    Develop With Scalability To Ensure Seamless Growth Aligned
                    With Your Business.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-12">
            <div className={styles.why_img}>
              <Image
                src="/images/Shopify_services/Computer.webp"
                width={640}
                height={360}
                className="img-fluid"
                alt="Digitalmindson"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
