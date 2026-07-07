import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Menu.css";

const CONTRACT_ADDRESS = "0xAAfA7Ef15233B80E0B99E125228f30220450784e";
const COINSTORE_URL = "https://www.coinstore.com/spot/MEDCUSDT";
const PANCAKESWAP_URL = `https://pancakeswap.finance/swap?outputCurrency=${CONTRACT_ADDRESS}`;
const LIVE_CHART_URL =
  "https://www.dextools.io/app/en/bnb/pair-explorer/0x34cefc7e43eead3390fc03c98f175132d637e5a9?t=1758352472251";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    handleCloseMenu();
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate({ pathname: "/", hash: sectionId });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [menuOpen]);

  const truncatedAddress = `${CONTRACT_ADDRESS.slice(0, 18)}...`;

  const mobileActions = (
    <div className="menu-header-mobile-actions">
      <div className="menu-header-card menu-header-buy-card">
        <a
          href={COINSTORE_URL}
          target="_blank"
          rel="noreferrer"
          className="menu-header-buy-row"
          onClick={handleCloseMenu}
        >
          <img src="/images/final/coin-store.png" alt="CoinStore" />
          <span className="menu-header-coinstore-name">Coinstore</span>
          <span>Buy on CoinStore</span>
        </a>
        <div className="menu-header-divider" />
        <a
          href={PANCAKESWAP_URL}
          target="_blank"
          rel="noreferrer"
          className="menu-header-buy-row"
          onClick={handleCloseMenu}
        >
          <img src="/images/pancake.svg" alt="PancakeSwap" />
          <span>Buy on PancakeSwap</span>
        </a>
      </div>

      <div className="menu-header-card menu-header-contract-card">
        <p className="menu-header-label">Official Contract Address</p>
        <div className="menu-header-address-row">
          <p className="menu-header-address">{CONTRACT_ADDRESS}</p>
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
        onClick={handleCloseMenu}
      >
        <p className="menu-header-label">Live Chart</p>
        <img src="/images/hero-img1.svg" alt="Live Chart" />
      </a>
    </div>
  );

  return (
    <header className={`mainheader menu-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid menu-header-container">
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
                className="menu-header-buy-row"
              >
                <img src="/images/final/coin-store.png" alt="CoinStore" />
                <span className="menu-header-coinstore-name">Coinstore</span>
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
            className={`menu-header-toggler ${menuOpen ? "show1" : ""}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <img
              src="./images/menuicon.svg"
              className="img-fluid fa-bars"
              alt=""
            />
            <i className="fa-solid fa-xmark" />
          </button>

          <div
            id="navbarScroll"
            className={`menu-header-collapse ${menuOpen ? "show1" : ""}`}
          >
            {mobileActions}
            <ul className="menu-header-nav-list">
              <li>
                <a onClick={handleCloseMenu} className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scrollToSection(e, "features")}
                  className="nav-link"
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scrollToSection(e, "roadmap")}
                  className="nav-link"
                  href="/#roadmap"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scrollToSection(e, "tokenomics")}
                  className="nav-link"
                  href="/#tokenomics"
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scrollToSection(e, "team")}
                  className="nav-link"
                  href="/#team"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  onClick={handleCloseMenu}
                  className="nav-link"
                  href="/final-whitepaper.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
