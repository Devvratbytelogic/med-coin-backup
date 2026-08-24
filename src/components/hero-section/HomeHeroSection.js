import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
    FaStethoscope,
    FaGlobe,
    FaCreditCard,
    FaShieldAlt,
    FaLock,
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa'
import HomeHeroCircuitBackground from './HomeHeroCircuitBackground'
import HomeHeroServicesSection from './HomeHeroServicesSection'
import './HomeHeroSection.css'

const patientBenefits = [
    { icon: FaGlobe, text: 'Atendimento 100% Online' },
    { icon: FaCreditCard, text: 'Pagamento via Pix ou Cartão' },
    { icon: FaShieldAlt, text: 'Processo rápido e seguro' },
    { icon: FaLock, text: 'Privacidade e proteção de dados' },
]

const BENEFIT_COUNT = patientBenefits.length
const LOOP_COUNT = 3

function BenefitItem({ item }) {
    const Icon = item.icon
    return (
        <div className="home-hero-benefits-item">
            <div className="home-hero-benefits-icon-wrap" aria-hidden="true">
                <Icon className="home-hero-benefits-icon" />
            </div>
            <span className="home-hero-benefits-text">{item.text}</span>
        </div>
    )
}

function HomeHeroInfoCard() {
    return (
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
    )
}

