import React from 'react';
import { ArrowSVG, StarSVG } from './AllSVG';

const WhyMedcoin = () => {
    const barHeights = [28, 18, 32, 22, 26, 14, 24, 20];

    return (
        <section className="why-medcoin-section text-start padSec pb-0" id='why'>
            <div className="why-medcoin-dots-bg" />
            <h2 className="h2mY text-center">Why <span className='gold_color_text'>MEDCOIN?</span></h2>

            <div className="container position-relative">
                <div className="row justify-content-center g-3 g-md-4 mt-2">
                    {/* Card 1: AI-Driven Telemedicine Platform */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="why_medcoin_card">
                            <div className='why_medcoin_card_content'>
                                <h4>AI-Driven Telemedicine Platform</h4>
                                <p>AI-powered telemedicine enabling secure, fast, and global digital healthcare consultations.</p>
                            </div>
                            <div className="why_medcoin_features">
                                <span><span className="why_medcoin_dot" />Smart diagnosis</span>
                                <span><span className="why_medcoin_dot" />Secure consultations</span>
                                <span><span className="why_medcoin_dot" />Global access</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Fast, Borderless Healthcare Payments */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="why_medcoin_card">
                            <div className='why_medcoin_card_content'>
                                <h4>Fast, Borderless Healthcare Payments</h4>
                                <p>Instant, borderless payments across patients, doctors, labs, and healthcare services.</p>
                            </div>
                            <div className='why_medcoin_card_progress'>
                                <div className="why_medcoin_labels">
                                    <span>B2B & B2C</span>
                                    <span>SECURE</span>
                                </div>
                                <div className="why_medcoin_progress">
                                    <div className="why_medcoin_progress_fill" style={{ width: '92%' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Direct Patient - Doctor Connectivity */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="why_medcoin_card">
                            <div className='why_medcoin_card_content'>
                                <h4>Direct Patient - Doctor Connectivity</h4>
                                <p>Direct patient-doctor connection with no intermediaries or friction.</p>
                            </div>
                            <div className="why_medcoin_barchart">
                                {barHeights.map((h, i) => (
                                    <div key={i} className="why_medcoin_bar" style={{ height: `${h}px` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Real Utility, Real Impact (spans 2 cols) */}
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="why_medcoin_card">
                            <div className='why_medcoin_card_featured'>
                                <div className="why_medcoin_featured_content">
                                    <div className='why_medcoin_card_content'>
                                        <div className="common_btn btn_fit_width why_medcoin_card_featured_btn">
                                            <StarSVG />
                                            MEDCOIN AI
                                        </div>
                                        <h4 className="why_medcoin_featured_title">Real Utility, Real Impact</h4>
                                        <p className='mb-4'>MEDCOIN is more than a token — it's a real-world digital currency powering healthcare transactions inside and outside the platform.</p>
                                    </div>
                                    <a
                                        href="https://pancakeswap.finance/swap?outputCurrency=0xAAfA7Ef15233B80E0B99E125228f30220450784e"
                                        className="common_outline_btn btn_fit_width buy_token_btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        BUY TOKEN
                                        <ArrowSVG />
                                    </a>
                                </div>
                                <div className="why_medcoin_logo_wrapper">
                                    <img src="./images/final/logo.png" alt="MEDCOIN" className="why_medcoin_logo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: GLOBAL ECOSYSTEM */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="why_medcoin_card">
                            <div className="why_medcoin_ecosystem_header">
                                <span>GLOBAL ECOSYSTEM</span>
                                <span className="why_medcoin_live">
                                    <span className="why_medcoin_dot" />LIVE
                                </span>
                            </div>
                            <div className="why_medcoin_barchart why_medcoin_barchart_sm">
                                {[42, 28, 18, 32, 24, 26, 20, 30, 16].map((h, i) => (
                                    <div key={i} className="why_medcoin_bar" style={{ height: `${h}px` }} />
                                ))}
                            </div>
                            <div className='why_medcoin_card_content'>
                                <h4 className="why_medcoin_stat">99.99%</h4>
                                <p>An expanding AI + blockchain healthcare ecosystem built for the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMedcoin;
