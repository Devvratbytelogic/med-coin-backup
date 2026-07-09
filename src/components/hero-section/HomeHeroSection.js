import React from 'react'
import { FaStethoscope, FaGlobe, FaCreditCard, FaShieldAlt, FaLock } from 'react-icons/fa'
import HomeHeroCircuitBackground from './HomeHeroCircuitBackground'
import HomeHeroServicesSection from './HomeHeroServicesSection'
import './HomeHeroSection.css'

const patientBenefits = [
    { icon: FaGlobe, lines: ['100% Online Care'] },
    { icon: FaCreditCard, lines: ['Pay with Pix or', 'Credit Card'] },
    { icon: FaShieldAlt, lines: ['Fast & Secure', 'Process'] },
    { icon: FaLock, lines: ['Privacy & Data', 'Protection'] },
]

export default function HomeHeroSection() {
    return (
        <section className="home-hero-section" id="top">
            <div className="home-hero-announcement">
                <p>AI-Powered Telemedicine Platform</p>
            </div>

            <div className="container">
                <div className="home-hero-main">
                    <div className="home-hero-circuit-bg" aria-hidden="true">
                        <HomeHeroCircuitBackground />
                    </div>

                    <div className="row align-items-center g-4">
                        <div className="col-12 col-lg-6">
                            <div className="home-hero-content">
                                <div className="home-hero-brand">
                                    <img
                                        src="./images/final/hero-logo.png"
                                        alt="MEDCOIN"
                                        className="home-hero-brand-logo"
                                    />
                                </div>

                                <h1 className="home-hero-title">
                                    Telemedicina acessível, inteligente e de{' '}
                                    <span className="gold_color_text">alta qualidade.</span>
                                </h1>

                                <p className="home-hero-description">
                                    Online consultations with AI-powered intelligent triage and online medical care
                                    provided by physicians with an active Brazilian CRM.
                                </p>

                                <a href="https://wa.me/5511914963086" target="_blank" rel="noreferrer" className="home-hero-cta-btn">
                                    <FaStethoscope />
                                    <span>Iniciar Triagem</span>
                                </a>

                                <div className="home-hero-benefits" aria-label="Patient benefits">
                                    <div className="home-hero-benefits-grid">
                                        {patientBenefits.map((item) => {
                                            const Icon = item.icon
                                            return (
                                                <div className="home-hero-benefits-item" key={item.lines.join(' ')}>
                                                    <div className="home-hero-benefits-icon-wrap" aria-hidden="true">
                                                        <Icon className="home-hero-benefits-icon" />
                                                    </div>
                                                    <span className="home-hero-benefits-text">
                                                        {item.lines.map((line) => (
                                                            <span className="home-hero-benefits-line" key={line}>
                                                                {line}
                                                            </span>
                                                        ))}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="home-hero-visual">
                                <img
                                    src="./images/final/hero-doctor.png"
                                    alt="Médica da MEDCOIN HEALTH"
                                    className="home-hero-doctor-img"
                                />
                                <div className="home-hero-info-card">
                                    <div className="home-hero-info-icon">
                                        <img
                                            src="./images/final/doctor-icon.png"
                                            alt="Médicos"
                                            className="home-hero-info-icon-svg"
                                        />
                                    </div>
                                    <p className="home-hero-info-text mb-0">
                                        IA e médicos{' '}
                                        <br />
                                        trabalhando{' '}
                                        <br />
                                        juntos para{' '}
                                        <br />
                                        <span className="gold_color_text">cuidar melhor</span>{' '}
                                        <br />
                                        <span className="gold_color_text">de você.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <HomeHeroServicesSection />
            </div>
        </section>
    )
}
