"use client";
import React from "react";
import styles from "./our_story.module.css";

export default function Our_Story() {
  return (
    <div className={styles.tekrevol_story}>
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <div className={styles.example} data-text="Our Story">
              <h2>
                In Pursuit Of Scaling The Digital Ecosystem Through <span>Top-Tier
                Product Teams</span>
              </h2>
            </div>
            <div className={styles.story_content}>
              <h4>OUR STORY</h4>
              <p>
                Digital Minds On came into existence after two tech enthusiasts from
                different backgrounds joined forces to create something bound to
                become a difference-maker in the digital world.
              </p>
              <p>
                The company started in 2022 as a mobile app development company
                but has since grown into a full-stack digital transformation
                organization offering enterprise software development and
                technical consultancy services for businesses worldwide.
              </p>
            </div>
          </div>
          <div className="my-auto col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <ul className={styles.story_items_content}>
              <li>
                50{/* */}+<p>Successfully completed projects</p>
              </li>
              <li>
                30{/* */}+<p>In-house engineers</p>
              </li>
              <li>
                20{/* */}+<p>Industries Served</p>
              </li>
              <li>
                65{/* */}+<p>Clutch Reviews</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
