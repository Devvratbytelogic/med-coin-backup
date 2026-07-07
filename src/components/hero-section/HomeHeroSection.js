import React, { useState } from 'react'
import { FaStethoscope } from 'react-icons/fa'
import HomeHeroCircuitBackground from './HomeHeroCircuitBackground'
import HomeHeroServicesSection from './HomeHeroServicesSection'
import {
    CONTRACT_ADDRESS,
    COINSTORE_URL,
    LIVE_CHART_URL,
    PANCAKESWAP_URL,
} from '../menuConstants'
import './HomeHeroSection.css'


export default function HomeHeroSection() {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(CONTRACT_ADDRESS)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    const truncatedAddress = `${CONTRACT_ADDRESS.slice(0, 18)}...`

    return (
        <section className="home-hero-section" id="top">
            <div className="home-hero-announcement">
                <p className="mb-0">
                    <span>AI-Powered Telemedicine Platform</span>
                    <span className="home-hero-announcement-separator" aria-hidden="true">|</span>
                    <a
                        href="https://www.coinstore.com/spot/MEDCUSDT"
                        target="_blank"
                        rel="noreferrer"
                        className="home-hero-announcement-link"
                    >
                        Buy on CoinStore
                    </a>
                </p>
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
                                    Consultas online com triagem inteligente por IA e atendimento médico remoto
                                    realizado por profissionais qualificados.
                                </p>

                                <a href="https://wa.me/5511914963086" target="_blank" rel="noreferrer" className="home-hero-cta-btn">
                                    <FaStethoscope />
                                    <span>Iniciar Triagem</span>
                                </a>

                                <div className="home-hero-mobile-actions" aria-label="Purchase and token information">
                                    <div className="menu-header-card menu-header-buy-card">
                                        <a
                                            href={COINSTORE_URL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="menu-header-buy-row coinstore-icon"
                                        >
                                            <img src="/images/final/coin-store.png" alt="CoinStore" />
                                            <span>Buy on CoinStore</span>
                                        </a>
                                        <div className="menu-header-divider" />
                                        <a
                                            href={PANCAKESWAP_URL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="menu-header-buy-row"
                                        >
                                            <img src="/images/pancake.svg" alt="PancakeSwap" />
                                            <span>Buy on PancakeSwap</span>
                                        </a>
                                    </div>

                                    <div className="home-hero-mobile-actions-row">
                                        <div className="menu-header-card menu-header-contract-card">
                                            <p className="menu-header-label">Official Contract Address</p>
                                            <div className="menu-header-address-row">
                                                <p className="menu-header-address">{truncatedAddress}</p>
                                                <button
                                                    type="button"
                                                    className="menu-header-copy-btn"
                                                    onClick={handleCopy}
                                                    title="Copy address"
                                                    aria-label="Copy contract address"
                                                >
                                                    {copied ? (
                                                        <i className="fa-solid fa-check" />
                                                    ) : (
                                                        <i className="far fa-copy" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <a
                                            href={LIVE_CHART_URL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="menu-header-card menu-header-chart-card"
                                        >
                                            <p className="menu-header-label">Live Chart</p>
                                            <img src="/images/hero-img1.svg" alt="Live Chart" />
                                        </a>
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
