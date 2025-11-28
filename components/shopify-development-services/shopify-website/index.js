import React from "react";
import styles from "./shopify_website.module.scss";
import Image from "next/image";

export default function Shopify_website() {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 col-12">
            <div className={styles.why_img}>
              <Image
                src="/images/Shopify_services/shop.png"
                width={640}
                height={360}
                className="img-fluid"
                alt="Binate Digital"
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-12">
            <div className={styles.why_ctext}>
              <h2>
                Shopify App Development:{" "}
                <span>Streamlining Workflows, Improving Results</span>
              </h2>
              <p>
                Our Shopify app development services offer a seamless and
                customized solution for your e-commerce needs. With expertise in
                Shopify's platform, we create apps that upgrade the
                functionality and performance of your online store. Our team of
                skilled developers understands the complexities of Shopify's
                environment, allowing us to develop coherent and visually
                attractive apps. From blending new features with existing ones
                to optimizing existing ones, we guarantee an easy shopping
                experience for your customers. With our Shopify app development,
                you can unlock the full potential of your online store and stay
                ahead in the competitive e-commerce market.
              </p>
              <div className={styles.out_s_text}>
                <ul>
                  <li>Seamless Integration</li>
                  <li>Scalability And Growth</li>
                  <li>Enhanced Functionality</li>
                  <li>Customized User Experiences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
