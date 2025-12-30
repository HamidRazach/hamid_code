"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Testimonial.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const reviewsData = [
   {
    id: 1,
    name: "Arlene Miles",
    avatar: "A",
    shortText: "The client is pleased with Digital Minds On's performance…",
    fullText:
      "“The client is pleased with Digital Minds On's performance. They successfully established the system's foundation, meeting expectations. Their effective project management ensures timely task delivery and prompt issue resolution, making the engagement a success.”",
    googleLink: "https://google.com",
  },
  {
    id: 2,
    name: "Shelley Zalis",
    avatar: "S",
    shortText: "The client was thoroughly impressed with the WordPress…",
    fullText:
      "“The client was thoroughly impressed with the WordPress development services. The team showcased exceptional skills, delivering a well-organized and timely project. Their proactive communication and professionalism made the entire process smooth and enjoyable.”",
    googleLink: "https://google.com",
  },
  {
    id: 3,
    name: "Muhammad Hamid Raza",
    avatar: "H",
    shortText: "Digital Minds On is an innovative technology company…",
    fullText:
      "Digital Minds On is an innovative technology company specializing in diverse digital services aimed at empowering businesses in the online world. Our expertise spans Web Development, where we build responsive and engaging websites; Game Development, creating captivating gaming experiences; and Software Development, delivering customized solutions that boost efficiency. We also offer Digital Marketing services, developing strategic campaigns to enhance online visibility and engagement. With a commitment to innovation and excellence, Digital Minds On partners with clients to bring their digital visions to life, driving measurable success and growth in the rapidly evolving digital landscape.",
    googleLink: "https://google.com",
  },
  {
    id: 4,
    name: "Digital Code Solutions",
    avatar: "D",
    shortText: "I had the pleasure of working with Digital Minds On, and…",
    fullText: "I had the pleasure of working with Digital Minds On, and I must say, they did an excellent job on my website. The design is clean, professional, and highly functional. Their attention to detail and quality of work is truly impressive. The team was also very responsive and helpful throughout the entire process. I highly recommend their services to anyone looking for top-notch web development.",
    googleLink: "https://google.com",
  },
  {
    id: 5,
    name: "Ahmad Khan",
    avatar: "A",
    shortText: "I had the pleasure of working with Digital Minds On, and…",
    fullText: "I had the pleasure of working with Digital Minds On, and they did an outstanding job on my website. The design is sleek, modern, and user-friendly. Their team was professional, responsive, and delivered everything I asked for with great attention to detail. I highly recommend their services for anyone looking for high-quality web development.",
    googleLink: "https://google.com",
  },
  {
    id: 6,
    name: "Amir Sohail",
    avatar: "A",
    shortText: "Digital Mind On is a top-notch software house that truly…",
    fullText:
      "Digital Mind On is a top-notch software house that truly stands out in the tech industry. Their team of experts is innovative, professional, and highly committed to delivering quality solutions. Whether it's web development, mobile applications, or custom software, they excel in providing tailored services that meet and exceed expectations. Their approach to problem-solving is commendable, and they ensure every project is handled with precision and creativity. I’ve witnessed their dedication to staying up-to-date with the latest technologies, ensuring their clients receive cutting-edge solutions. If you’re looking for a reliable and skilled partner for your digital needs, Digital Mind On is the place to go. Highly recommended!",
    googleLink: "https://google.com",
  },
  {
    id: 7,
    name: "HF Designs LLC",
    avatar: "H",
    shortText: "I hired SEO services from Digital Minds On, and they did…",
    fullText:
      "I hired SEO services from Digital Minds On, and they did a really great job. I am very satisfied with their work and highly recommend them to anyone looking for professional SEO services.",
    googleLink: "https://google.com",
  },
  {
    id: 8,
    name: "Ahmad Ansari",
    avatar: "A",
    shortText: "Digital Minds delivers exceptional software solutions…",
    fullText:
      "Digital Minds delivers exceptional software solutions with a strong focus on quality and innovation. Their team is professional, efficient, and dedicated to exceeding client expectations.",
    googleLink: "https://google.com",
  },
  {
    id: 9,
    name: "Muhammad hammad",
    avatar: "M",
    shortText: "They are very cooperative, and their work in web development…",
    fullText:
      "They are very cooperative, and their work in web development is just awesome. They developed my website in a very professional manner. Highly recommended!",
    googleLink: "https://google.com",
  },
];

