import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const partners = [
  { pImg: "/images/clients/logo-white.png" },
  { pImg: "/images/clients/logo2.svg" },
  { pImg: "/images/clients/logo-path-finder.webp" },
  { pImg: "/images/clients/client_logo_3.webp" },
  { pImg: "/images/clients/client_logo_4.png" },
  { pImg: "/images/clients/client_logo_5.png" },
  { pImg: "/images/clients/client_logo_1.png" },
  { pImg: "/images/clients/client_logo_2.png" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: { slidesToShow: 7, slidesToScroll: 1 },
    },
    {
      breakpoint: 991,
      settings: { slidesToShow: 5, slidesToScroll: 1 },
    },
    {
      breakpoint: 767,
      settings: { slidesToShow: 4, slidesToScroll: 1 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 450,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 350,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const FeaturePartners = () => {
  return (
    <div className="feature_partners_section">
      <div className="container position-relative">
        <div className="title_text text-white">Our Featured Partner's</div>
        <div className="client_logo_carousel">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div className="client_logo_item" key={index}>
                <Image
                  src={partner.pImg}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={60}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturePartners;
