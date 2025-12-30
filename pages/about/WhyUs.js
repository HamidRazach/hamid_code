"use client";
import React from 'react';
import Image from 'next/image';

const Policy = [
    {
        title: 'Quality Comes First',
        icon: '/images/icons/icon_check_2.png',
    },
    {
        title: 'Flexible Cooperation',
        icon: '/images/icons/icon_leaf.svg',
    },
    {
        title: 'On-time Delivery',
        icon: '/images/icons/icon_box.png',
    },
    {
        title: 'Transparent Costs',
        icon: '/images/icons/icon_receipt_add.png',
    },
    {
        title: 'Qualified Developers',
        icon: '/images/icons/icon_monitor.svg',
    },
    {
        title: 'Quick Scale-up',
        icon: '/images/icons/icon_microscope.png',
    },


]


const WhyUs = (props) => {

    return (
        <section className="service_section section_space">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="image_wrap">
                            <Image src="/images/about/about_image_5.webp" alt="Techco - About" width={630} height={571}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="items-blocked">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    <span className="badge bg-secondary text-white">Why Us</span>
                                    Better
                                </div>
                                <h2 className="heading_text mb-0">
                                    Why Our Services are Better Than Others?
                                </h2>
                            </div>
                            <ul className="service_facilities_group unordered_list">
                                {Policy.map((policy, pitem) => (
                                    <li key={pitem}>
                                        <strong className="iconbox_block layout_icon_left">
                                            <span className="iconbox_icon">
                                                <Image src={policy.icon} alt="Dollar SVG Icon"  width={1000} height={1000}/>
                                            </span>
                                            <span className="iconbox_content">
                                                <strong className="iconbox_title mb-0">{policy.title}</strong>
                                            </span>
                                        </strong>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;