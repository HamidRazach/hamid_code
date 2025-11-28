import React from "react";
import styles from "./shopify_craft.module.scss";
import Link from "next/link";

export default function ShopifyCraft() {
  return (
    <section className={styles.Craft_sec}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9 col-md-12 col-12">
            <header>
              <h2>
                Climb The E-commerce Ladder With{" "}
                <span className={styles.gardient_text}>
                  Expert Shopify Custom Development
                </span>
              </h2>
            </header>

            <article>
              <p>
                Get a distinctive look for your Shopify store. With a modern and
                responsive online storefront, you can create new sales
                opportunities. Together, our talented designers and engineers
                create aesthetically gorgeous and incredibly practical themes
                that work flawlessly with your Shopify store.
              </p>

              <p>
                Experience our Shopify custom development services for unmatched
                innovation and customized solutions. Our expertise lies in
                creating custom e-commerce solutions that perfectly match your
                brand and business objectives. Using modern technologies, our
                team of talented developers creates unique functions that make
                your Shopify store stand out in a crowded online market. Our
                custom development goes above and beyond the standard, providing
                you with a scalable and adaptable platform that grows with your
                business—from distinctive themes to unique functionality. Put
                your trust in us to bring your concepts to life and turn your
                website into a vibrant, interesting marketplace.
              </p>
            </article>

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
