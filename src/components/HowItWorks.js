import React from 'react';

const HowItWorks = () => {
  return (
    <section className="text-center padSec how-it-works-section pt-0" id='work'>
      <div className="container">
        <h2 className="h2mY">How it <span className='gold_color_text'>Works</span></h2>

        <div className="mt-4">
          <div className="how-it-works-wrapper">
            {/* SVG CONNECTOR - animated colored flow */}
            <svg
              className="how-it-works-lines"
              viewBox="0 0 1200 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Card 1 → Card 2: base line + moving purple glow */}
              <path
                className="how-it-works-path"
                d="M 200 135 C 400 185, 400 -5, 600 25"
                pathLength="100"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                fill="none"
              />
              <path
                className="how-it-works-path how-it-works-path-glow how-it-works-path-left"
                d="M 200 135 C 400 185, 400 -5, 600 25"
                pathLength="100"
                stroke="#e7b039"
                strokeWidth="2"
                filter="url(#pathGlow)"
                fill="none"
              />
              {/* Card 2 → Card 3: base line + moving light blue glow */}
              <path
                className="how-it-works-path"
                d="M 600 135 C 800 185, 800 -5, 1000 25"
                pathLength="100"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                fill="none"
              />
              <path
                className="how-it-works-path how-it-works-path-glow how-it-works-path-right"
                d="M 600 135 C 800 185, 800 -5, 1000 25"
                pathLength="100"
                stroke="#e7b039"
                strokeWidth="2"
                filter="url(#pathGlow)"
                fill="none"
              />
            </svg>

            {/* CARDS */}
            <div className="g-4 how-it-works">
              <div className="how-it-works-card">
                <h4>Buy on CoinStore (CEX)</h4>
                <p>MEDC/USDT is now live on CoinStore — trade on a leading centralized exchange</p>
              </div>
              <div className="how-it-works-card">
                <h4>Buy on PancakeSwap (DEX)</h4>
                <p>MEDC is also available on PancakeSwap and other DEX platforms</p>
              </div>
              <div className="how-it-works-card">
                <h4>Use & Benefit</h4>
                <p>Use your MEDCOIN within the platform and across the health ecosystem</p>
              </div>
            </div>
          </div>


          <div className="text-center d-flex flex-wrap justify-content-center gap-2">
            <a href='https://www.coinstore.com/spot/MEDCUSDT' className='common_outline_btn' target='_blank' rel='noreferrer'>Buy on CoinStore</a>
            <a href='https://pancakeswap.finance/swap?outputCurrency=0xAAfA7Ef15233B80E0B99E125228f30220450784e' className='common_outline_btn' target='_blank' rel='noreferrer'>Buy on PancakeSwap</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
