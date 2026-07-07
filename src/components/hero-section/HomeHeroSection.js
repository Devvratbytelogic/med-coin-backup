import React from 'react'
import { FaStethoscope } from 'react-icons/fa'
import HomeHeroServicesSection from './HomeHeroServicesSection'


export default function HomeHeroSection() {
    return (
        <section className="home-hero-section" id="top">
            <div className="home-hero-announcement">
                <p className="mb-0">
                    AI-Powered Telemedicine Platform |{' '}
                    <a
                        href="https://www.coinstore.com/spot/MEDCUSDT"
                        target="_blank"
                        rel="noreferrer"
                        className="gold_color_text"
                    >
                        Buy on CoinStore
                    </a>
                </p>
            </div>

            <div className="container">
                <div className="home-hero-main">
                    {/* <div className="home-hero-circuit-bg" aria-hidden="true" /> */}

                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
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
                                    Consultas online com triagem inteligente por IA e atendimento médico remoto
                                    realizado por profissionais qualificados.
                                </p>

                                <a href="#features" className="home-hero-cta-btn">
                                    <FaStethoscope />
                                    <span>Iniciar Triagem</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
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
                                    IA e médicos
                                    <br />
                                    trabalhando
                                    <br />
                                    juntos para
                                    <br />
                                    <span className="gold_color_text">cuidar melhor</span>
                                    <br />
                                    <span className="gold_color_text">de você.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <HomeHeroServicesSection />
            </div>
        </section>
    )
}
