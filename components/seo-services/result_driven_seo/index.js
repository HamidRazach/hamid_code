import React from "react";
import styles from "./seo_result.module.scss";

const seoSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "The first step involves a comprehensive investigation of your company, its operating field, and competitors. During this discovery phase, we define key opportunities and risks that may influence the setting of an optimal SEO strategy."
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "The evaluation carried out by our team includes an analysis of your website’s technical condition, textual content, and backlinks. It also gives us an understanding of several areas that require attention so that we can effectively implement what would have the most positive influence."
  },
  {
    step: "03",
    title: "Strategize",
    description:
      "From the above research, we then design the SEO strategy that will meet your business needs. This comprises keyword targeting, content mapping, technical SEO, and off-page strategies aimed at elevating the site’s SERP position."
  },
  {
    step: "04",
    title: "Execute",
    description:
      "We deploy the strategy with efficiency, enhancing the architecture, copy, and functionality of your website. Our execution phase consists of producing and sharing high-quality content, building credible backlinks, and making your site mobile-friendly and fast."
  },
  {
    step: "05",
    title: "Measure",
    description:
      "Through regular and comprehensive reports, we can track the effectiveness of your SEO campaign in real time. Using the metrics of organic traffic, keyword positions, and conversion rates, we evaluate the efficiency of the approach and reveal its shortcomings."
  },
  {
    step: "06",
    title: "Report",
    description:
      "Our reports are clear, and comprehensive, with emphasis on the achievements of the SEO campaign embarked on. Such reports may feature traffic trends, referenced rankings, and even ROI to provide a clear picture of how we help advance your business."
  },
  {
    step: "07",
    title: "Improvise",
    description:
      "It is worth mentioning that SEO work is a long-term effort and adjusting our approaches based on performance indicators and changes in trends is a priority. We always adapt to the changes in approaches to make your site remain relevant on the search engine results page and provide sustainable benefits."
  }
];

export default function Seo_result() {
  return (
    <section className={styles.seo_results}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <h2>Digitalmindson Result-driven <span>SEO Strategy</span></h2>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <p>
              SEO services provided by Digitalmindson are strategic to provide optimal
              outcomes that can be considered long-term. First, we identify your
              specific business objectives and your target market to make sure
              that all the actions are consistent with your aims. Using
              state-of-the-art SEO tools and trends, we develop effective and
              lasting SEO strategies that can improve your online presence.
            </p>
            <h5>
              Steps in <span>Digital Minds On</span> SEO Strategy
            </h5>
          </div>
        </div>
        <div className="mt-3 mt-md-4 row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className={styles.seo_result_main}>
              {seoSteps.map((item, index) => (
                <div className={styles.seo_result_item} key={index}>
                  <div className={styles.seo_result_box}>
                    <div className={styles.seo_num}>{item.step}</div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
