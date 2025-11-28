import React, { Fragment } from "react";
import Link from "next/link";
import Teams from "../../api/team";
import PageTitle from "../../components/pagetitle/PageTitle";
import CtaSection from "../../components/CtaSection/CtaSection";
import Image from "next/image";

const TeamPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Ensure we have 17 team members, add placeholders if needed
  const displayedTeams = [...Teams];
  while (displayedTeams.length < 17) {
    displayedTeams.push({
      name: "Coming Soon",
      title: "Team Member",
      slug: `coming-soon-${displayedTeams.length}`,
      tImg: "images/team/1.png",
    });
  }

  return (
    <Fragment>
      <main className="page_content about-page">
        <PageTitle
          pageTitle={"Team Member"}
          pagesub={"Members 😍"}
          pageTop={"Team"}
        />
        <section className="about_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 order-lg-last">
                <div className="team_cartoon_image">
                  <Image
                    src="/images/team/team_cartoon_image.webp"
                    alt="Team Cartoon"
                    width={630}
                    height={525}
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Our Dedicated
                      <span className="badge bg-secondary text-white">
                        Team 🙂
                      </span>
                    </div>
                    <h2 className="heading_text">
                      Get to Know Our Expert Digitalmindson Team
                    </h2>
                    <p className="heading_description mb-0">
                      Get acquainted with the powerhouse behind Digitalmindson – our
                      expert team of professionals dedicated to revolutionizing
                      the IT landscape. Comprising.
                    </p>
                  </div>
                  <Link href="contact" className="btn">
                    <span className="btn_label" data-text="Talk to an Expart">
                      Talk to an Expart
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team_section section_space">
          <div className="container">
            <div className="heading_block text-center">
              <div className="heading_focus_text">
                <span className="badge bg-secondary text-white">
                  Our Expert
                </span>
                Team Members 😍
              </div>
              <h2 className="heading_text mb-0">Top Skilled Experts</h2>
            </div>

            <div className="row">
              {displayedTeams.map((team, tm) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={tm}>
                  <div className="team_block">
                    <div className="team_member_image">
                      <div className="image_wrap">
                        <Image
                          src={team.tImg}
                          alt={team.name}
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="team_member_info">
                      <h3 className="team_member_name">
                        {team.name}
                      </h3>
                      <h4 className="team_member_designation">{team.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
    </Fragment>
  );
};

export default TeamPage;
