import React from "react";
import styles from "./case_study.module.scss";
import Link from "next/link";

export default function Case_study() {
  return (
    <section className={styles.casestudy}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-8 col-xl-7">
            <h2>
              Success Stories of Our <span>Mobile Game Development</span>{" "}
              Company
            </h2>
            <p>
              Digitalmindson Games provides knowledge and experience so our partners
              can deliver high quality entertainment.
            </p>
          </div>
          <div className="col-xs-12 col-md-3 col-lg-4 col-xl-5">
            <div className={styles.pro_btn}>
              <Link className={styles.btn} href="portfolio">
                <span className={styles.btn_label} data-text="All case studies">
                  All case studies
                </span>
                <span className={styles.btn_icon}>
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </Link>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12">
            <div className={styles.casestudy_item}>
              <video
                autoPlay 
                loop
                muted 
                playsInline
                preload="auto"
              >
                <source
                  src="/images/game-developement/video-1.webm"
                  type="video/webm"
                />
                <source
                  src="/images/game-developement/video-1.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={styles.download_section}>
                <div className={styles.download_apps}>
                  <div className={styles.name_now}>Available Now!</div>
                  <div className={styles.name_icon}>
                    <ul>
                      <li>
                        <Link href="/mobile-game-development">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={33}
                            height={35}
                            fill="none"
                            viewBox="0 0 33 35"
                          >
                            <path
                              fill="#fff"
                              d="M0 2.148V32.85a.338.338 0 00.576.24L16.562 17.5.576 1.908a.338.338 0 00-.576.24zM23.264 11.094L3.22.05 3.207.043c-.346-.187-.674.28-.39.552l15.712 15.024 4.735-4.525zM2.819 34.405c-.284.272.044.74.39.552l.013-.007 20.044-11.044-4.735-4.527L2.819 34.405zM31.357 15.547l-5.598-3.083-5.263 5.036 5.263 5.033 5.598-3.08c1.523-.842 1.523-3.065 0-3.906z"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-game-development">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 820 950"
                          >
                            <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z"></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.case_btn}>
                    <Link className={styles.btn} href="portfolio">
                        <span className={styles.btn_label} data-text="view case study">
                          view case study
                        </span>
                        <span className={styles.btn_icon}>
                          <i className="fa-solid fa-arrow-up-right" />
                        </span>
                      </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6">
            <div className={styles.casestudy_item}>
              <video
                autoPlay 
                loop
                muted 
                playsInline
                preload="auto"
              >
                <source
                  src="/images/game-developement/video-2.webm"
                  type="video/webm"
                />
                <source
                  src="/images/game-developement/video-2.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={styles.download_section}>
                <div className={styles.download_apps}>
                  <div className={styles.name_now}>Available Now!</div>
                  <div className={styles.name_icon}>
                    <ul>
                      <li>
                        <Link href="mobile-game-development">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={33}
                            height={35}
                            fill="none"
                            viewBox="0 0 33 35"
                          >
                            <path
                              fill="#fff"
                              d="M0 2.148V32.85a.338.338 0 00.576.24L16.562 17.5.576 1.908a.338.338 0 00-.576.24zM23.264 11.094L3.22.05 3.207.043c-.346-.187-.674.28-.39.552l15.712 15.024 4.735-4.525zM2.819 34.405c-.284.272.044.74.39.552l.013-.007 20.044-11.044-4.735-4.527L2.819 34.405zM31.357 15.547l-5.598-3.083-5.263 5.036 5.263 5.033 5.598-3.08c1.523-.842 1.523-3.065 0-3.906z"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-game-development">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 820 950"
                          >
                            <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z"></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.case_btn}>
                   <Link className={styles.btn} href="portfolio">
                        <span className={styles.btn_label} data-text="view case study">
                          view case study
                        </span>
                        <span className={styles.btn_icon}>
                          <i className="fa-solid fa-arrow-up-right" />
                        </span>
                      </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6">
            <div className={styles.casestudy_item}>
              <video
                autoPlay 
                loop
                muted 
                playsInline
                preload="auto"
              >
                <source
                  src="/images/game-developement/video-3.webm"
                  type="video/webm"
                />
                <source
                  src="/images/game-developement/video-3.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={styles.download_section}>
                <div className={styles.download_apps}>
                  <div className={styles.name_now}>Available Now!</div>
                  <div className={styles.name_icon}>
                    <ul>
                      <li>
                        <Link href="/mobile-game-development">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={33}
                            height={35}
                            fill="none"
                            viewBox="0 0 33 35"
                          >
                            <path
                              fill="#fff"
                              d="M0 2.148V32.85a.338.338 0 00.576.24L16.562 17.5.576 1.908a.338.338 0 00-.576.24zM23.264 11.094L3.22.05 3.207.043c-.346-.187-.674.28-.39.552l15.712 15.024 4.735-4.525zM2.819 34.405c-.284.272.044.74.39.552l.013-.007 20.044-11.044-4.735-4.527L2.819 34.405zM31.357 15.547l-5.598-3.083-5.263 5.036 5.263 5.033 5.598-3.08c1.523-.842 1.523-3.065 0-3.906z"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="mobile-game-development">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 820 950"
                          >
                            <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z"></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.case_btn}>
                     <Link className={styles.btn} href="portfolio">
                        <span className={styles.btn_label} data-text="view case study">
                          view case study
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
      </div>
    </section>
  );
}
