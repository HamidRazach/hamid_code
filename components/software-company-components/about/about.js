import React from 'react';
import Link from 'next/link'
import Project from '../../../api/project'
import Image from 'next/image';
import Customaccordin from './accordin';
import { Fade } from "react-awesome-reveal";


const About = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <>
    <Fade direction="up" triggerOnce>
    <Customaccordin />
    </Fade>
    <section className="about_and_case_section section_space section_decoration">
      <div className="container">
    
        <div className="pt-10">
          <Fade direction="down" triggerOnce>
            <div className="heading_block text-center text-white">
              <div className="heading_focus_text has_underline d-inline-flex">
                Case Studies
              </div>
              <h2 className="heading_text mb-0">
                Our latest <mark>Case</mark> Studies
              </h2>
            </div>
          </Fade>

          <div className="case_studies_wrapper">
            {Project.slice(6, 9).map((project, prj) => (
              <div className="case_study_block" key={prj}>
                <div className="case_study_image">
                  <Image src={project.pImg} alt="Techco - Cases" width={1000} height={1000}/>
                </div>
                <div className="case_study_content">
                  <h3 className="case_title">
                    <Link onClick={ClickHandler} href={"#"}>{project.title}</Link>
                  </h3>
                  <p>
                    {project.description}
                  </p>
                  <Link onClick={ClickHandler} href="about" className="btn btn-primary">
                    <span className="btn_label" data-text="Read Case">Read Case</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
           <Fade direction="up" delay={300} triggerOnce>
            <div className="btns_group pb-0">
              <Link onClick={ClickHandler} href="/portfolio" className="btn btn-primary">
                <span className="btn_label" data-text="View Case Studies">View Case Studies</span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </section>
    </>
  )
}

export default About;