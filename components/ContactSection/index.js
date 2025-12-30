import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";


const ContactSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                               <FaLocationDot size={20}/>
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Location</h3>
                                <p className="mb-0">
                                    <b>Head & Finance Office:</b><br /> 608 Suncrest Way, Sherwood Park, AB T8H 0G7, Canada
                                </p>
                                 <p className="mb-0">
                                   <b>Delivery & Production Office:</b><br /> Lahore, Punjab, Pakistan
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <FaPhoneVolume size={20}/>
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Contact</h3>
                                <p className="mb-0">(+44) 7426-472765</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                               <MdEmail size={20}/>
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Email</h3>
                                <p className="mb-0">info@digitalmindson.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <MdOutlineSchedule size={32} />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Visit Between</h3>
                                <p className="mb-0">Mon - Sat: 8.00-5.00</p>
                                <p className="mb-0">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
                                <p className="mb-5">
                                    Give us chance to serve and bring magic to your brand.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="gmap_canvas ps-lg-5">
                                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3403.1031286596185!2d74.31385357441154!3d31.466349149432478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDigital%20Minds%20On%2C%20Office%20No%20MB%2019%2C%20Zainab%20Tower%2C%20Model%20Town%20Link%20Rd%2C%20Phase%203%20GECH%20Society%2C%20Lahore%2C%20Punjab%2054600!5e0!3m2!1sen!2s!4v1734358863626!5m2!1sen!2s"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;