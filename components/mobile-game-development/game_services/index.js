import React from "react";
import styles from "./Game.module.scss";
import Link from "next/link";


export default function Game_service() {
  return (
    <section className={styles.voice_services}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <h2>
              Digitalmindson Versatile <span>Mobile Game Development</span> Services
            </h2>
            <Link className={styles.btn} href="/contact">
              <span className={styles.btn_label} data-text="Launch Game App">
                Launch Game App
              </span>
              <span className={styles.btn_icon}>
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="mt-3 mt-md-0 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
            <p>
              A mobile game development studio is where your wildest gaming
              fantasies become reality, and that’s exactly what we do at
              Digitalmindson. We craft seamless, immersive gameplay experiences on
              iOS, Android, and cross-platform devices, delivering top-tier
              mobile game development services that create unforgettable
              moments. Innovation, quality, and engagement is what our mobile
              game development company is all about, and that’s exactly what we
              deliver.
            </p>
          </div>
        </div>
        <div className="mt-sm-3 mt-md-4 row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_svg}>
                      <svg
                        width={74}
                        height={86}
                        viewBox="0 0 74 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          x="0.953125"
                          y="0.613281"
                          width="72.4219"
                          height="85.0689"
                          fill="url(#pattern0_1562_13725)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1562_13725"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1562_13725"
                              transform="matrix(0.0146829 0 0 0.0125 -0.350825 0)"
                            />
                          </pattern>
                          <image
                            id="image0_1562_13725"
                            width={92}
                            height={80}
                            preserveAspectRatio="none"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.voice_service_head}>
                      <h5>2D Game Development</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      Digitalmindson’s {" "} 2D game development services
                      provide the gateway to vibrant and engaging gaming
                      experiences. From concept to launch, our game experts
                      leverage their expertise in the latest technologies to
                      make highly efficient 2D games. Specializing in simple,
                      highly interactive 2D environments, our experienced team
                      links simplicity with creativity to craft games that the
                      world hasn't witnessed before.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_svg}>
                      <svg
                        width={70}
                        height={76}
                        viewBox="0 0 70 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          x="0.226562"
                          y="0.613281"
                          width="69.75"
                          height={75}
                          fill="url(#pattern0_1562_13728)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1562_13728"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1562_13728"
                              transform="matrix(0.0143369 0 0 0.0133333 -0.132616 0)"
                            />
                          </pattern>
                          <image
                            id="image0_1562_13728"
                            width={79}
                            height={80}
                            preserveAspectRatio="none"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.voice_service_head}>
                      <h5>3D Game Development</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      Being a leading {" "} 3D game development company
                     , Digitalmindson is bringing people back to the revolutionary
                      experience of immersive 3D gaming. Being home to talented
                      developers and designers, we harness cutting-edge
                      technology to build robust, interactive 3D games. Whether
                      you are lookingforan action-packed 3D game or want to give
                      the game fanatics an outstanding VR experience, the
                      experts at Digitalmindson have got you covered.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_svg}>
                      <svg
                        width={71}
                        height={78}
                        viewBox="0 0 71 78"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          y="0.613281"
                          width="70.4922"
                          height={77}
                          fill="url(#pattern0_1562_13731)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1562_13731"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1562_13731"
                              transform="matrix(0.014186 0 0 0.012987 -0.149064 0)"
                            />
                          </pattern>
                          <image
                            id="image0_1562_13731"
                            width={81}
                            height={77}
                            preserveAspectRatio="none"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.voice_service_head}>
                      <h5>Android Game Development</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      Digitalmindson stands out as a preferred choice among the best
                      mobile game development agency, focusing on delivering
                      exceptional Android game development services. We breathe
                      life into your gaming concepts, customizing them to
                      seamlessly integrate with the Android ecosystem. Hire us
                      to use our Android game development services to build
                      multiplayer, battle royale, and RPG Android games for
                      users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_svg}>
                      <svg
                        width={53}
                        height={66}
                        viewBox="0 0 53 66"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          x="0.953125"
                          y="0.421875"
                          width="51.9754"
                          height="65.4336"
                          fill="url(#pattern0_1562_13734)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1562_13734"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1562_13734"
                              transform="matrix(0.0205095 0 0 0.0162912 -0.210062 -0.0726741)"
                            />
                          </pattern>
                          <image
                            id="image0_1562_13734"
                            width={59}
                            height={75}
                            preserveAspectRatio="none"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.voice_service_head}>
                      <h5>iphone Game Development</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      As a leading mobile game app development company, Digitalmindson
                      employs state-of-the-art technology and technical
                      expertise to transform your gaming concepts into reality
                      on iOS devices. Our iPhone app development services
                      provide smooth and engaging user experiences, positioning
                      us as a frontrunner in iOS game development. Join us to
                      use our iOS game development services to build real-time,
                      interactive games for iPhone and tablet users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_svg}>
                      <svg
                        width={65}
                        height={62}
                        viewBox="0 0 65 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          y="0.25"
                          width="64.2969"
                          height="61.5547"
                          fill="url(#pattern0_1562_13737)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1562_13737"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1562_13737"
                              transform="matrix(0.0155529 0 0 0.0162457 -0.150911 -0.150907)"
                            />
                          </pattern>
                          <image
                            id="image0_1562_13737"
                            width={74}
                            height={80}
                            preserveAspectRatio="none"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.voice_service_head}>
                      <h5>Web Game Development</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      Digitalmindson is a renowned mobile game development agency
                      which stands at the forefront of gaming enterprises,
                      featuring a team that merges technical proficiency with
                      creative ingenuity to produce compelling games accessible
                      directly through your web browser. Hire us to use our web
                      game development services to build highly addictive and
                      real-time games for web browsers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                <div className={styles.voice_service_box}>
                  <div className={styles.voice_service_main}>
                    <div className={styles.voice_service_svg}>
                      <svg
                        width={71}
                        height={83}
                        viewBox="0 0 71 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          y="0.804688"
                          width="70.7188"
                          height={82}
                          fill="url(#pattern0_1562_13740)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1562_13740"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1562_13740"
                              transform="matrix(0.0141405 0 0 0.0121951 -0.187804 0)"
                            />
                          </pattern>
                          <image
                            id="image0_1562_13740"
                            width={84}
                            height={82}
                            preserveAspectRatio="none"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.voice_service_head}>
                      <h5>AR/VR Game</h5>
                    </div>
                  </div>
                  <div className={styles.voice_service_content}>
                    <p>
                      As a prominent mobile game app development company,
                      Digitalmindson excels in the domain of AR/VR game development,
                      where innovation converges with reality. Emphasizing
                      seamless interactivity and immersive storytelling,
                      Digitalmindson turns your gaming concepts into virtual realities
                      that captivate audiences. Hire us to use our AR/VR game
                      development services to build multiplayer virtual
                      environment games like Pokemon Go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
