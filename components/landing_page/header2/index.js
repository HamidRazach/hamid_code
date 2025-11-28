"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeaderAnimate from "../../header/HeaderAnimate";
import MobileHeader from "../mobile_header";
import { Link } from "react-scroll"; // ✅ react-scroll import

const Header2 = () => {
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site_header site_header_1">
      <div className="header_top text-center">
        <div className="container">
          <HeaderAnimate />
        </div>
      </div>

      <div
        className={`header_bottom stricky ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link
                  to="home"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src="/images/site_logo/site_logo_3.png"
                    alt="Digitalmindson Software Company"
                    width={200}
                    height={52}
                  />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li>
                      <Link
                        to="home"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="about"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="services"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="why"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                      >
                        Why Choose Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="portfolio"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contact"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Buttons */}
            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    type="button"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={600}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    className="btn btn-outline-light"
                    style={{ cursor: "pointer" }}
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

        {/* Mobile Menu */}
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(false)}
              ></div>
              <nav className="xb-header-nav">
                {/* ✅ Pass close function */}
                <MobileHeader closeMenu={() => setMobailState(false)} />
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

export default Header2;
