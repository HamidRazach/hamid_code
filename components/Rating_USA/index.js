'use client';
import React from "react";
import styles from "./ratingusa.module.scss";


export default function Rating() {
  return (
    <div className={styles.rating_usa}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={89}
                  height={89}
                  fill="none"
                  viewBox="0 0 89 89"
                >
                  <mask
                    id="mask0_6878_1790"
                    width={89}
                    height={89}
                    x={0}
                    y={0}
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                  >
                    <path fill="url(#pattern0_6878_1790)" d="M0 0H89V89H0z" />
                  </mask>
                  <g mask="url(#mask0_6878_1790)">
                    <path fill="#F47A1F" d="M-1.744 1.745H95.109V89H-1.744z" />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_6878_1790"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        transform="scale(.00781)"
                        xlinkHref="#image0_6878_1790"
                      />
                    </pattern>
                    <image
                      id="image0_6878_1790"
                      width={128}
                      height={128}
                      xlinkHref="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>60+</div>
                <p>Web Experts</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={91}
                  height={91}
                  fill="none"
                  viewBox="0 0 91 91"
                >
                  <mask
                    id="mask0_6878_1791"
                    width={91}
                    height={91}
                    x={0}
                    y={0}
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                  >
                    <path fill="url(#pattern0_6878_1791)" d="M0 0H91V91H0z" />
                  </mask>
                  <g mask="url(#mask0_6878_1791)">
                    <path fill="#F47A1F" d="M0 3.434H95.292V89.283H0z" />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_6878_1791"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        transform="scale(.00781)"
                        xlinkHref="#image0_6878_1791"
                      />
                    </pattern>
                    <image
                      id="image0_6878_1791"
                      width={128}
                      height={128}
                      xlinkHref="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>70+</div>
                <p>Successful Projects</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={89}
                  height={89}
                  fill="none"
                  viewBox="0 0 89 89"
                >
                  <mask
                    id="mask0_6913_2671"
                    width={89}
                    height={89}
                    x={0}
                    y={0}
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                  >
                    <path fill="url(#pattern0_6913_2671)" d="M0 0H89V89H0z" />
                  </mask>
                  <g mask="url(#mask0_6913_2671)">
                    <path
                      fill="#F47A1F"
                      d="M-4.867 -4.867H93.86699999999999V93.86699999999999H-4.867z"
                    ></path>
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_6913_2671"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        transform="scale(.00781)"
                        xlinkHref="#image0_6913_2671"
                      />
                    </pattern>
                    <image
                      id="image0_6913_2671"
                      width={128}
                      height={128}
                      xlinkHref="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>5.0</div>
                <p>GoodFirms Rating</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div className={styles.rating_box}>
              <div className={styles.rating_svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={85}
                  height={85}
                  fill="none"
                  viewBox="0 0 85 85"
                >
                  <mask
                    id="mask0_6913_2672"
                    width={85}
                    height={85}
                    x={0}
                    y={0}
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                  >
                    <path fill="url(#pattern0_6913_2672)" d="M0 0H85V85H0z" />
                  </mask>
                  <g mask="url(#mask0_6913_2672)">
                    <path
                      fill="#F47A1F"
                      d="M-4.648 -4.648H89.649V89.649H-4.648z"
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_6913_2672"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        transform="scale(.00781)"
                        xlinkHref="#image0_6913_2672"
                      />
                    </pattern>
                    <image
                      id="image0_6913_2672"
                      width={128}
                      height={128}
                      xlinkHref="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
              </div>
              <div className={styles.rating_content}>
                <div className={styles.rating_num}>4.9</div>
                <p>Clutch Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
