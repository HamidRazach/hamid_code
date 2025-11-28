"use client";
import React, { Fragment, useState } from "react";
import Head from "next/head";
import PageTitle from "../../components/pagetitle/PageTitle";
import CtaSection from "../../components/CtaSection/CtaSection";
import Image from "next/image";
import Link from "next/link";

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
    thumb2: "Recruitment Agency",
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
    title: "Heating Oil & Agri Diesel Supplier in North Cork | Amber Oil",
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
    thumb2: "PBC",
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
    thumb2: "Food Fair",
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
    thumb2: "BUILD App",
    category: "helpdesk",
  },
  {
    Id: "27",
    pImg: "/images/portfolio/portfolio_item_image_23.png",
    title: "AW RECOVERY SERVICES | CHARLIE",
    slug: "https://apps.apple.com/us/app/aw-recovery-services-charlie/id6446933727",
    thumb1: "Mobile Application",
    thumb2: "Recovery Services",
    category: "helpdesk",
  },
  {
    Id: "28",
    pImg: "/images/portfolio/portfolio_item_image_10.png",
    title: "Path Finder Hub",
    slug: "https://app.thepathfinderhub.com",
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
    thumb2: "Nexon Packaging",
    category: "technology",
  },
  {
    Id: "32",
    pImg: "/images/portfolio/portfolio_item_image_14.png",
    title: "Large Scale Microelectronics Centre - MCCI",
    slug: "https://www.mcci.ie/",
    thumb1: "Wordpress Application",
    thumb2: "MCCI",
    category: "analysis",
  },
  {
    Id: "33",
    pImg: "/images/portfolio/portfolio_item_image_13.png",
    title: "The Irish Kennel Club",
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

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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
    <Fragment>
      <Head>
        <title>Our Portfolio | Digital Minds On</title>
        <meta
          name="description"
          content="Discover successful projects delivered by Digital Minds On. Explore our portfolio of apps, games, and websites developed for global clients across industries."
        />
        <link rel="canonical" href="https://digitalmindson.com/portfolio" />
      </Head>

      <main className="page_content about-page">
        <PageTitle
          pageTitle={"Our Portfolio"}
          pagesub={"Portfolio 😍"}
          pageTop={"Our"}
        />

        <section className="portfolio_section section_space bg-light">
          <div className="container">
            {/* Filter Menu */}
            <div className="filter_elements_nav">
              <ul className="unordered_list justify-content-center">
                <li
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={() => handleFilterClick("all")}
                >
                  See All
                </li>
                <li
                  className={activeFilter === "technology" ? "active" : ""}
                  onClick={() => handleFilterClick("technology")}
                >
                  Web App
                </li>
                <li
                  className={activeFilter === "helpdesk" ? "active" : ""}
                  onClick={() => handleFilterClick("helpdesk")}
                >
                  Mobile App
                </li>
                <li
                  className={activeFilter === "analysis" ? "active" : ""}
                  onClick={() => handleFilterClick("analysis")}
                >
                  Wordpress App
                </li>
              </ul>
            </div>

            {/* Projects Grid */}
            <div className="filter_elements_wrapper row">
              {filteredProjects.map((project) => (
                <div className="col-lg-6" key={project.Id}>
                  <div className="portfolio_block portfolio_layout_2">
                    
                    {/* Image */}
                    <div className="portfolio_image">
                      <Link
                        href={project.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={ClickHandler}
                        className="portfolio_image_wrap bg-light"
                      >
                        <Image
                          src={project.pImg}
                          alt={project.title}
                          width={1000}
                          height={1000}
                        />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="portfolio_content">
                      <h3 className="portfolio_title">
                        <Link
                          href={project.slug}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={ClickHandler}
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <ul className="category_list unordered_list">
                        <li>
                          {/* <Link
                            href={project.slug}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={ClickHandler}
                          > */}
                            <i className="fa-solid fa-tags"></i> {project.thumb1}
                          {/* </Link> */}
                        </li>
                        <li>
                          {/* <Link
                            href={project.slug}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={ClickHandler}
                          > */}
                            <i className="fa-solid fa-building"></i>{" "}
                            {project.thumb2}
                          {/* </Link> */}
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </Fragment>
  );
};

export default PortfolioPage;
