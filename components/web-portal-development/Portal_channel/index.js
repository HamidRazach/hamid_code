import React from "react";
import Link from "next/link";
import styles from "./Portal_channel.module.scss";

export default function WebPortal() {
  return (
    <div className={styles.Robustand_section}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
            <h2>
              Our Top-notch <span>Web Portal Development</span>
              {""} Services
            </h2>
            <p>
              We at Digitalmindson are focused on building effective and
              reliable web portals that will transform your business
              environment. Our high-quality services guarantee smooth
              transitions and increased efficiency in different fields.
            </p>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text=" Talk to Our Experts">
                 Talk to Our Experts
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-7 col-xl-6 col-xxl-6 offset-xl-1">
            <div className={styles.robustscroll}>
              <div className={styles.robust_box}>
                <div className={styles.robust_content}>
                  <h4>B2B Web Portals</h4>
                  <p>
                    The B2B web portals we develop allow for smooth interactions
                    between enterprises of different types and ensure the
                    confidentiality of business processes. Our portals have
                    solutions such as real-time data sharing, analytics, and
                    integration tools that ensure a smooth flow of business
                    transactions and relations.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Customer Web Portals</h4>
                  <p>
                    Customer web portals built by Digitalmindson are very
                    customer-oriented and focused on offering you an individual
                    approach with quick access to the necessary information, and
                    resources to solve the issue independently. These portals
                    improve customer experience and satisfaction by offering an
                    efficient and effective user experience.
                  </p>
                </div>

                <div className={styles.robust_content}>
                  <h4>Community Web Portals</h4>
                  <p>
                    Our community web portals enable interactions and
                    participation in the community of the people. These portals
                    apply tools for discussion forums, event management, and
                    social networks that foster coherence for users to
                    communicate, exchange, and develop collectively.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Content Management Portals</h4>
                  <p>
                    We create solid content management portals for content
                    creation, organization, and dissemination processes. With
                    clear navigation and decision-making processes integrated,
                    together with fast and efficient search, it ensures that
                    your content is properly indexed and readily available.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>E-Commerce Web Portals</h4>
                  <p>
                    It is seen that Digitalmindson's e-commerce web portals are
                    designed to address online selling and improve the shopping
                    experience. Our portals for e-commerce come equipped with
                    safe payment solutions, tailored recommendations, improved
                    stock control systems, and more.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>eLearning Web Portals</h4>
                  <p>
                    We offer a complete solution for eLearning corpora to web
                    portals with online education and training solutions. These
                    portals are effective and user-friendly since they comprise
                    of detailed course contents, record tracking, and
                    certification.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Patient Web Portals</h4>
                  <p>
                    A patient web portal ensures that patients as well as
                    healthcare providers get secure and personalized access to
                    records, appointments, and telemedicine. It improves patient
                    care since these portals are aimed at promoting efficient
                    communication and organization in the provision of
                    healthcare.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Sales Web Portals</h4>
                  <p>
                    Sales web portals at Digitalmindson are designed as applications
                    that enhance sales management and revenue generation.
                    Elements such as lead management, the analysis of the sales
                    cycle, and connection with the CRM system equip the sales
                    departments with the right tools to complete sales quickly.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Self-Service Web Portals</h4>
                  <p>
                    The self-service web portals allow, the user to acquire
                    services and information on their own without further
                    assistance from us. Being interactive and often equipped
                    with knowledge bases and automated workflows, these portals
                    increase the overall effectiveness and usability.
                  </p>
                </div>
                <div className={styles.robust_content}>
                  <h4>Vendor Web Portals</h4>
                  <p>
                    We design vendor web portals to improve vendor management by
                    utilizing integrated web-based systems of communication,
                    ordering, and performance evaluation. Such portals help to
                    facilitate and improve interactions with vendors and supply
                    chain management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
