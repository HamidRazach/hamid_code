"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Footerdata from "./Footerdata";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

var settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Footer = (props) => {
  return (
    <footer className="site_footer footer_layout_2 section_decoration">
      <div className="container">
        <div className="service_pill_carousel swiper">
          <Slider {...settings}>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="web-development-services"
                aria-label="Web Development Services"
                className="service_pill_block"
              >
                <i className="fa-solid fa-check"></i>
                <span>Custom Web Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="mobile-app-development"
                className="service_pill_block"
                aria-label="Mobile App Development"
              >
                <i className="fa-solid fa-check"></i>
                <span>App Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="web-development-services"
                className="service_pill_block"
                aria-label="Web Development Services"
              >
                <i className="fa-solid fa-check"></i>
                <span>Web Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="custom-software-development"
                className="service_pill_block"
                aria-label="Custom Software Development"
              >
                <i className="fa-solid fa-check"></i>
                <span>Software Solution</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="enterprise-software-development-services"
                className="service_pill_block"
                aria-label="Enterprise Software Development services"
              >
                <i className="fa-solid fa-check"></i>
                <span>Enterprise Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="#"
                className="service_pill_block"
                aria-label="Devops Services"
              >
                <i className="fa-solid fa-check"></i>
                <span>Devops Services</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="web-development-services"
                className="service_pill_block"
                aria-label="Custom Web Apps"
              >
                <i className="fa-solid fa-check"></i>
                <span>Custom Web Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="mobile-app-development"
                className="service_pill_block"
                aria-label="App Development"
              >
                <i className="fa-solid fa-check"></i>
                <span>App Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="web-development-services"
                className="service_pill_block"
                aria-label="Web Development"
              >
                <i className="fa-solid fa-check"></i>
                <span>Web Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="custom-software-development"
                className="service_pill_block"
                aria-label="Software Solution"
              >
                <i className="fa-solid fa-check"></i>
                <span>Software Solution</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="enterprise-software-development-services"
                className="service_pill_block"
                aria-label="Enterprise Apps"
              >
                <i className="fa-solid fa-check"></i>
                <span>Enterprise Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                onClick={ClickHandler}
                href="#"
                className="service_pill_block"
                aria-label="Devops Services"
              >
                <i className="fa-solid fa-check"></i>
                <span>Devops Services</span>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
      <Footerdata />
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © 2024 <Link href="/">Digital Minds On</Link> , All rights
            reserved.
          </p>
          <ul className="icon_list unordered_list">
            <li>
              <Link
                href="https://www.youtube.com/@Digitalmindson-com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/digitalmindson/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/digital-minds-on"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://web.facebook.com/people/Digital-Minds-On/61565893842788/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@digitalmindson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok profile"
              >
                <i className="fa-brands fa-tiktok"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
