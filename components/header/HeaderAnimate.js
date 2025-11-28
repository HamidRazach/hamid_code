"use client";
import React, { useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import Link from "next/link";

const contactItems = [
  {
    type: "phone",
    icon: <FaPhoneAlt />,
    link: "tel:+923086582833",
    text: "+92 3086582833",
  },
  {
    type: "email",
    icon: <FaEnvelope />,
    link: "mailto:info@digitalmindson.com",
    text: "info@digitalmindson.com",
  },
];

// Repeat items for smooth infinite scroll
const fullItems = Array(20).fill(contactItems).flat();

const HeaderAnimate = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".header-slider-wrapper", {
        xPercent: -50,
        repeat: -1,
        duration: 60, // slow and smooth
        ease: "none", // constant speed
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-white overflow-hidden">
      <div className="container-fluid py-2" ref={sliderRef}>
        <div
          className="d-flex header-slider-wrapper flex-nowrap"
          style={{ width: "max-content" }}
        >
          {fullItems.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center gap-2 px-3"
              style={{ whiteSpace: "nowrap" }}
            >
              <span size={16}>{item.icon}</span>
              <h6 className="mb-0">
                <Link
                  href={item.link}
                  className="text-white text-decoration-none"
                >
                  {item.text}
                </Link>
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimate;
