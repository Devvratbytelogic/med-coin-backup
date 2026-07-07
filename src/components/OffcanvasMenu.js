import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CONTRACT_ADDRESS,
  COINSTORE_URL,
  LIVE_CHART_URL,
  PANCAKESWAP_URL,
} from "./menuConstants";
import "./OffcanvasMenu.css";

const OffcanvasMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    onClose();
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
    if (isOpen) {
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
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navLinks = (
    <ul className="menu-header-nav-list">
      <li>
        <a onClick={onClose} className="nav-link" href="/">
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
          onClick={onClose}
          className="nav-link"
          href="/final-whitepaper.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Whitepaper
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <div
        className={`menu-offcanvas-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <div
        id="menuOffcanvas"
        className={`menu-offcanvas ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="menu-offcanvas-header menu-offcanvas-header-mobile">
          <a className="menu-offcanvas-brand" href="./" onClick={onClose}>
            <img src="images/logo.svg" alt="MEDCOIN.AI" />
          </a>
          <button
            type="button"
            className="menu-offcanvas-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="menu-offcanvas-inner">
          <div className="menu-header-mobile-actions">
            <div className="menu-header-card menu-header-buy-card">
              <a
                href={COINSTORE_URL}
                target="_blank"
                rel="noreferrer"
                className="menu-header-buy-row coinstore-icon"
                onClick={onClose}
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
                onClick={onClose}
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
              onClick={onClose}
            >
              <p className="menu-header-label">Live Chart</p>
              <img src="/images/hero-img1.svg" alt="Live Chart" />
            </a>
          </div>

          {navLinks}
        </div>
      </div>
    </>
  );
};

export default OffcanvasMenu;
