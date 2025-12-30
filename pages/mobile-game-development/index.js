"use client";
import React, { Fragment } from "react";
import Head from "next/head";
import ConnectExpert from "../../components/Connect_Experts";
import Trustedlogo from "../../components/Trustedtop_brands";
import Game_service from "../../components/mobile-game-development/game_services";
import Rating_mobile_game from "../../components/mobile-game-development/rating_mobile_game";
import Key_games from "../../components/mobile-game-development/key_games";
import Case_study from "../../components/mobile-game-development/case_study";
import Project_ios_cta from "../../components/mobile-game-development/project_ios_cta";
import Develop_servies from "../../components/mobile-game-development/develop_servies";
import Game_technologyuse from "../../components/mobile-game-development/game-technologyuse";
import Associates_slider from "../../components/mobile-game-development/associatesslider";
import Development_Workflow from "../../components/mobile-game-development/Development-workflow";
import Redefinepatient_services from "../../components/mobile-game-development/redefinepatient_services";
import Development_categories from "../../components/mobile-game-development/Development_categories";
import Preks_game from "../../components/mobile-game-development/Preks_game";
import Game_development from "../../components/mobile-game-development/game_Development";
import Awards_recognitions from "../../components/about_page/Awards_recognitions";
import Why_choose from "../../components/mobile-game-development/why_choose";
import Partner_usa from "../../components/mobile-game-development/partner-usa";
import WebServicesBanner from "../../components/WebBanner/WebServicesBanner";
import { Mobile_gamebannerData } from "../../constant/services/mobile-game-development";


const Mobileapp = () => {
  return (
    <Fragment>
       <Head>
        <title>Mobile Game Development Services | Digital Minds On</title>
        <meta 
          name="description" 
          content="Digital Minds On specializes in mobile game development. We design and develop fun, interactive, and high-performance games for Android and iOS platforms." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/mobile-game-development" 
        />
      </Head>
      <div>
        <main className="page_content">
          <WebServicesBanner data={Mobile_gamebannerData}/>
          <Trustedlogo />
          <Game_service />
          <Rating_mobile_game />
          <Key_games />
          <Case_study />
          <Project_ios_cta />
          <Develop_servies />
          <Game_technologyuse />
          <Associates_slider />
          <Development_Workflow />
          <Redefinepatient_services />
          <Development_categories />
          <Preks_game />
          <Game_development />
          <Why_choose />
          <Partner_usa />
          <Awards_recognitions />
          <ConnectExpert />
        </main>
      </div>
    </Fragment>
  );
};
export default Mobileapp;

