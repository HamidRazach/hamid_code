import React from 'react';
import Image from 'next/image';

const Policy = [
    {
        title: 'Expert Team Members',
        subTitle: 'We take pride in assembling a diverse and highly skilled.',
        icon: "/images/icons/icon_user_check.svg",
    },
    {
        title: 'Fastest Customer Service',
        subTitle: 'We pride ourselves on providing the fastest customer service industry.',
        icon: "/images/icons/icon_headphone.svg",
    },
    {
        title: 'reasonable Pricing',
        subTitle: 'We believe in providing reasonable pricing that offers exceptional.',
        icon: "/images/icons/icon_dollar.svg",
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block layout_icon_left">
                                <div className="iconbox_icon bg-secondary-subtle">
                                    <Image src={policy.icon} alt="Dollar SVG Icon" width={20} height={20}/>
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;