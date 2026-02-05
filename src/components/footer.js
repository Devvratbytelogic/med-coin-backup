import React, { useContext, useEffect, useState, useRef } from "react";
import Context from "../context/context";
import { NavLink as Link, useLocation } from "react-router-dom";

const Menu = () => {
  const { account, onConnect, providers } = useContext(Context);
  const currentYear = new Date().getFullYear();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <footer className="padSec pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-2 w-20 ps-0">
              <img className="logo desktop" src="images/logo.svg" alt="" width={120} />
              <p className="mb-0">MedCoin is the bridge between humanized medicine and global innovation. An ecosystem that connects people, technology, and purpose — with real impact. For more information, please send an email to <a href="mailto:contact.medcoin@proton.me" className="gold_color_text">contact.medcoin@proton.me</a></p>
            </div>

            <div className="col-md-2 w-20">
              <div className="snF">
                <h4 className="gold_color_text">Quick links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#roadmap">Roadmap</a></li>
                  <li><a href="#tokenomics">Tokenomics</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 w-20">
              <div className="snF">
                <h4 className="gold_color_text">Help</h4>
                <ul>
                  <li><a href="/medcoin-whitepaper-new.pdf" target='_blank'>Whitepaper</a></li>
                  {/* <li><a href="/faq">FAQ</a></li>
                  <li><a href="">Forum</a></li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-2 w-20">
              <div className="snF">
                <h4 className="gold_color_text">Get in Touch</h4>
                <ul>
                  <li>
                    <a href="mailto:contact.medcoin@proton.me">
                      <i className="fa-solid fa-envelope me-2"></i> Email
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/medcoin.ai" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram me-2"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/medcoin_ai" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-telegram-plane me-2"></i> Telegram Channel
                    </a>
                    {/* <span className="d-block small text-muted ms-4">Official announcements</span> */}
                  </li>
                  <li>
                    <a href="https://t.me/+CgWitTvZka1iZDBh" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-telegram-plane me-2"></i> Telegram Community
                    </a>
                    {/* <span className="d-block small text-muted ms-4">Community discussion</span> */}
                  </li>
                  <li>
                    <a href="https://x.com/MedcoinHealth" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-x-twitter me-2"></i> Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2 w-20">
              <div className="snF text-start">
              <h4 className="gold_color_text">Join our Telegram channel for announcements and our community for discussion. Follow our social media for more updates.</h4>
                {/* <div className=" borderBottom d-flex justify-content-between gap-2">
                  <input type="text" name="" placeholder="Your email address" className="w-100 email_input" />
                  <button className="submitBtn"><i className="fa-solid fa-arrow-right"></i></button>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="copy">© 2025. All rights reserved.</div> */}
          <div className="copy">
            © {currentYear} MedCoin.AI | All rights reserved. Proudly Developed By: <a href="https://bytelogicindia.com" target="_blank" className="gold_color_text">Bytelogic Technologies</a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Menu;