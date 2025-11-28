import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const testimonial = [
  {
    id: '01',
    tImg: '/images/avatar/avatar_7.png',
    Logo: '/images/clients/client_logo_4.png',
    Des: "From Fiver: M Awais Raza delivered exceptional services, showcasing strategic thinking, data depth, and innovation that truly impressed. Working with them was a breeze due to their high level of cooperation, going above and beyond, and quick responsiveness. They not only delivered earlier than expected but also nailed the task on the first try. Definitely someone I'll be relying on moving forward.",
    Name: 'Brett kingstree',
    sub: 'CEO kingstree',
    country: 'Construction Sherwood Park, Alberta',
    flag: '/images/flag/canada.png',
  },
  {
    id: '02',
    tImg: '/images/avatar/avatar_5.png',
    Logo: '/images/clients/logo-path-finder.webp',
    Des: "Thank you, Digital Minds On! Your team is highly professional and competent. We're impressed by the outstanding quality of your services and would love to collaborate with you long-term.",
    Name: 'Jonathan Borbon',
    sub: 'IT Business Analyst',
    country: 'Australia',
    flag: '/images/flag/australia.png',
  },
  {
    id: '03',
    tImg: '/images/avatar/avatar_6.png',
    Logo: '/images/clients/logo-white.png',
    Des: "The client was thoroughly impressed with the Web and Mobile App development services. The team showcased exceptional skills, delivering a well-organized and timely project. Their proactive communication and professionalism made the process smooth and enjoyable.",
    Name: 'Frank Goodman',
    sub: 'CEO ROI Pros',
    country: 'Washington, District of Columbia, United States',
    flag: '/images/flag/united_state.png',
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="deals_winner_customers">
          <h3 className="title_text">
            <mark>50+</mark> customers win deals with Digital Minds On
          </h3>
          <div className="row">
            <div className="col-6">
              <div className="review_short_info">
                <div className="icon">
                  <Image
                    src="/images/icons/icon_c.svg"
                    alt="C Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <ul className="rating_block unordered_list">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-star fa-fw"></i>
                    </li>
                  ))}
                </ul>
                <div className="review_counter">From <b>50+</b> reviews</div>
              </div>
            </div>
            <div className="col-6">
              <div className="review_short_info">
                <div className="icon">
                  <Image
                    src="/images/icons/icon_g2.svg"
                    alt="G2 Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <ul className="rating_block unordered_list">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-star fa-fw"></i>
                    </li>
                  ))}
                </ul>
                <div className="review_counter">From <b>50+</b> reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="review_onecol_wrapper">
          <div className="review_onecol_carousel">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              speed={1800}
              parallax={true}
              ref={swiperRef}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {testimonial.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="review_block_2">
                    <p className="review_commtent">{t.Des}</p>
                    <div className="d-md-flex justify-content-md-between">
                      <div className="review_admin">
                        <div className="review_admin_image">
                          <Image
                            src={t.tImg}
                            alt={t.Name}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="review_admin_info">
                          <h4 className="review_admin_name">{t.Name}</h4>
                          <span className="review_admin_designation">{t.sub}</span>
                          <div className="review_admin_country">
                            <span className="country_flag">
                              <Image
                                src={t.flag}
                                alt="Flag"
                                width={20}
                                height={20}
                              />
                            </span>
                            <span className="country_text">{t.country}</span>
                          </div>
                        </div>
                      </div>
                      <div className="review_admin_logo">
                        <Image
                          src={t.Logo}
                          alt="Client Logo"
                          width={120}
                          height={60}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="carousel_arrows_nav">
              <button ref={prevRef} type="button" className="r1cc-swiper-button-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button ref={nextRef} type="button" className="r1cc-swiper-button-next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
