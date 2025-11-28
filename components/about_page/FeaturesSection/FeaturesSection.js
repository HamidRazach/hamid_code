'use client';
import React from 'react';
import PartnerSection from '../PartnerSection';



const FeaturesSection = () => {
    return (
        <section className="client_logo_section section_space" style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_1.svg'})` }}>
            <div className="container">
                <div className="section_space pt-0">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text mb-0">
                            <span className="badge bg-secondary text-white">Brand We</span>
                            Work With
                        </div>
                    </div>
                    <PartnerSection />
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;