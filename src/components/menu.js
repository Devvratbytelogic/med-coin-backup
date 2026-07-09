import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OffcanvasMenu from "./OffcanvasMenu";
import "./Menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
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
    const handleResize = () => {
      if (window.innerWidth >= 992 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header className={`mainheader menu-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container menu-header-container">
        <nav className="menu-header-nav">
          <a className="menu-header-brand" href="./">
            <img src="images/logo.svg" alt="MEDCOIN.AI" />
          </a>

          <ul className="menu-header-desktop-nav">
            <li>
              <a className="nav-link" href="/">
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
                className="nav-link"
                href="/final-whitepaper.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Whitepaper
              </a>
            </li>
          </ul>

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
