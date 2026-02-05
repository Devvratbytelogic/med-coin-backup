import React, { useState } from "react";
import { Link } from "react-router-dom";
import BinanceHero from "./BinanceHero";

export default function HeroSection() {
  const fullAddress = "0xAAfA7Ef15233B80E0B99E125228f30220450784e";
  const [copied, setCopied] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <div className="col-lg-7">
        <div className="snLeft px-3">
          <div className="hero_content">
            <div className="hero_top_row d-flex flex-column flex-xl-row align-items-start align-items-xl-center justify-content-between gap-3 gap-md-0">
              <div className="hero_img_container">
                <img src="./images/final/hero-banner.webp" alt="MEDCOIN" />
              </div>
              <BinanceHero />
            </div>
            <p className="hero_subtitle gold_color_text">AI-Powered Healthcare on Blockchain.</p>
            {/* <h1 className="pe-4">Best selling ICO future of trading <span className="gold_color_text">MEDCOIN</span></h1>
            <p>Experience the future of business with intelligent, scalable <br /> automation solutions tailored to your needs</p> */}
            <div className="hero_buttons mt-2 d-flex flex-wrap gap-2">
              <Link
                to={`https://pancakeswap.finance/swap?outputCurrency=0xAAfA7Ef15233B80E0B99E125228f30220450784e`}
                target="_blank"
              >
                <button className="common_outline_btn position-relative z-index-1">Buy on CoinStore</button>
              </Link>
              <Link
                to={`/how-to-buy`}
              >
                <button className="common_outline_btn position-relative z-index-1">How to buy?</button>
              </Link>
            </div>
            <div className="coinstore_badge d-flex align-items-center gap-2 mt-3">
              <a href="https://www.coinstore.com" target="_blank">
                <div className="coinstore_badge_inner d-flex align-items-center gap-2">
                  <img src="/images/final/coin-store.png" alt="CoinStore" className="coinstore-logo" />
                  <span className="colored_text">
                    Officially listed on <span className="gold_color_text">CoinStore</span>.
                  </span>
                  <i className="fa-solid fa-circle-check coinstore_verified" aria-hidden="true"></i>
                </div>
              </a>
            </div>
            <img src="./images/pancake.svg" className="img-fluid pancake_img" alt="" />

          </div>
        </div>
      </div>

      <div className="col-lg-5 relative">
        <div className="d-flex flex-column gap-3 px-3">
          <div className="common_card card-glass">
            <p className="colored_text">Official Contract Address</p>
            <div className="hero_code_section">
              <p className="text-truncate d-block d-md-inline ">{fullAddress}</p>
              <p
                className="cursor_pointer fs-6 mb-0"
                onClick={handleCopy}
                title="Copy address"
              >
                {copied ? (
                  <i className="fa-solid fa-check "></i>
                ) : (
                  <i className="far fa-copy"></i>
                )}
              </p>
            </div>
            <p className="text-end mt-3 colored_text mb-0">
              <i className="fa-solid fa-circle-check me-2"></i> View on BScScan
            </p>
          </div>

          <div className="d-flex gap-3">
            <div className="common_card w-100">
              <p className="colored_text">Live Chart 📈</p>
              <Link
                to={`https://www.dextools.io/app/en/bnb/pair-explorer/0x34cefc7e43eead3390fc03c98f175132d637e5a9?t=1758352472251`}
                target="_blank"
              >
                <div className="img_card">
                  <img src="/images/hero-img1.svg" />
                </div>
              </Link>
            </div>

            {/* Video Card */}
            <div className="common_card w-100">
              <p className="colored_text">
                See how to buy MED-Coin on PancakeSwap in 2 minutes
              </p>
              <div
                className="img_card cursor_pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <img src="/images/hero-img2.svg" alt="Video Thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {isVideoOpen && (
        <div
          className="video_popup position-fixed mt-0 top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.8)", zIndex: 9999 }}
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            className="position-absolute top-0 end-0 m-3 fs-3 text-white bg-transparent border-0 cursor_pointer"
            onClick={() => setIsVideoOpen(false)}
            title="Close"
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="position-relative w-75 h-75 " onClick={(e) => e.stopPropagation()}>
            {/* Close Icon */}

            <video
              src="/videos/how-to-buy.mp4"
              autoPlay
              muted
              loop
              controls
              className="w-100 h-100"
            />
          </div>
        </div>
      )}
    </>
  );
}
