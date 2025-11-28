import React from "react";
import styles from "./shopify_rewrite.module.scss";
import Image from "next/image";

export default function ShopifyRewrite() {
  return (
    <section className={styles.rewrite_sec}>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_img}>
              <div className={styles.small}>Crafting Software That Works</div>
              <h2>
                Making Technology Work For You Through{" "}
                <span>Shopify Development Services</span>
              </h2>
              <Image
                src="/images/Shopify_services/Shopify-website-01.png"
                className={styles.img_fluid}
                alt="Binate Digital"
                width={500}
                height={400}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
            <div className={styles.rewrite_text}>

              <div className={styles.rewrite_div}>
                <h5>Social Media Integration</h5>
                <p>
                  Extend your reach and connect with your audience on social
                  media seamlessly. Our Shopify apps can integrate with popular
                  social platforms, allowing for easy sharing of products,
                  promotions, and user-generated content, fostering a stronger
                  online community.
                </p>
              </div>
              <div className={styles.rewrite_div}>
                <h5>User-Friendly Admin Interface</h5>
                <p>
                  Manage your Shopify store effortlessly with an intuitive admin
                  interface. Our apps come with user-friendly dashboards, making
                  it easy for you to update content, track performance, and make
                  necessary adjustments without the need for extensive technical
                  knowledge.
                </p>
              </div>
              <div className={styles.rewrite_div}>
                <h5>Compliance With Industry Standards</h5>
                <p>
                  Ensure your Shopify store adheres to industry standards and
                  regulations. Our apps are developed with compliance in mind,
                  providing peace of mind in terms of data protection, privacy,
                  and other legal considerations and helping you build trust
                  with your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
