import React from "react";
import styles from "./section_awards.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Section_awards() {
  return (
    <div className={styles.section_awards}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 m-auto text-center">
            <div className={styles.example}>
              <h2>Awards <span>& Honors</span></h2>
            </div>
            <p>
              Our commitment to creating inventive, user-focused web solutions
              has garnered us recognition within the industry, establishing us
              as pioneers in this field. Whether it's prestigious awards or
              glowing testimonials, the recognition we've received serves as
              evidence of our enthusiasm for pushing the limits and consistently
              surpassing expectations in our deliverables.
            </p>
            <div className={styles.start}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={241}
                height={41}
                viewBox="0 0 241 41"
                fill="none"
              >
                <path
                  d="M20.4608 0.682373L24.9511 14.502L39.4819 14.502L27.7262 23.043L32.2165 36.8625L20.4608 28.3216L8.70519 36.8625L13.1954 23.043L1.4398 14.502L15.9706 14.502L20.4608 0.682373Z"
                  fill="#FFA800"
                />
                <path
                  d="M70.4608 0.682617L74.9511 14.5022L89.4819 14.5022L77.7262 23.0432L82.2165 36.8628L70.4608 28.3218L58.7052 36.8628L63.1954 23.0432L51.4398 14.5022L65.9706 14.5022L70.4608 0.682617Z"
                  fill="#FFA800"
                />
                <path
                  d="M120.461 0.682617L124.951 14.5022L139.482 14.5022L127.726 23.0432L132.216 36.8628L120.461 28.3218L108.705 36.8628L113.195 23.0432L101.44 14.5022L115.971 14.5022L120.461 0.682617Z"
                  fill="#FFA800"
                />
                <path
                  d="M170.461 0.682617L174.951 14.5022L189.482 14.5022L177.726 23.0432L182.216 36.8628L170.461 28.3218L158.705 36.8628L163.195 23.0432L151.44 14.5022L165.971 14.5022L170.461 0.682617Z"
                  fill="#FFA800"
                />
                <path
                  d="M220.461 0.682617L224.951 14.5022L239.482 14.5022L227.726 23.0432L232.216 36.8628L220.461 28.3218L208.705 36.8628L213.195 23.0432L201.44 14.5022L215.971 14.5022L220.461 0.682617Z"
                  fill="#FFA800"
                />
              </svg>
              <ul className={styles.rating}>
                <li>
                  <span>50</span> Reviews
                </li>
                <li>
                  <span>4.9</span> Rating
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-auto text-center">
            <div className={styles.awards_listing}>
              <div className={styles.awards_boxing}>
                <div className={styles.awards_logo}>
                  <Image
                    width={120}
                    height={120}
                    src="/images/web-design/logo-1.webp"
                    alt="Horizon Interactive Awards"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.awards_txt}>
                  <h4>Horizon Interactive Awards</h4>
                  <p>
                    We're recognized as a gold winner by Horizon Interactive
                    Awards for our focus on digital design and interactive apps.
                  </p>
                </div>
              </div>
              <div className={styles.awards_boxing}>
                <div className={styles.awards_logo}>
                  <Image
                  width={120}
                  height={120}
                    src="/images/web-design/logo-3.webp"
                    alt="Clutch"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.awards_txt}>
                  <h4>Clutch</h4>
                  <p>
                    We are acknowledged by Clutch as one of the top B2B
                    companies for cultivating digitization all around the
                    business world.
                  </p>
                </div>
              </div>
              <div className={styles.awards_boxing}>
                <div className={styles.awards_logo}>
                  <Image
                  width={120}
                  height={120}
                    src="/images/web-design/logo-2.webp"
                    alt="dotCOMM Awards"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.awards_txt}>
                  <h4>dotCOMM Awards</h4>
                  <p>
                    Our company has earned the platinum award by dotCOMM Awards
                    for our excellence in web creation and design.
                  </p>
                </div>
              </div>
              <div className={styles.awards_boxing}>
                <div className={styles.awards_logo}>
                  <Image
                  width={120}
                  height={120}
                    src="/images/web-design/logo-4.webp"
                    alt="TopDevelopers"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.awards_txt}>
                  <h4>TopDevelopers</h4>
                  <p>
                    We are honored by TopDevelopers as a Top Mobile App
                    Developers company building revolutionary solutions.
                  </p>
                </div>
              </div>
              <div className={styles.awards_boxing}>
                <div className={styles.awards_logo}>
                  <Image
                  width={120}
                  height={120}
                    src="/images/web-design/logo-5.webp"
                    alt="Expertise"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.awards_txt}>
                  <h4>Expertise</h4>
                  <p>
                    We are highlighted by Expertise as the best mobile app
                    developers for our massive contribution to the field.
                  </p>
                </div>
              </div>
              <div className={styles.awards_boxing}>
                <div className={styles.awards_logo}>
                  <Image
                  width={120}
                  height={120}
                    src="/images/web-design/logo-6.webp"
                    alt="SoftwareWorld"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.awards_txt}>
                  <h4>SoftwareWorld</h4>
                  <p>
                    We are top-rated by SoftwareWorld as a leading software
                    development firm for our next-gen products.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.btn_more}>
              <Link className={styles.btn} href="/contact">
                <span className={styles.btn_label} data-text="Check Reviews">
                  Check Reviews
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
