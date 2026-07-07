import React from 'react'
import {
  FaBrain,
  FaCalendarAlt,
  FaCreditCard,
  FaFileMedicalAlt,
  FaGlobe,
  FaLock,
  FaShieldAlt,
  FaUserMd,
} from 'react-icons/fa'
import './HomeHeroServicesSection.css'

const features = [
  {
    icon: FaBrain,
    title: 'Sofia IA',
    description:
      'Triagem inteligente para entender seus sintomas e organizar suas informações antes da consulta.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Agendamento Online',
    description: 'Escolha o melhor horário de forma rápida, simples e segura.',
  },
  {
    icon: FaUserMd,
    title: 'Consulta Médica',
    description: 'Atendimento online com médicos habilitados, onde você estiver.',
  },
  {
    icon: FaFileMedicalAlt,
    title: 'Receita Digital',
    description:
      'Receitas, atestados e solicitações de exames com validade nacional quando aplicável.',
  },
]

const trustItems = [
  { icon: FaGlobe, text: 'Atendimento 100% Online' },
  { icon: FaCreditCard, text: 'Pagamento via Pix ou Cartão' },
  { icon: FaShieldAlt, text: 'Processo rápido e seguro' },
  { icon: FaLock, text: 'Privacidade e proteção de dados' },
]

export default function HomeHeroServicesSection() {
  return (
    <div className="home-hero-services">
      <div className="home-hero-features">
        <div className="home-hero-features-grid">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div className="home-hero-feature-item" key={feature.title}>
                <div className="home-hero-feature-icon">
                  <Icon />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="home-hero-trust">
        <div className="home-hero-trust-grid">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div className="home-hero-trust-item" key={item.text}>
                <Icon className="home-hero-trust-icon" />
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
