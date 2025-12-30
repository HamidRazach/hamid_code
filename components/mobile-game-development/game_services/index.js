import React from "react";
import styles from "./Game.module.scss";
import Link from "next/link";
import Image from "next/image";


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
                    <Image src="/images/mobile-game-development/2d-game.png" alt="icon" width={55} height={55} />
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
                  <Image src="/images/mobile-game-development/3d-gmae.png" alt="icon" width={55} height={55} />
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
                      <Image src="/images/mobile-game-development/android-game.png" alt="icon" width={55} height={55} />
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
                    <Image src="/images/mobile-game-development/iphone.png" alt="icon" width={55} height={55} />
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
                    <Image src="/images/mobile-game-development/Game-developers.png" alt="icon" width={55} height={55} />
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
                    <Image src="/images/mobile-game-development/ARVR-Game.png" alt="icon" width={55} height={55} />
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
