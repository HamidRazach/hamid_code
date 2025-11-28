import React from "react";
import styles from "./seo_company.module.scss";
import Image from "next/image";

export default function Seo_company_about() {
  return (
    <section className={styles.seo_company}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <h2>
              An SEO Company that Understands the Challenges Ensures{" "}
              <span>Sustainable Ranking</span>
            </h2>
            <p>
              SEO is not an easy thing to manage, but with a good SEO specialist
              by your side, you are capable of attaining sustainable rankings.
              Our team of experts has seen it all, and we pride ourselves in
              delivering specifically customized solutions that work in the long
              run.
            </p>
            <ul>
              <li>
                Your website lacks the visibility that it should be getting.
              </li>
              <li>
                You have noticed less traffic and you do not know what has gone
                wrong.
              </li>
              <li>
                You have realized that leads and inquiries trail off suddenly.
              </li>
              <li>
                If you are going to launch a new site and expect fast growth.
              </li>
              <li>
                The current SEO strategy that you are implementing cannot yield
                the desired results.
              </li>
            </ul>
            <p>
              If any of these situations are recognizable, you’ve come to the
              right site. We understand that the environment is constantly
              changing, and so, our SEO techniques are tailored to fit into the
              current market needs.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-6 text-center mt-3 mt-md-0">
            <Image
              src="/images/backgrounds/seo-company.webp"
              alt="digitalmindson"
              width={750}
              height={674}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
