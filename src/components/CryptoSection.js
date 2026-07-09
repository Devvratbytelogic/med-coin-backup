import React, { useState } from 'react'
import {
    CONTRACT_ADDRESS,
    COINSTORE_URL,
    LIVE_CHART_URL,
    PANCAKESWAP_URL,
} from './menuConstants'
import './Menu.css'
import './CryptoSection.css'

export default function CryptoSection() {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(CONTRACT_ADDRESS)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    const truncatedAddress = `${CONTRACT_ADDRESS.slice(0, 18)}...`

    return (
        <section className="crypto-section padSec pt-0" id="crypto">
            <div className="container">
                <h2 className="h2mY">
                    Developed on <span className="gold_color_text">Binance Smart Chain (BSC)</span>
                </h2>

                <div className="crypto-section-actions">
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

                    <div className="crypto-section-actions-row">
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
        </section>
    )
}
