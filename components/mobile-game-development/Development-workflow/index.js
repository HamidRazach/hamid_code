import React from "react";
import styles from "./Development_Workflow.module.scss";

export default function Development_Workflow() {
  return (
    <section
      className={styles.workflow_section}
      style={{
        backgroundImage:
          'url("/images/game-developement/workflow-bg.webp")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-6">
            <h2>
             Digitalmindson <span>Mobile Game App Development </span> Workflow
            </h2>
            <p>
              Our game app development process is a well-structured journey that
              begins with a thorough project scope determination early in the
              project life cycle.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.workflow_listing}>
              <div className={styles.workflow_items}>
                <h4>
                  <span>01</span>Plan
                </h4>
                <p>
                  We conduct concept analysis and research using client-provided
                  details, formulating game design documents, flow design, and
                  execution plans.
                </p>
              </div>
              <div className={styles.workflow_items}>
                <h4>
                  <span>02</span>Concept Art
                </h4>
                <p>
                  Our team generates concept art and sketches aligned with the
                  game's theme and vision.
                </p>
              </div>
              <div className={styles.workflow_items}>
                <h4>
                  <span>03</span>Development
                </h4>
                <p>
                  Our game app developers transform the design into a
                  high-quality game using top game engines and technologies.
                </p>
              </div>
              <div className={styles.workflow_items}>
                <h4>
                  <span>04</span>Test
                </h4>
                <p>
                  Our experienced testers subject all games to rigorous QA and
                  compatibility testing across various devices.
                </p>
              </div>
              <div className={styles.workflow_items}>
                <h4>
                  <span>05</span>Launch
                </h4>
                <p>
                  Your mobile game app is ready to make its debut on various
                  stores, reaching its intended audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
