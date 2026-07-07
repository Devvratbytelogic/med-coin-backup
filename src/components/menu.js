import React, { useEffect, useState } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import {
  CONTRACT_ADDRESS,
  COINSTORE_URL,
  LIVE_CHART_URL,
  PANCAKESWAP_URL,
} from "./menuConstants";
import "./Menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const truncatedAddress = `${CONTRACT_ADDRESS.slice(0, 18)}...`;

  return (
    <header className={`mainheader menu-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container menu-header-container">
        <nav className="menu-header-nav">
          <a className="menu-header-brand" href="./">
            <img src="images/logo.svg" alt="MEDCOIN.AI" />
          </a>

          <div className="menu-header-actions">
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

          <button
            onClick={handleToggleMenu}
            className={`menu-header-toggler ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menuOffcanvas"
            aria-label="Toggle navigation"
          >
            <span className="menu-header-toggler-icon" aria-hidden="true">
              <span className="menu-header-toggler-bar" />
              <span className="menu-header-toggler-bar" />
              <span className="menu-header-toggler-bar" />
            </span>
          </button>

          <OffcanvasMenu isOpen={menuOpen} onClose={handleCloseMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Menu;
