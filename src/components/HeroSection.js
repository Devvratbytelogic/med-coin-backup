import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          {/* Hero Logo & Powered By Section */}
          <div className="powered_by mx-auto d-md-none">
            <div className="powered_by_img">
              <img src="/images/binance.png" className="img-fluid img_contain" />
            </div>
            <div className="powered_by_content">
              <p className="powered_by_text">POWERED BY</p>
              <p className="powered_by_name">BINANCE</p>
              <p className="powered_by_smart_name">SMART CHAIN</p>
            </div>
          </div>

          <div className="hero_logo_section_wrapper d-flex d-md-none">
            <div className="hero_logo_section mx-auto">
              <img src="./images/final/img1.png" className="img-fluid img_contain" />
              <img src="./images/pancake.svg" className="img-fluid pancake_img" />
            </div>
            <div className='line_effect aura1'></div>
            <div className='line_effect aura2'></div>
            <div className='line_effect aura3'></div>
            <div className='line_effect aura4'></div>
          </div>

          <div className="d-none d-md-flex gap-4">
            <div className="hero_logo_section_wrapper">
              <div className="hero_logo_section ">
                <div className="logo_image_wrapper">
                  <img src="./images/final/img1.png" className="img-fluid img_contain" />
                </div>
                <img src="./images/pancake.svg" className="img-fluid pancake_img" />
              </div>
              <div className='line_effect aura1'></div>
              <div className='line_effect aura2'></div>
              <div className='line_effect aura3'></div>
              <div className='line_effect aura4'></div>
            </div>
            <div className="powered_by">
              <div className="powered_by_img">
                <img src="/images/binance.png" className="img-fluid img_contain" />
              </div>
              <div className="powered_by_content">
                <p className="powered_by_text">POWERED BY</p>
                <p className="powered_by_name">BINANCE SMART CHAIN</p>
                <p className="powered_by_smart_name">SMART CHAIN</p>
              </div>
            </div>
          </div>

          <h1 className="position-relative">MedCoin is now listed on PancakeSwap 🚀</h1>
          <Link
            to={`https://pancakeswap.finance/swap?outputCurrency=0xAAfA7Ef15233B80E0B99E125228f30220450784e`}
            target="_blank"
          >
            <button className="common_btn mt-4 position-relative z-index-1">Buy on PancakeSwap</button>
          </Link>
          <Link
            to={`/how-to-buy`}
          >
            <button className="common_btn mt-4 position-relative z-index-1 ms-3">How to buy?</button>
          </Link>
        </div>
      </div>

      <div className="col-lg-5 relative">
        <div className="d-flex flex-column gap-3 px-3">
          <div className="common_card card-glass">
            <p className="colored_text gold_color_text">Official Contract Address</p>
            <div className="hero_code_section d-flex align-items-center justify-content-between">
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
