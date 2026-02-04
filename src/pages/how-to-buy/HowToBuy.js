import React from 'react';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import SplashScreen from '../../components/SplashScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

const STEPS = [
  { num: 1, text: 'Open', link: 'https://medcoin.ai', linkText: 'https://medcoin.ai' },
  { num: 2, text: 'Copy Contract Address' },
  { num: 3, text: 'Click the Button "Buy on PancakeSwap"' },
  { num: 4, text: 'Click Connect Wallet' },
  { num: 5, text: 'Connect Metamask, Trustwallet, or any other wallet' },
  { num: 6, text: 'Paste the Contract Address in the PancakeSwap token search field (Select a Token)' },
  { num: 7, text: 'Click Proceed' },
  { num: 8, text: 'Enter Desired USDT amount' },
  { num: 9, text: 'Select Wallet Account' },
  { num: 10, text: 'Click Swap and Confirm Swap' },
  { num: 11, text: 'Confirm' },
  { num: 12, text: 'Add MEDC to Wallet' },
];

export default function HowToBuy() {
  return (
    <>
      <SplashScreen />
      <Menu />

      <div className="main_content">
        <section className="padSec common_top_space how-to-buy-section" id="how-to-buy">
          <div className="container">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="common_outline_btn btn_fit_width mx-auto mb-3">Step by Step</div>
              <h2 className="h2mY">
                How to Buy <span className="gold_color_text">MEDC</span>
              </h2>
              <p className="subdecription mt-3">
                Follow these simple steps to purchase MEDC tokens on PancakeSwap. Watch the video guide for a visual walkthrough.
              </p>
            </div>

            <div className="row g-4 align-items-start">
              {/* Left: Steps */}
              <div className="col-lg-7">
                <div className="how-to-buy-steps">
                  {STEPS.map((step) => (
                    <div key={step.num} className="how-to-buy-step-card common_card">
                      <div className="d-flex align-items-start gap-3">
                        <div className="how-to-buy-step-num">
                          <span className="step-num">{step.num}</span>
                        </div>
                        <div className="how-to-buy-step-content">
                          <p className="colored_text mb-0">
                            {step.link ? (
                              <>
                                {step.text}{' '}
                                <a
                                  href={step.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="gold_color_text text-decoration-underline"
                                >
                                  {step.linkText}
                                </a>
                              </>
                            ) : (
                              step.text
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Video */}
              <div className="col-lg-5">
                <div className="how-to-buy-video-wrapper">
                  <div className="common_card p-0 overflow-hidden">
                    <div className="p-3 pb-2">
                      <p className="colored_text mb-0">
                        <i className="fa-solid fa-play-circle me-2"></i>
                        Video Guide
                      </p>
                    </div>
                    <div className="how-to-buy-video-container">
                      <video controls className="how-to-buy-video">
                        <source src="/videos/how-to-buy.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0xAAfA7Ef15233B80E0B99E125228f30220450784e"
                      className="common_outline_btn d-inline-flex gap-2 align-items-center justify-content-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-external-link-alt"></i>
                      Buy on PancakeSwap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
