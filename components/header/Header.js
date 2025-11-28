import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import HeaderAnimate from "./HeaderAnimate";
import Global_header from "../global";

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site_header site_header_1">
      <div className="header_top text-center">
        <div className="container">
          <HeaderAnimate />
        </div>
      </div>
      <div
        className={`header_bottom stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" href="/">
                  <Image
                    src="/images/site_logo/site_logo_3.png"
                    alt="Digitalmindson Software Company"
                    width={200}
                    height={52}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    {/* home */}
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        Home
                      </Link>
                    </li>
                   {/* services */}
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="service"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="megamenu_pages_wrapper mb-5">
                                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 py-3">
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="mobile-app-development">
                                          Mobile App Development
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="android-development-services">
                                          <MdKeyboardDoubleArrowRight /> Android
                                          App Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="kotlin-app-development-services">
                                          <MdKeyboardDoubleArrowRight /> Kotlin
                                          App Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="wearable-app-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          Wearable App Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="iot-app-development-services">
                                          <MdKeyboardDoubleArrowRight /> IOT App
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="ios-app-development-services">
                                          <MdKeyboardDoubleArrowRight /> iOS App
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="react-native-app-development-services">
                                          <MdKeyboardDoubleArrowRight /> React
                                          Native Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="flutter-app-development-services">
                                          <MdKeyboardDoubleArrowRight /> Flutter
                                          App Development
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="mobile-game-development">
                                          Game Development
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="unreal-game-development-services">
                                          <MdKeyboardDoubleArrowRight /> Unreal
                                          Game Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="unity-game-development-services">
                                          <MdKeyboardDoubleArrowRight /> Unity
                                          Game Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="nft-game-development-services">
                                          <MdKeyboardDoubleArrowRight /> NFT
                                          Game Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="3d-game-development-services">
                                          <MdKeyboardDoubleArrowRight /> 3D Game
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="ios-game-development-services">
                                          <MdKeyboardDoubleArrowRight /> iOS
                                          Game Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="android-game-development-services">
                                          <MdKeyboardDoubleArrowRight /> Android
                                          Game Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="ar-vr-app-development-services">
                                          <MdKeyboardDoubleArrowRight /> AR/VR
                                          App Development
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="web-development-services">
                                          Web Development
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="ecommerce-website-development">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          eCommerce Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="magento-development-services">
                                          <MdKeyboardDoubleArrowRight /> Magento
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="shopify-development-services">
                                          <MdKeyboardDoubleArrowRight /> Shopify
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="woocommerce-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          WooCommerce Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="wordpress-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          WordPress Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="bigcommerce-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          BigCommerce Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="webflow-development-services">
                                          <MdKeyboardDoubleArrowRight /> Webflow
                                          Development
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="ui-ux-design">
                                          UI/UX Design Services
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="mobile-app-design-services">
                                          <MdKeyboardDoubleArrowRight /> Mobile
                                          App Design
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="mvp-development-services">
                                          <MdKeyboardDoubleArrowRight /> MVP
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="prototype-development-services">
                                          <MdKeyboardDoubleArrowRight /> Design
                                          Prototyping
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="responsive-web-design-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          Responsive Web Design
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="ecommerce-web-design-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          E-Commerce Design
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="custom-web-design-services">
                                          <MdKeyboardDoubleArrowRight /> Web
                                          Design
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="figma-ui-ux-services">
                                          <MdKeyboardDoubleArrowRight /> Figma
                                          UI/UX
                                        </Link>
                                      </div>
                                      {/* <div className="anchor_div">
                                        <Link href="web-portal-development">
                                          <MdKeyboardDoubleArrowRight /> Web Portal Development
                                        </Link>
                                      </div> */}
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="custom-software-development">
                                          Software Development
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="enterprise-software-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          Enterprise Software
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="saas-development-services">
                                          <MdKeyboardDoubleArrowRight /> SaaS
                                          Application Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="human-resource-software-development-services">
                                          <MdKeyboardDoubleArrowRight /> HRMS
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="crm-software-development-services">
                                          <MdKeyboardDoubleArrowRight /> CRM
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="ai-software-development-services">
                                          <MdKeyboardDoubleArrowRight /> AI
                                          Software Development{" "}
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="front-end-development-services">
                                          Front-End Development{" "}
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="angular-development-services">
                                          <MdKeyboardDoubleArrowRight /> Angular
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="vuejs-development-services">
                                          <MdKeyboardDoubleArrowRight /> VueJS
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="express-js-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          ExpressJS Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="metrojs-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          MeteorJS Development
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        {" "}
                                        <Link href="back-end-development-services">
                                          Back-End Development{" "}
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="php-development-services">
                                          <MdKeyboardDoubleArrowRight /> PHP
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="laravel-development-services">
                                          <MdKeyboardDoubleArrowRight /> Laravel
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="codeIgniter-development-services">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          CodeIgniter Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="reactjs-development-services">
                                          <MdKeyboardDoubleArrowRight /> ReactJS
                                          Development
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="nodejs-development-services">
                                          <MdKeyboardDoubleArrowRight /> NodeJS
                                          Development
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                        <span className="h3">
                                          {" "}
                                          <Link href="digital-marketing-services">Digital
                                            Marketing Services{" "}</Link>
                                        </span>
                                        <div className="anchor_div">
                                          <Link href="digital-marketing-services">
                                            <MdKeyboardDoubleArrowRight /> Social Media Marketing {" "}
                                          </Link>
                                        </div>
                                          <div className="anchor_div">
                                          <Link href="digital-marketing-services">
                                            <MdKeyboardDoubleArrowRight /> Search Engine Marketing {" "}
                                          </Link>
                                        </div>
                                          <div className="anchor_div">
                                          <Link href="seo-services">
                                            <MdKeyboardDoubleArrowRight /> Search Engine optimization {" "}
                                          </Link>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        {" "}
                                        <Link href="#">AI &amp; ML</Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          AI-Powered Solutions{" "}
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Natural
                                          Language Processing
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> AI
                                          Chatbots &amp; Virtual Assistants
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight />{" "}
                                          Predictive Analytics with AI
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> MLA
                                          Development
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* solution */}
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="#"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Solutions
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mega_menu">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-xs-12 col-sm-3 col-md-3">
                                      <div className="drop_menu">
                                        <span className="h3">
                                          <Link href="cyber-security-services">Cybersecurity</Link>
                                        </span>
                                        <div className="anchor_div">
                                          <Link href="penetration-testing-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Penetration Testing
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="vulnerability-assessment-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Vulnerability Assessment
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="siem-monitoring-services">
                                            <MdKeyboardDoubleArrowRight />
                                            SIEM Monitoring
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="cybersecurity-consulting-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Security Consulting
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3 col-md-3">
                                      <div className="drop_menu">
                                        <span className="h3">
                                          <Link href="qa-testing-services">
                                            QA Testing &amp; Support
                                          </Link>
                                        </span>
                                        <div className="anchor_div">
                                          <Link href="software-testing-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Software Testing
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="app-support-and-maintenance">
                                            <MdKeyboardDoubleArrowRight />
                                            Support &amp; Maintenance
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="mobile-app-testing-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Mobile Testing
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="api-integration-services">
                                            <MdKeyboardDoubleArrowRight />
                                            API Integration
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3 col-md-3">
                                      <div className="drop_menu">
                                        <span className="h3">
                                          <Link href="consulting-services">
                                            Consulting &amp; Strategy
                                          </Link>
                                        </span>
                                        <div className="anchor_div">
                                          <Link href="it-consulting-services">
                                            <MdKeyboardDoubleArrowRight />
                                            IT Consulting
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="product-management-consulting">
                                            <MdKeyboardDoubleArrowRight />
                                            Product Managment
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="startup-consulting-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Startup Consulting
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="devops-consulting-services">
                                            <MdKeyboardDoubleArrowRight />
                                            DevOps
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3 col-md-3">
                                      <div className="drop_menu">
                                        <span className="h3">
                                          <Link href="data-analytics-services">
                                            Data Analytics &amp; Consulting
                                          </Link>
                                        </span>
                                        <div className="anchor_div">
                                          <Link href="data-insight-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Data Analytics
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="data-consulting-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Data Consulting
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="data-engineering-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Data Engineering
                                          </Link>
                                        </div>
                                        <div className="anchor_div">
                                          <Link href="data-management-services">
                                            <MdKeyboardDoubleArrowRight />
                                            Data Management
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* hiring */}
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="#"
                        id="services_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Hiring
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="services_submenu"
                      >
                        <div className="container">
                          <div className="row justify-content-lg-between">
                            <div className="col-lg-12">
                              <div className="container">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="#">
                                        Hire Mobile App Developers
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          iOS Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Android Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Flutter Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          React Native Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Ionic Developers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                      <span className="h3">
                                          <Link href="#">
                                        Hire Web Developers
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          MEAN Stack Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Full Stack Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          MERN Stack Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          ASP.NET Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Kotlin Developers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                      <span className="h3">
                                          <Link href="#">
                                        Hire Game Developers
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Unreal Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Unity Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire 3D
                                          Modeler
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire 2D
                                          Game Artist
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          AR/VR Game Developers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                      <span className="h3">
                                        <Link href="#">
                                        E-Commerce &amp; CMS
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          {" "}
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Magento Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          {" "}
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          WordPress Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          {" "}
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Shopify Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          WooCommerce Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Shopware Developers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                        <span className="h3">
                                          <Link href="#">
                                          Hire Front-End Developers
                                           </Link>
                                        </span>
                                     
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Backbone Js Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          EmberJs Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          React Js Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          AngularJS Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Next.js Developers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                        <span className="h3">
                                          <Link href="#">
                                          Hire Back-End Developers
                                          </Link>
                                        </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Ruby On Rails Developer
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Java Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Node.js Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Scala Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          PHP Developers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                      <span className="h3">
                                          <Link href="#">
                                          Hire Designers
                                          </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          UI/UX Designer
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire 2D
                                          Animators
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire 3D
                                          Animators
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Illustrators
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          Character Designers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-3 col-md-3">
                                    <div className="drop_menu">
                                      <span className="h3">
                                         <Link href="#">
                                        Cloud Technologies
                                        </Link>
                                      </span>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          AWS Developers
                                        </Link>
                                      </div>
                                      <div className="anchor_div">
                                        <Link href="#">
                                          <MdKeyboardDoubleArrowRight /> Hire
                                          AWS Lambda Developers
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* global Area */}
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="#"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Global Area
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                      <Global_header />
                      </div>
                    </li>

                    {/* contact */}
                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    className="btn btn-outline-light"
                    href="/contact"
                  >
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
       <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(false)}
              ></div>
              <nav className="xb-header-nav">
                {/* Pass isOpen prop */}
                <MobileMenu closeMenu={() => setMobailState(false)} isOpen={mobailActive} />
              </nav>
            </div>
          </div>

          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>

      </div>
    </header>
  );
};

export default Header;
