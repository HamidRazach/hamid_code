"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Portfolio.module.scss";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // 🔽 Sara Project array andar hi hai
  const Project = [
    {
      Id: "10",
      pImg: "/images/portfolio/portfolio_item_image_4.png",
      title: "Skill-First Job Search Portal India | ShortlistMe",
      slug: "https://shortlistme.com/",
      thumb1: "Web Application",
      thumb2: "London",
      category: "technology",
    },
    {
      Id: "17",
      pImg: "/images/portfolio/portfolio_item_image_17.png",
      title: "Alleo.ai",
      slug: "https://play.google.com/store/apps/details?id=com.alleo.mobile",
      thumb1: "Mobile Application",
      thumb2: "To Do List & Planner",
      category: "helpdesk",
    },
    {
      Id: "18",
      pImg: "/images/portfolio/portfolio_item_image_6.png",
      title: "International Recruitment Agency Ireland & UK | Cork & Dublin",
      slug: "https://www.peglobal.net/",
      thumb1: "Wordpress Application",
      thumb2: "international recruitment agency",
      category: "analysis",
    },
    {
      Id: "19",
      pImg: "/images/portfolio/portfolio_item_image_5.png",
      title: "Level Up Your Business - SaaS Tools and Growth Consulting",
      slug: "https://www.roilevelup.com/",
      thumb1: "Web Application",
      thumb2: "Level Up",
      category: "technology",
    },
    {
      Id: "20",
      pImg: "/images/portfolio/portfolio_item_image_8.png",
      title:
        "Heating Oil & Agri Diesel Supplier in North Cork & Beyond | Amber Oil",
      slug: "https://www.amberoil.ie/",
      thumb1: "Wordpress Application",
      thumb2: "Amber Oil",
      category: "analysis",
    },
    {
      Id: "21",
      pImg: "/images/portfolio/portfolio_item_image_9.png",
      title: "Pro Business Connections",
      slug: "https://play.google.com/store/apps/details?id=com.techmicrosol.probusinessconnectionsofficial",
      thumb1: "Mobile Application",
      thumb2: "Pro Business Connections",
      category: "helpdesk",
    },
    {
      Id: "22",
      pImg: "/images/portfolio/portfolio_item_image_18.png",
      title: "TiSegnalo",
      slug: "https://play.google.com/store/apps/details?id=com.carmine.tisegnalo",
      thumb1: "Mobile Application",
      thumb2: "TiSegnalo",
      category: "helpdesk",
    },
    {
      Id: "23",
      pImg: "/images/portfolio/portfolio_item_image_19.png",
      title: "Food Fair - Spring Valley",
      slug: "https://play.google.com/store/apps/details?id=com.telonline.ffspringvalley",
      thumb1: "Mobile Application",
      thumb2: "Food Fair - Spring Valley",
      category: "helpdesk",
    },
    {
      Id: "24",
      pImg: "/images/portfolio/portfolio_item_image_20.png",
      title: "Clannit",
      slug: "https://play.google.com/store/apps/details?id=com.serveconsulting.Clannit",
      thumb1: "Mobile Application",
      thumb2: "Clannit",
      category: "helpdesk",
    },
    {
      Id: "25",
      pImg: "/images/portfolio/portfolio_item_image_21.png",
      title: "RingVoz",
      slug: "https://play.google.com/store/apps/details?id=com.ringvoz.ringvozmobileapp",
      thumb1: "Mobile Application",
      thumb2: "RingVoz",
      category: "helpdesk",
    },
    {
      Id: "26",
      pImg: "/images/portfolio/portfolio_item_image_22.png",
      title: "BUILD - Convos to Actions",
      slug: "https://apps.apple.com/us/app/build-convos-to-actions/id1571755886",
      thumb1: "Mobile Application",
      thumb2: "BUILD - Convos to Actions",
      category: "helpdesk",
    },
    {
      Id: "27",
      pImg: "/images/portfolio/portfolio_item_image_23.png",
      title: "AW RECOVERY SERVICES | CHARLIE",
      slug: "https://apps.apple.com/us/app/aw-recovery-services-charlie/id6446933727",
      thumb1: "Mobile Application",
      thumb2: "AW RECOVERY SERVICES | CHARLIE",
      category: "helpdesk",
    },
    {
      Id: "28",
      pImg: "/images/portfolio/portfolio_item_image_10.png",
      title: "Path Finder Hub",
      slug: "https://app.thepathfinderhub.com/",
      thumb1: "Web Application",
      thumb2: "University",
      category: "technology",
    },
    {
      Id: "29",
      pImg: "/images/portfolio/portfolio_item_image_11.png",
      title: "Super Bullion Wire",
      slug: "https://superbullionwire.com/",
      thumb1: "Web Application",
      thumb2: "Industry",
      category: "technology",
    },
    {
      Id: "30",
      pImg: "/images/portfolio/portfolio_item_image_12.png",
      title: "Heraklean",
      slug: "https://herakleangym.vercel.app/",
      thumb1: "Web Application",
      thumb2: "Gym",
      category: "technology",
    },
    {
      Id: "31",
      pImg: "/images/portfolio/portfolio_item_image_16.png",
      title: "Custom Packaging | Nexon Packaging - USA",
      slug: "https://nexonpackaging.com/",
      thumb1: "Web Application",
      thumb2: "Nexon Packaging - USA",
      category: "technology",
    },
    {
      Id: "32",
      pImg: "/images/portfolio/portfolio_item_image_14.png",
      title: "Large Scale Microelectronics Technology Centre - MCCI",
      slug: "https://www.mcci.ie/",
      thumb1: "Wordpress Application",
      thumb2: "MCCI",
      category: "analysis",
    },
    {
      Id: "33",
      pImg: "/images/portfolio/portfolio_item_image_13.png",
      title: "Home | The Irish Kennel Club",
      slug: "https://www.ikc.ie/",
      thumb1: "Wordpress Application",
      thumb2: "Club",
      category: "analysis",
    },
    {
      Id: "34",
      pImg: "/images/portfolio/portfolio_item_image_15.png",
      title: "DukanMine",
      slug: "https://dukanmine.com/",
      thumb1: "Wordpress Application",
      thumb2: "DukanMine",
      category: "analysis",
    },
  ];

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === "all"
      ? Project
      : Project.filter((project) => project.category === activeFilter);

  return (
    <main className={styles.page_content}>
      <section className={styles.portfolio_section}>
        <div className="container">
           <Fade direction="up" triggerOnce>
            <h2>Portfolio</h2>
            </Fade>
          {/* filter tabs */}
           <Fade direction="up" delay={120} triggerOnce>
          <div className={styles.filter_elements_nav}>
            <ul className={styles.unordered_list}>
              <li
                className={activeFilter === "all" ? styles.active : ""}
                onClick={() => handleFilterClick("all")}
              >
                See All
              </li>
              <li
                className={activeFilter === "technology" ? styles.active : ""}
                onClick={() => handleFilterClick("technology")}
              >
                Web App
              </li>
              <li
                className={activeFilter === "helpdesk" ? styles.active : ""}
                onClick={() => handleFilterClick("helpdesk")}
              >
                Mobile App
              </li>
              <li
                className={activeFilter === "analysis" ? styles.active : ""}
                onClick={() => handleFilterClick("analysis")}
              >
                Wordpress App
              </li>
            </ul>
          </div>
          </Fade>

          {/* projects */}
          <div className="row">
            {filteredProjects.map((project, prj, index) => (
              <div className="col-lg-6" key={prj}>
                 <Fade
                    direction="up"
                    delay={index * 80}
                    triggerOnce
                  >
                <div className={styles.portfolio_block}>
                  <div className={styles.portfolio_image}>
                    <Link
                      onClick={ClickHandler}
                      href={project.slug}
                      className={styles.portfolio_image_wrap}
                    >
                      <Image
                        src={project.pImg}
                        alt={project.title}
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  </div>
                  <div className={styles.portfolio_content}>
                    <h3 className={styles.portfolio_title}>
                      <Link onClick={ClickHandler} href={project.slug}>
                        {project.title}
                      </Link>
                    </h3>
                    <ul className={styles.category_list}>
                      <li>
                        {/* <Link onClick={ClickHandler} href={project.slug}> */}
                          <i className="fa-solid fa-tags"></i> {project.thumb1}
                        {/* </Link> */}
                      </li>
                      <li>
                        {/* <Link onClick={ClickHandler} href={project.slug}> */}
                          <i className="fa-solid fa-building"></i>{" "}
                          {project.thumb2}
                        {/* </Link> */}
                      </li>
                    </ul>
                  </div>
                </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
