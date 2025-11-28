import React from "react";
import styles from "./shopify-expert.module.scss";
import Image from "next/image";

export default function Shopify_expert() {
  return (
    <section
      className={styles.ecommerce_web_process}
      style={{ background: "rgb(255, 255, 255)" }}
    >
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-12">
            <span className={styles.small}>Your Vision, Our Platform</span>
            <h2>
              On The Way To A Wealthier Future With{" "}
              <span>Shopify Custom Theme Development</span>
            </h2>
            <p className={styles.small_para}>
              Step into an e-commerce journey like never before with our Shopify
              Custom Development, turning your digital storefront into an
              immersive brand experience that captivates and converts.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          <div className="mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div
              className={styles.ecomm_process_box}
              style={{ background: "rgb(4, 30, 45)" }}
            >
              <div className={styles.ecom_box_icon}>
              <Image src="/images/Shopify_services/19.png" alt="image" width={70} height={70}/>
              </div>
              <h5 style={{ color: "rgb(255, 255, 255)", marginBottom: 10 }}>
                Bespoke Theme Design
              </h5>
              <p>
                Elevate your online brand presence with our Shopify Custom Theme
                Development service. Our expert designers craft visually
                stunning and user-friendly themes tailored to your brand
                identity, ensuring a unique and memorable shopping experience
                for your customers.
              </p>
            </div>
          </div>
          <div className="mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div
              className={styles.ecomm_process_box}
              style={{ background: "rgb(4, 30, 45)" }}
            >
              <div className={styles.ecom_box_icon}>
                  <Image src="/images/Shopify_services/20.png" alt="image" width={70} height={70}/>
              </div>
              <h5 style={{ color: "rgb(255, 255, 255)", marginBottom: 10 }}>
                Responsive Development
              </h5>
              <p>
                Our team specializes in creating Shopify themes that seamlessly
                adapt to various devices and screen sizes. With a focus on
                responsive development, we guarantee that your online store
                maintains optimal functionality and aesthetics, providing a
                consistent and enjoyable user experience across desktops,
                tablets, and mobile devices.
              </p>
            </div>
          </div>
          <div className="mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div
              className={styles.ecomm_process_box}
              style={{ background: "rgb(4, 30, 45)" }}
            >
              <div className={styles.ecom_box_icon}>
                  <Image src="/images/Shopify_services/21.png" alt="image" width={70} height={70}/>
              </div>
              <h5 style={{ color: "rgb(255, 255, 255)", marginBottom: 10 }}>
                {" "}
                Feature-Rich Functionality{" "}
              </h5>
              <p>
                We integrate advanced features and functionalities into your
                theme, tailored to meet your specific business requirements.
                From sophisticated navigation menus to personalized product
                displays, we ensure your online store stands out with rich and
                intuitive functionality.
              </p>
            </div>
          </div>
          <div className="mb-xl-0 mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div
              className={styles.ecomm_process_box}
              style={{ background: "rgb(4, 30, 45)" }}
            >
              <div className={styles.ecom_box_icon}>
                 <Image src="/images/Shopify_services/22.png" alt="image" width={70} height={70}/>
              </div>
              <h5 style={{ color: "rgb(255, 255, 255)", marginBottom: 10 }}>
                Performance Optimization
              </h5>
              <p>
                We ensure that your Shopify theme loads quickly and provides an
                efficient browsing experience through meticulous code
                optimization and image compression for your customers. A
                fast-loading site not only enhances user satisfaction but also
                positively impacts search engine rankings.
              </p>
            </div>
          </div>
          <div className="mb-md-0 mb-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div
              className={styles.ecomm_process_box}
              style={{ background: "rgb(4, 30, 45)" }}
            >
              <div className={styles.ecom_box_icon}>
                 <Image src="/images/Shopify_services/24.png" alt="image" width={70} height={70}/>
              </div>
              <h5 style={{ color: "rgb(255, 255, 255)", marginBottom: 10 }}>
                Customization For Brand Consistency
              </h5>
              <p>
                Achieve brand consistency across all touch points with our
                customization services. We tailor every aspect of your Shopify
                theme, from color schemes to typography, ensuring that your
                online presence aligns perfectly with your brand identity.
                Consistent branding fosters trust and recognition, crucial
                elements for building a loyal customer base.
              </p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div
              className={styles.ecomm_process_box}
              style={{ background: "rgb(4, 30, 45)" }}
            >
              <div className={styles.ecom_box_icon}>
                  <Image src="/images/Shopify_services/23.png" alt="image" width={70} height={70}/>
              </div>
              <h5 style={{ color: "rgb(255, 255, 255)", marginBottom: 10 }}>
                Ongoing Support And Maintenance
              </h5>
              <p>
                We offer continuous support and maintenance services to keep
                your Shopify store running smoothly. We ensure that your online
                platform evolves seamlessly, allowing you to focus on growing
                your business, from updates and security patches to
                troubleshooting and feature enhancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
