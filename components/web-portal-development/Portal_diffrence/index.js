import React from "react";
import styles from "./portal_diffrence.module.scss";


export default function Portal_diffrence() {
  return (
    <section className={styles.webportal_diffrence}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-8 col-xl-8 col-lg-8 col-md-9 col-12">
            <h2>
              Key Distinctions between <span>Web Portals</span> and Websites
            </h2>
          </div>
        </div>
        <div className="mt-3 align-items-center row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12">
            <h4>Web Portals</h4>
            <ul>
              <li>Users interact dynamically with the data on the page.</li>
              <li>
                Portals can host both open public pages and secure
                login-protected pages.
              </li>
              <li>Provide real-time, highly tailored user experiences.</li>
              <li>
                Offer seamless integration with custom and third-party tools.
              </li>
              <li>Regularly update features and adapt content dynamically.</li>
            </ul>
          </div>
          <div className="my-auto text-center col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={418}
              fill="none"
              viewBox="0 0 10 418"
            >
              <g filter="url(#filter0_d_1092_6769)">
                <path
                  stroke="#000"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  d="M5 1v408"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1092_6769"
                  width={9}
                  height={417}
                  x="0.5"
                  y="0.5"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1092_6769"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1092_6769"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12">
            <h4>Websites</h4>
            <ul>
              <li>Present static, read-only informational content.</li>
              <li>Authentication is optional and usually unnecessary.</li>
              <li>Provide real-time, highly tailored user experiences.</li>
              <li>Personalization is general and uniform for all users.</li>
              <li>
                Infrequent integration with other systems such as CRM or ERP.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
