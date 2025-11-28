import React from 'react';
import Image from 'next/image';

const Policy = [
    {
       title: 'Rich Documentation',
       subTitle: 'Rich Documentation" refers to comprehensive and detailed',
       icon: "/images/icons/icon_doc.png",
    },
    {
        title: 'Fastest Delivery',
        subTitle: 'Fastest Delivery" typically refers to service or process that emphasizes',
        icon: "/images/icons/icon_analysis.png",
    },
    {
        title: 'Lifetime Support',
        subTitle: 'Lifetime Support" refers to a by a product or service provider',
        icon: "/images/icons/icon_headphone_2.png",
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section section_space">
            <div className="container">
                <div className="heading_block">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-6">
                            <h2 className="heading_text mb-0">
                                Celebrating Features Discover What Sets Us
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="heading_description mb-0">
                                We take pride in celebrating the features that set us apart and make us a leader in the IT solutions. What truly distinguishes us is our unwavering commitment to innovation, excellence, and client satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pricing_policy_wrap">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
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