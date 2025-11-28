import React from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import styles from './Awards_recognition.module.scss';

const awards = [
  {
    img: '/images/slider/dot-com.webp',
    alt: 'Dot Comm',
    title: 'Dot Comm',
    description: 'Excellence in Web Creativity & Digital Communication',
  },
  {
    img: '/images/slider/inc-5000.webp',
    alt: 'INC 5000',
    title: 'INC. 5000',
    description: "America's Fastest Growing Companies",
  },
  {
    img: '/images/slider/rank-watch.webp',
    alt: 'Rank Watch',
    title: 'Rank Watch',
    description: 'Top Web Development Agencies 2023',
  },
  {
    img: '/images/slider/Horizon_Sliver.webp',
    alt: 'Horizon Award',
    title: 'Horizon Award',
    description: 'Silver Awards Winner 2020',
  },
  {
    img: '/images/slider/Clutch.webp',
    alt: 'Clutch',
    title: 'Clutch',
    description: 'Top 1000 Companies',
  },
  {
    img: '/images/slider/right-firms.webp',
    alt: 'Right firms',
    title: 'Right firms',
    description: 'Top Mobile App Development Company 2023',
  },
  {
    img: '/images/slider/top_developer.webp',
    alt: 'Top Developers',
    title: 'Top Developers',
    description: 'Top Entertainment App Developers',
  },
  {
    img: '/images/slider/expertise-logo.webp',
    alt: 'Expertise',
    title: 'Expertise',
    description: 'Best Mobile App Developer',
  },
  {
    img: '/images/slider/top_Reated.webp',
    alt: 'Software World',
    title: 'Software World',
    description: 'Top App Development Companies',
  },
  {
    img: '/images/slider/web-excellence-award.webp',
    alt: 'Web Excellence',
    title: 'Web Excellence',
    description: 'Web Excellence Awards',
  },
  {
    img: '/images/slider/Horizon.webp',
    alt: 'Horizon Award',
    title: 'Horizon Award',
    description: 'Gold Awards Winner 2020',
  },
];

export default function AwardsSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="row">
      <div className="col-12 mt-auto mb-auto">
        <div className={`mySwiper overflow-x-hidden ${styles.swiperWrapper}`}>
          <Slider {...settings}>
            {awards.map((item, idx) => (
              <div key={idx} className="swiper-slide">
                <div className={styles.awards_item}>
                  <div className={styles.awards_img}>
                    <Image
                      src={item.img}
                      alt={item.alt}
                      className="img-fluid"
                      width={180}
                      height={130}
                    />
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