export default function GoogleReviews() {
  const [modalData, setModalData] = useState(null);

  return (
    <section className={styles.reviewsWrapper}>
      {/* Header */}
      <Fade direction="up" triggerOnce>
      <div className={styles.header}>
        <div className={styles.goolge_head}>
          <h2>
            <span className={styles.google}>
              {" "}
              <Image
                width={100}
                height={40}
                src="/images/landing_page/Google_2015_logo.svg"
                alt="Google"
                className={styles.googleLogo}
              />
            </span>{" "}
            Reviews
          </h2>
          <div className={styles.rating}>
            <strong>5.0</strong> ⭐⭐⭐⭐⭐ <span>(21)</span>
          </div>
        </div>
        <Link className={styles.btn} href="/contact">
          <span className={styles.btn_label} data-text="Review us on Google">
           Review us on Google
          </span>
          <span className={styles.btn_icon}>
            <i className="fa-solid fa-arrow-up-right" />
          </span>
        </Link>
      </div>
      </Fade>

      {/* ✅ Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className={styles.slider}
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id}>
            <div className={styles.card}>
              <div className={styles.user}>
                <div className={styles.avatar}>{review.avatar}</div>
                <h4>{review.name}</h4>
                <span className={styles.verified}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                    class="ReviewVerifiedBadge__StyledVerifiedBadge-sc-65b01a5d-0 YFtnK es-verified-badge-icon"
                  >
                    <path
                      fill="#197BFF"
                      d="M6.757.236a.35.35 0 0 1 .486 0l1.106 1.07a.35.35 0 0 0 .329.089l1.493-.375a.35.35 0 0 1 .422.244l.422 1.48a.35.35 0 0 0 .24.24l1.481.423a.35.35 0 0 1 .244.422l-.375 1.493a.35.35 0 0 0 .088.329l1.071 1.106a.35.35 0 0 1 0 .486l-1.07 1.106a.35.35 0 0 0-.089.329l.375 1.493a.35.35 0 0 1-.244.422l-1.48.422a.35.35 0 0 0-.24.24l-.423 1.481a.35.35 0 0 1-.422.244l-1.493-.375a.35.35 0 0 0-.329.088l-1.106 1.071a.35.35 0 0 1-.486 0l-1.106-1.07a.35.35 0 0 0-.329-.089l-1.493.375a.35.35 0 0 1-.422-.244l-.422-1.48a.35.35 0 0 0-.24-.24l-1.481-.423a.35.35 0 0 1-.244-.422l.375-1.493a.35.35 0 0 0-.088-.329L.236 7.243a.35.35 0 0 1 0-.486l1.07-1.106a.35.35 0 0 0 .089-.329L1.02 3.829a.35.35 0 0 1 .244-.422l1.48-.422a.35.35 0 0 0 .24-.24l.423-1.481a.35.35 0 0 1 .422-.244l1.493.375a.35.35 0 0 0 .329-.088L6.757.236Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M9.065 4.85a.644.644 0 0 1 .899 0 .615.615 0 0 1 .053.823l-.053.059L6.48 9.15a.645.645 0 0 1-.84.052l-.06-.052-1.66-1.527a.616.616 0 0 1 0-.882.645.645 0 0 1 .84-.052l.06.052 1.21 1.086 3.034-2.978Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p>{review.shortText}</p>
              <button
                className={styles.readMore}
                onClick={() => setModalData(review)}
              >
                Read more
              </button>
              <Image
                width={40}
                height={40}
                src="/images/landing_page/Google_2015_logo.svg"
                alt="Google"
                className={styles.googleLogo}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {modalData && (
        <div className={styles.modalOverlay} onClick={() => setModalData(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setModalData(null)}
            >
              ✖
            </button>
            <div className={styles.modalUser}>
              <div className={styles.avatar}>{modalData.avatar}</div>
              <h4>{modalData.name}</h4>
            </div>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>{modalData.fullText}</p>
            <Link
              href={modalData.googleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={40}
                height={40}
                src="/images/landing_page/Google_2015_logo.svg"
                alt="Google"
                className={styles.googleLogo}
              />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
