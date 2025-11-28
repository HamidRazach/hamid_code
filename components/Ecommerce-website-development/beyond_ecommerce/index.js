"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./beyond_ecommerce.module.scss";

const accordionData = [
  {
    id: 1,
    title: "Streamlined Shopping Carts",
    content:
      "We can help any ecommerce website development company build profitable online operations with unique store management, frequent shopper programs, discounted pricing, catalog management, and secure transactions with SSL to CRM integration.",
  },
  {
    id: 2,
    title: "Secure Payment Gateways",
    content:
      "The top ecommerce companies in the world make it easy for customers to buy, and we strive to deliver the same convenience. We have partnered with payment providers to offer tailor-made payment solutions.",
  },
  {
    id: 3,
    title: "Digital Marketing and SEO",
    content:
      "Search engine optimization of your online store is the key to traffic and profitability. Our SEO and marketing solutions drive conversions and ensure your eCommerce website realizes its full potential.",
  },
  {
    id: 4,
    title: "Personalized Customer Support Solutions",
    content:
      "Our developers create AI chatbots and support solutions that enhance satisfaction and loyalty. Implement live chat, email support, and knowledge bases to improve customer relationships.",
  },
];

export default function Beyond_Ecommerce() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.flutter_app_choice}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-12">
            <h2>
              Exceptional Services <span>Beyond Ecommerce Development</span>
            </h2>
            <p>
              We don't just build engaging and easy-to-use websites; our
              comprehensive services go beyond to support your ecommerce
              business. Our end-to-end design and development services cover
              everything your business will ever need to grow and succeed.
            </p>
          </div>
        </div>

        <div className="mt-3 mt-md-5 row">
          <div className="my-auto order-2 order-md-1 col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-12">
            <Image
              src="/images/ecommerce-web/beyond-ecommerce.webp"
              alt="digitalmindon_web"
              width={500}
              height={500}
              className="img-fluid"
            />
          </div>

          <div className="order-1 order-md-2 mb-4 mb-md-0 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <div className={styles.customAccordion}>
              {accordionData.map((item, index) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${
                    openIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.accordionHeader}>
                    <h3>{item.title}</h3>
                    <span className={styles.icon}>
                      {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className={styles.accordionContent}>
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
