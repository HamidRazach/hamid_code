import React from "react";
import styles from "./shopifychannel.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Shopify_channel() {
  return (
    <section className={styles.web_visibility}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center resp_order">
            <Image
              src="/images/Shopify_services/Group-1-3.png"
              alt="web development company"
              width={591}
              height={418}
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-auto">
            <h2>
              Shopify Website Development Services For{" "}
              <span>E-Commerce Success</span>
            </h2>
            <p>
              We go beyond just creating online stores with our Shopify
              development services. We architect digital experiences that
              captivate and convert. Whether you need responsive design,
              streamlined checkout processes, or specialized functionalities,
              our team is dedicated to tailoring Shopify solutions that align
              seamlessly with your business goals. From setting up a robust
              online presence to ongoing support and optimization, we offer
              end-to-end services that empower you to thrive in the competitive
              e-commerce landscape. Partner with us to unlock the full potential
              of your Shopify store and leave a lasting impression on your
              customers.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Free Consultation">
               Free Consultation
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
