import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal';


const ContactSection = (props) => {
    return (
        <section className="contact_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact_method_box">
                            <div className="heading_block">
                                <Fade direction="up" triggerOnce>
                                <div className="heading_focus_text has_underline d-inline-flex mb-3">
                                    You Are Here
                                </div>
                                </Fade>
                                <Fade direction="up" delay={80} triggerOnce>
                                <h2 className="heading_text">
                                    Let's Start
                                </h2>
                                </Fade>
                                <Fade direction="up" delay={140} triggerOnce>
                                <p className="heading_description mb-0">Initiating Your Journey to Success and Growth.</p>
                                </Fade>
                            </div>
                             <Fade direction="up" cascade damping={0.15} triggerOnce>
                            <ul className="contact_method_list unordered_list_block">
                                <li>
                                    <Link href="tel:+447426472765">
                                        <span className="icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <span className="text">(+44) 7426-472765</span>
                                    </Link>
                                </li>
                                  <li>
                                    <Link href="tel:+923086582833">
                                        <span className="icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <span className="text">(+92) 30865-82833</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:info@digitalmindson.com">
                                        <span className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </span>
                                        <span className="text">info@digitalmindson.com</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        <span className="text"><b>Head & Finance Office:</b><br /> 608 Suncrest Way, Sherwood Park, AB T8H 0G7, Canada</span>
                                    </Link>
                                </li>
                                  <li>
                                    <Link href="#">
                                        <span className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        <span className="text"><b>Delivery & Production Office:</b><br /> Lahore, Punjab, Pakistan</span>
                                    </Link>
                                </li>
                            </ul>
                            </Fade>
                             <Fade direction="up" cascade damping={0.12} triggerOnce>
                            <ul className="support_step unordered_list_block">
                                <li>
                                    <span className="serial_number">01</span>
                                    <span className="text">Share your requirements</span>
                                </li>
                                <li>
                                    <span className="serial_number">02</span>
                                    <span className="text">Discuss them with our experts</span>
                                </li>
                                <li>
                                    <span className="serial_number">03</span>
                                    <span className="text">Get a free quote</span>
                                </li>
                                <li>
                                    <span className="serial_number">04</span>
                                    <span className="text">Start the project</span>
                                </li>
                            </ul>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="instant_contact_form">
                            <Fade direction="up" triggerOnce>
                            <div className="small_title">
                                <i className="fa-solid fa-envelope-open-text"></i>
                                Let's Connect!
                            </div>
                            </Fade>
                              <Fade direction="up" delay={100} triggerOnce>
                            <h3 className="form_title">
                                Send us a message, and we'll promptly discuss your project with you.
                            </h3>
                            </Fade>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;