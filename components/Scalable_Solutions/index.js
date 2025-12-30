"use client";
import React from "react";
import styles from './premier_software.module.scss';

export default function PremierSoftware() {
  return (
    <section className={styles.premier_custom_solution}>
      <div className="container">
        <div className="row">
          <div className="m-auto text-center col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-12">
            <h2>
              Building Scalable Solutions as a Premier{" "}
              <span>Custom Software Development</span> Company in USA
            </h2>
            <p>
              At every scale of business and management level, our expert
              software development services offer innovative solutions designed
              to enhance your operational efficiency.
            </p>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          <div className="mb-4 mb-xl-0 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.premier_sol_box}>
              <div className={styles.icon}>
              <i class="fa-solid fa-desktop"></i>
              </div>
              <h5>
                Enterprise-wide Software
              </h5>
              <p>
                Our software development expertise enables us to create
                large-scale, integrated solutions that centralize corporate data
                and streamline processes across departments for optimal
                efficiency.
              </p>
            </div>
          </div>
          <div className="mb-4 mb-xl-0 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.premier_sol_box}>
              <div className={styles.icon}>
             <i class="fa-solid fa-users-gear"></i>
              </div>
              <h5>
                Departmental Software
              </h5>
              <p>
                As a leading custom software development agency, we specialize
                in crafting applications tailored to meet the specific needs of
                individual departments, enhancing overall productivity.
              </p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div className={styles.premier_sol_box}>
              <div className={styles.icon}>
             <i class="fa-solid fa-diagram-project"></i>
              </div>
              <h5>Business Process Management Software</h5>
              <p>
                Our software development firm excels in delivering solutions
                that support unique workflows, ensuring your business achieves
                seamless operations tailored to industry-specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