function HomeHeroBenefitsCarousel() {
    const trackRef = useRef(null)
    const itemWidthsRef = useRef([])
    const indexRef = useRef(BENEFIT_COUNT)
    const isMovingRef = useRef(false)
    const moveTimeoutRef = useRef(null)
    const [translateX, setTranslateX] = useState(0)
    const [enableTransition, setEnableTransition] = useState(false)

    const loopItems = useMemo(
        () => Array.from({ length: LOOP_COUNT }, () => patientBenefits).flat(),
        []
    )

    const getOffsetForIndex = useCallback((index) => {
        const widths = itemWidthsRef.current
        let offset = 0
        for (let i = 0; i < index; i += 1) {
            offset += widths[i] ?? 0
        }
        return -offset
    }, [])

    const applyIndex = useCallback(
        (index, animated) => {
            indexRef.current = index
            setEnableTransition(animated)
            setTranslateX(getOffsetForIndex(index))
        },
        [getOffsetForIndex]
    )

    const measureTrack = useCallback(() => {
        const track = trackRef.current
        if (!track?.children.length) return

        const widths = Array.from(track.children, (child) => child.offsetWidth)
        itemWidthsRef.current = widths
        applyIndex(indexRef.current, false)
    }, [applyIndex])

    const normalizeIndex = useCallback(() => {
        const len = BENEFIT_COUNT
        let index = indexRef.current

        if (index >= len * 2) {
            index -= len
        } else if (index < len) {
            index += len
        } else {
            return false
        }

        applyIndex(index, false)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setEnableTransition(true))
        })
        return true
    }, [applyIndex])

    const finishMove = useCallback(() => {
        if (!isMovingRef.current) return

        if (moveTimeoutRef.current) {
            window.clearTimeout(moveTimeoutRef.current)
            moveTimeoutRef.current = null
        }

        normalizeIndex()
        isMovingRef.current = false
    }, [normalizeIndex])

    useLayoutEffect(() => {
        measureTrack()
        indexRef.current = BENEFIT_COUNT
        applyIndex(BENEFIT_COUNT, false)
        requestAnimationFrame(() => setEnableTransition(true))

        const track = trackRef.current
        if (!track) return undefined

        const observer = new ResizeObserver(() => {
            measureTrack()
        })
        observer.observe(track)

        window.addEventListener('resize', measureTrack)
        return () => {
            observer.disconnect()
            window.removeEventListener('resize', measureTrack)
            if (moveTimeoutRef.current) {
                window.clearTimeout(moveTimeoutRef.current)
            }
        }
    }, [applyIndex, measureTrack])

    const moveBenefits = (direction) => {
        if (isMovingRef.current) return

        const nextIndex = indexRef.current + direction
        const nextOffset = getOffsetForIndex(nextIndex)

        isMovingRef.current = true
        setEnableTransition(true)
        indexRef.current = nextIndex
        setTranslateX(nextOffset)

        if (moveTimeoutRef.current) {
            window.clearTimeout(moveTimeoutRef.current)
        }
        moveTimeoutRef.current = window.setTimeout(finishMove, 450)
    }

    const handleTransitionEnd = (event) => {
        if (event.propertyName !== 'transform' || !isMovingRef.current) return
        finishMove()
    }

    return (
        <div className="home-hero-benefits" aria-label="Benefícios para pacientes">
            <button
                type="button"
                className="home-hero-benefits-nav home-hero-benefits-nav-prev"
                onClick={() => moveBenefits(-1)}
                aria-label="Ver benefícios anteriores"
            >
                <FaChevronLeft aria-hidden="true" />
            </button>

            <div className="home-hero-benefits-viewport">
                <div
                    ref={trackRef}
                    className={`home-hero-benefits-track${enableTransition ? '' : ' is-static'}`}
                    style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {loopItems.map((item, index) => (
                        <BenefitItem key={`${item.text}-${index}`} item={item} />
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="home-hero-benefits-nav home-hero-benefits-nav-next"
                onClick={() => moveBenefits(1)}
                aria-label="Ver próximos benefícios"
            >
                <FaChevronRight aria-hidden="true" />
            </button>
        </div>
    )
}

function HomeHeroBrand() {
    return (
        <div className="home-hero-brand">
            <img
                src="./images/final/hero-logo.png"
                alt="MEDCOIN HEALTH"
                className="home-hero-brand-logo"
            />
        </div>
    )
}

function HomeHeroTitle() {
    return (
        <h1 className="home-hero-title">
            Telemedicina acessível, inteligente e de{' '}
            <span className="gold_color_text">alta qualidade.</span>
        </h1>
    )
}

function HomeHeroDescription() {
    return (
        <p className="home-hero-description">
            Consultas online com triagem inteligente por IA e atendimento médico online
            realizado por médicos com CRM ativo no Brasil.
        </p>
    )
}

function HomeHeroCta() {
    return (
        <a
            href="https://wa.me/5511914963086"
            target="_blank"
            rel="noreferrer"
            className="home-hero-cta-btn"
        >
            <FaStethoscope />
            <span>Iniciar Triagem</span>
        </a>
    )
}

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
                        {/* Desktop: text left, doctor right */}
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="home-hero-content">
                                <HomeHeroBrand />
                                <HomeHeroTitle />
                                <HomeHeroDescription />
                                <HomeHeroCta />
                                <HomeHeroBenefitsCarousel />
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="home-hero-visual">
                                <img
                                    src="./images/final/hero-doctor.webp"
                                    alt="Médica da MEDCOIN HEALTH"
                                    className="home-hero-doctor-img"
                                />
                                <HomeHeroInfoCard />
                            </div>
                        </div>

                        {/* Mobile: logo → doctor → info → copy → CTA → benefits */}
                        <div className="col-12 d-lg-none">
                            <div className="home-hero-mobile">
                                <HomeHeroBrand />
                                <div className="home-hero-mobile-doctor">
                                    <img
                                        src="./images/final/hero-doctor.webp"
                                        alt="Médica da MEDCOIN HEALTH"
                                        className="home-hero-doctor-img home-hero-doctor-img--mobile"
                                    />
                                </div>
                                <HomeHeroInfoCard />
                                <HomeHeroTitle />
                                <HomeHeroDescription />
                                <HomeHeroCta />
                                <HomeHeroBenefitsCarousel />
                            </div>
                        </div>
                    </div>
                </div>

                <HomeHeroServicesSection />
            </div>
        </section>
    )
}
