import React from 'react';
import Menu from '../../components/menu';
import SplashScreen from '../../components/SplashScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HowToBuy() {
  return (
    <>
      <SplashScreen />
      <Menu />

      <section className="container common_top_space pb-4">
        <div className="row gy-3">
          {/* Left side: Steps */}
          <div className="col-md-6">
            <h2 className="mb-4">How to Buy MEDC</h2>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item">Open <a href="https://medcoin.ai" target="_blank" rel="noreferrer">https://medcoin.ai</a></li>
              <li className="list-group-item">Copy Contract Address</li>
              <li className="list-group-item">Click the Button "Buy on PancakeSwap"</li>
              <li className="list-group-item">Click Connect Wallet</li>
              <li className="list-group-item">Connect Metamask, Trustwallet, or any other wallet</li>
              <li className="list-group-item">Paste the Contract Address in the PancakeSwap token search field (Select a Token)</li>
              <li className="list-group-item">Click Proceed</li>
              <li className="list-group-item">Enter Desired USDT amount</li>
              <li className="list-group-item">Select Wallet Account</li>
              <li className="list-group-item">Click Swap and Confirm Swap</li>
              <li className="list-group-item">Confirm</li>
              <li className="list-group-item">Add MEDC to Wallet</li>
            </ol>
          </div>

          {/* Right side: Video */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="video-container" style={{ width: '100%', maxWidth: '500px' }}>
              <video controls width="100%" style={{ borderRadius: '10px' }}>
                <source src="/videos/how-to-buy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
