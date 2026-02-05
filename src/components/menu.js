import React, { useContext, useEffect, useState, useRef } from "react";
import Context from "../context/context";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Menu = () => {
  const { account, onConnect, providers } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
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
      navigate({ pathname: '/', hash: sectionId });
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={`mainheader ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-dark flex-nowrap justify-content-between">
            <a className="navbar-brand" href="./">
              <img className="logo desktop" src="./images/final/logo.png" alt="" />
            </a>
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <button onClick={handleToggleMenu} className={`navbar-toggler collapsed ${menuOpen ? "show1" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <img src="./images/menuicon.svg" className="img-fluid fa-bars" />
                <i className="fa-solid fa-xmark"></i>

              </button>
              <div id="navbarScroll" className={`collapse navbar-collapse justify-content-end ${menuOpen ? "show1" : ""}`}  >
                {/*<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                <li className="nav-item">
                  <Link onClick={handleCloseMenu} className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a onClick={handleCloseMenu} className="nav-link" href="https://app.solidproof.io/projects/habe">Audit</a>
                </li>
              </ul>*/}
                <div className="d-flex  align-items-center">
                  <div className="d-flex  align-items-center">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                      <li className="nav-item">
                        <a onClick={handleCloseMenu} className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a onClick={(e) => scrollToSection(e, "features")} className="nav-link" href="/#features">Features</a>
                      </li>
                      <li className="nav-item">
                        <a onClick={(e) => scrollToSection(e, "roadmap")} className="nav-link" href="/#roadmap">Roadmap</a>
                      </li>
                      <li className="nav-item">
                        <a onClick={(e) => scrollToSection(e, "tokenomics")} className="nav-link" href="/#tokenomics">Tokenomics</a>
                      </li>
                      <li className="nav-item">
                        <a onClick={(e) => scrollToSection(e, "team")} className="nav-link" href="/#team">Team</a>
                      </li>
                      {/* <li className="nav-item">
                    <a onClick={handleCloseMenu} className="nav-link" href="./#faq">FAQ</a>
                  </li> */}
                      <li className="nav-item">
                        <a onClick={handleCloseMenu} className="nav-link" href="/final-whitepaper.pdf" target='_blank'>Whitepaper</a>
                      </li>
                      <li className="nav-item">
                        {/* <a onClick={handleCloseMenu} className="nav-link" href="/claim-refund">Claim&nbsp;Refund</a> */}
                      </li>
                      {/* <li className="nav-item">
                        <Link onClick={handleCloseMenu} className="nav-link" to="/affiliate">Affiliate</Link>
                      </li> */}
                    </ul>
                    {/*<div className="btnHeade text-center ">
                  {
                  account ?
                  <button className="mybtn d-flex gap-2 align-items-center  w-auto m-auto" title={account}><span className="d-inline-block w-auto"> {account.substring(0, 6)}....{account.substring(36, 42)}</span></button>
                  :
                  <button className="mybtn d-flex gap-2 align-items-center  w-auto m-auto"  onClick={onConnect}><span className="d-inline-block w-auto">Connect Wallet</span></button>
  
                  }
                </div>
                */}
                  </div>
                </div>
              </div>
              {/* <ThemeToggle /> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Menu;