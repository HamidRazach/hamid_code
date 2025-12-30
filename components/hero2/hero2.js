import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Hero2 = (props) => {
  return (
    <section className="software_company_hero_section xb-hidden position-relative overflow-hidden" style={{ paddingTop: "180px" }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="bg-video position-absolute w-100 h-100 object-fit-cover aspect-ratio: 16 / 9;"
        style={{ top: 0, left: 0, zIndex: 0,   minHeight: "100dvh", objectFit: "cover", }}
      >
        <source src="/images/hero/home-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for dark effect) */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>

      {/* Main Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100">
          <div className="mt-auto mb-auto col-xxl-7 col-xl-8 col-lg-7 col-md-12 col-12">
            <div className="content_wrap">
              <Fade direction="up" triggerOnce delay={100}>
              <div className="heading_focus_text has_underline text-white d-inline-flex">
                Perfect Company Solution
              </div>
              </Fade>
              <Fade direction="up" triggerOnce delay={200}>
              <h1 className="text-white">
                We are a <mark>Software</mark> Development Company.
              </h1>
              </Fade>
              <Fade direction="up" triggerOnce delay={300}>
              <p>
                Trusted by Leading Companies across the World. Trusted by 50+
                happy clients, across North America, Europe, Asia and Africa,
                ranging from startups to Fortune 70 companies.
              </p>
              </Fade>
              <Fade direction="up" triggerOnce delay={400}>
              <ul className="step_list text-white unordered_list_block">
                <li>Focus on quality first</li>
                <li>Get to the market on time</li>
              </ul>
              </Fade>
              <Fade direction="up" triggerOnce delay={500}>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link className="btn" href="/contact">
                    <span className="btn_label" data-text="Contact Us Today!">
                      Contact Us Today!
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="hotline_block" href="tel:+923086582833">
                        <span className="hotline_icon">
                          <i className="fa-solid fa-phone-volume"></i>
                        </span>
                  </Link>
                </li>
                <li className="phone_section">
                  <Link href="tel:+923086582833">
                    <span className="hotline_content">
                       <strong className="text-white">(+92) 308 6582833</strong>
                    </span>
                  </Link>
                  <Link href="tel:+447426472765">
                   <span className="hotline_content">
                    <strong className="text-white">(+44) 7426 472765</strong>
                  </span>
                  </Link>
                </li>
              </ul>
              </Fade>
            </div>
          </div>
          <div className="col-12">
               <div className="feat">
              <div className="feat-wrap">
                <div className="title">Featured In</div>
              </div>
              <div className="feature-list">
                <div className="featured_item">
                  <div className="featured_img">
                   <Image src="/images/clients/web-client/inc-logo.webp" height={34} width={94} />
                  </div>
                </div>
                <div className="featured_item">
                  <div className="featured_img">
                   <Image src="/images/clients/web-client/forbes-logo.webp" height={34} width={114} />
                  </div>
                </div>
                <div className="featured_item">
                  <div className="featured_img">
                  <Image src="/images/clients/web-client/yec-logo.webp" height={34} width={64} />
                  </div>
                </div>
                <div className="featured_item">
                  <div className="featured_img">
                   <Image src="/images/clients/web-client/entrepreneur-logo.webp" height={34} width={180} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
