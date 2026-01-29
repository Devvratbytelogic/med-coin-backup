import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Menu from "./menu";
import Footer from "./footer";
import Presale from "./presale.js";
import Piechart from "./piechart.js";
import Team from "./team.js";
import FAQ from "./faq.js";
import SplashScreen from "./SplashScreen.js";

import ParticleCanvas from "./ParticleCanvas";
import HeroSection from './HeroSection.js';
const IndexSections = () => {
  return (
    <>

      <SplashScreen />
      <Menu />

      <section className="sliderSec padSec overHide pb-0 pb-md-5" id='top'>
        {/* <div className="ParticleCanvas"><ParticleCanvas /></div> */}
        <div className="maquee aniSec d-none d-md-block mt-0 "><div className='ani'><div className='aniIn'>Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span></div></div></div>
        <div className="container p-0 mt-md-5 mt-lg-0">
          <div className="row gy-5">
            <HeroSection />
          </div>
        </div>
      </section>
      {/* <div className="relative d-block d-md-none">
        <div className="px-3">
          <Presale />
        </div>
      </div>
      <div className="AnimationLogo  d-block d-md-none">
        <img src="./images/circleLogo.svg" className="img-fluid" />
      </div> */}


      <section className="text-center padSec" id='features'>
        <div className="container">
          <div className="common_outline_btn btn_fit_width mx-auto mb-3">About MEDCOIN</div>
          <h2 className="h2mY">What is MEDCOIN.AI</h2>
          <p className='subdecription'>MEDCOIN.AI is a smart health platform that connects multiple specialties in a unified system.</p>
          <p className='subdecription'>Using artificial intelligence and quantum computing, it enables 24/7 consultations via high-performance humanized avatars, offering integrated diagnostics, personalized care paths, and medical support with an unmatched level of accessibility and empathy.</p>
          <p className='subdecription'>It's more than technology — it's a new way of caring for life.</p>
          <div className="mFeatures">
            <div className="row">
              <div className="col-md-6">
                <div className="snFeature">
                  <div className="img"><div><div><img src="./images/about/about-img1.svg" className="img-fluid" /></div></div></div>
                  <div><h4>Real Utility</h4>
                    <p>MEDCOIN is a digital currency with real utility, social impact, and cutting-edge technology.</p></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="snFeature">
                  <div className="img"><div><div><img src="./images/about/about-img2.svg" className="img-fluid" /></div></div></div>
                  <div><h4>Tech Integration</h4>
                    <p>Powered by Artificial Intelligence (AI) and Blockchain, MEDCOIN connects people, healthcare professionals, labs, and technology in a new, smarter, and more accessible reality.</p></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="snFeature">
                  <div className="img"><div><div><img src="./images/about/about-img3.svg" className="img-fluid" /></div></div></div>
                  <div><h4>Telemedicine Platform</h4>
                    <p>At the core of the ecosystem is the MEDCOIN telemedicine platform, enabling secure, fast, and empathetic digital consultations — connecting patients and health professionals anywhere.</p></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="snFeature">
                  <div className="img"><div><div><img src="./images/about/about-img4.svg" className="img-fluid" /></div></div></div>
                  <div><h4>Flexible Payments</h4>
                    <p>MEDCOIN can also be used as a payment method both inside and outside the platform, in B2B and B2C operations. Payments between labs, clinics, pharmacies, patients, and healthcare companies can be made with ease, safety, and traceability.</p></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="snFeature">
                  <div className="img"><div><div><img src="./images/about/about-img5.svg" className="img-fluid" /></div></div></div>
                  <div><h4>Global Healthcare</h4>
                    <p>More than just a technology, MEDCOIN is a tool for connection and innovation, designed to support a new era of global healthcare.</p></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="snFeature">
                  <div className="img"><div><div><img src="./images/about/about-img6.svg" className="img-fluid" /></div></div></div>
                  <div><h4>Medical Revolution</h4>
                    <p>We are entering what we call the Golden Age of Medicine — and MEDCOIN is one of the bridges that makes it possible.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-start padSec pb-0" id=''>
        <div className="container">
          <h2 className="h2mY text-center">Why MEDCOIN?</h2>
          <div className="row justify-content-center">
            <div className="col-5 col-sm-4">
              <div className="LLOgo text-center">
                <img src="./images/whycoin.png" className="img-fluid mobshow" />
                <img src="./images/circleLogo.svg" className="img-fluid mobhide someupper" />
              </div>
            </div>
            <div className="col-7">
              <div className="whyContent mt-md-4">
                <div className="d-flex align-items-start mb-2">
                  <img src="./images/start.svg" className="img-fluid" />
                  <p className="mb-0">Telemedicine platform powered by AI</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <img src="./images/start.svg" className="img-fluid" />
                  <p className="mb-0">Fast, global payments</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <img src="./images/start.svg" className="img-fluid" />
                  <p className="mb-0">Direct connection between patients and doctors</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <img src="./images/start.svg" className="img-fluid" />
                  <p className="mb-0">Real utility token</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <img src="./images/start.svg" className="img-fluid" />
                  <p className="mb-0">Expanding ecosystem with global vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center padSec" id='work'>
        <div className="container">
          <div className="common_outline_btn mb-3 mx-auto btn_fit_width">SOME FACTS</div>
          <h2 className="h2mY">How It Works</h2>

          <div className="mFeatures our_facts">
            <div className="row">
              <div className="col-md-4">
                <div className="snFeature">
                  <h4>Buy on PancakeSwap</h4>
                  <p>Buy Your Favorite Crypto Tokens Quickly Using PancakeSwap</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="snFeature">
                  <h4>Live on DEXs</h4>
                  <p>Token Trading Is Live on All Leading DEX Platforms</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="snFeature">
                  <h4>Use & Benefit</h4>
                  <p>Use your MEDCOIN  within the platform and across the health ecosystem</p>
                </div>
              </div>

            </div>
            <div className="text-center d-flex justify-content-center">
              <a href='https://pancakeswap.finance/swap?outputCurrency=0xAAfA7Ef15233B80E0B99E125228f30220450784e' className='common_btn mt-4 mx-auto' target='_blank'><span className="d-inline-block w-auto m-auto">Get Your Tokens Now</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center padSec" id='tokenomics'>
        <div className="container">
          <div className="common_outline_btn btn_fit_width mx-auto mb-3">Tokenomics</div>
          <h2 className="h2mY">Token Distribution </h2>
          <p className='subdecription'>Token Supply - 1,000,000,000 MEDC</p>
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="Tokenomics">
                <div className="boxCenter">
                  <div className="boxCenterdiv">
                    <div className="boxCenterdiv1">
                      <Piechart />
                    </div>
                  </div>
                </div>

                {/* <img src="./images/tokenomics-new.png" className="img-fluid TokenomicsSVHBG" /> */}
              </div>
            </div>
            <div className="col-md-8">

              <div className="TokenFull text-start">
                <div className="row">
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons1.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2" >3% Family Fund</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons2.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2" >7% Founders & Core Team</h4>
                        <p className="mb-0">(Vesting)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons3.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2" >10% Development</h4>
                        <p className="mb-0">(milestone-based)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons4.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2" >10%  Marketing & Partnerships</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons5.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2">25% Public Sale</h4>
                        <p className="mb-0">(Open to all participants)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons6.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2" >20% Liquidity Pool</h4>
                        <p className="mb-0">(DEX launch)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons7.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2">15% Staking & Community Incentives</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="snFeature d-flex align-items-start gap-3">
                      <img src="./images/tokenicons/tokenicons8.svg" className="img-fluid" />
                      <div className="">
                        <h4 className="mt-1 mb-2">10% Strategic Treasury</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center padSec" id='roadmap'>
        <div className="container">
          <div className="common_outline_btn btn_fit_width mx-auto mb-3">ABOUT ICO</div>
          <h2 className="h2mY">Road Map</h2>
          <div className="row justify-content-center someRightPos">
            <div className="col-md-6">
              <div className="mRoadmap text-start">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="snRoadmap active current"><div className="circleRoad"><span></span></div>
                      <h4>Pre-sale and community activation</h4>
                      <p>Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller trunkfish spiny dogfish! Jewel tetra frigate!</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="snRoadmap active current"><div className="circleRoad"><span></span></div>
                      <h4>TGE + exchange listings</h4>
                      <p>Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in.</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="snRoadmap "><div className="circleRoad"><span></span></div>
                      <h4>Active platform with AI consultations</h4>
                      <p>Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey. Bombay duck sand goby snake mudhead</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="snRoadmap"><div className="circleRoad"><span></span></div>
                      <h4>Launch of MEDCOIN Health, Academy, and Lab</h4>
                      <p>Barbelless catfish pelican gulper candlefish thornfishGulf menhaden ribbonbearer riffle dace</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="snRoadmap"><div className="circleRoad"><span></span></div>
                      <h4>Strategic Partnerships and Global Integrations</h4>
                      <p>Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="topnSalw text-center padSec">
        <div className="container">
          <h2 className="h2mY">Token Sale</h2>

          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="brandSS">
                <div className="brandSSimg">
                  <img src="./images/logo.png" className="img-fluid " />

                  <div className="glow-line"></div>
                </div>
                <img src="./images/cicleCl-drak.svg" className="img-fluid cicleCl" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="whyContent mt-md-4">
                <div className="d-flex align-items-start mb-2">
                  <img className="img-fluid" src="./images/start.svg" />
                  <p className="mb-0">Tokens released at TGE</p>
                </div>
                {/*<div className="d-flex align-items-start mb-2">
              <img className="img-fluid" src="./images/start.svg" />
              <p className="mb-0">Purchase limits per wallet (to be defined)</p>
            </div>*/}
                <div className="d-flex align-items-start mb-2">
                  <img className="img-fluid" src="./images/start.svg" />
                  <p className="mb-0">Limited-time offer or while supplies last</p>
                </div>
              </div>
              <div className="tokenInfo">
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Token name:</b></span>
                  <span className="text-end">MEDCOIN</span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Ticker Symbol:</b></span>
                  <span className="text-end">MEDC</span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Total Supply:</b></span>
                  <span className="text-end">1,000,000,000 MEDC </span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Buy Tax / Sell Tax:</b></span>
                  <span className="text-end">3% / 3% </span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Currency Symbol Image:</b></span>
                  <span className="text-end"><img src={`./images/logo.png`} width={30} /></span>
                </div>
                {/*<div className="d-flex align-items-start justify-content-between">
              <span className="text-start"><b>Token Holding Limit:</b></span>
              <span className="text-end">20,000,000 MEDC</span>
            </div>*/}
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Token for Pre-sale:</b></span>
                  <span className="text-end">250,000,000 MEDC</span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Pre-sale Start Price :</b></span>
                  <span className="text-end">$0.02</span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Price Increases: </b></span>
                  <span className="text-end">$0.001 On Every 1M Tokens Sold</span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Soft Cap: </b></span>
                  <span className="text-end">$75,000.00 </span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Hard Cap: </b></span>
                  <span className="text-end">$5,000,000.00 (Min)</span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Min Purchase Per Txn:</b></span>
                  <span className="text-end">$50.00</span>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <span className="text-start"><b>Max Purchase Per Wallet:</b></span>
                  <span className="text-end">$10,000.00</span>
                </div>
              </div>

              {/*<div className="tokenInfoBottom text-start ">
            <h4>General description</h4>
            <p>Cryptoland will be released on the basis of Ethereum platform and fully comply with ERC20* standard.</p>
            <p>Support of this standard guarantees the compatibility of the token with third-party services (wallets, exchanges, listings, etc.), and provides easy integration.</p>
          </div>*/}
              <div className="d-flex">
                <a href='https://pancakeswap.finance/swap?outputCurrency=0xAAfA7Ef15233B80E0B99E125228f30220450784e' className="common_btn d-flex gap-2 align-items-center mt-4 w-auto" target='_blank'><span className="d-inline-block w-auto">Buy Token</span></a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="text-center padSec" id='team'>
        <div className="container">
          <h2 className="h2mY">Our Team</h2>
          <Team />
        </div>
      </section>

      {/* <div className="maqueeGold maquee aniSec d-none d-md-block mt-0 ">
        <div className='ani'>
          <div className='aniIn'>
            <span className="tred">ATTENTION ⏰:</span> Affiliate & Ambassador Program is available exclusively during the Pre-Sale. After token launch, participation will be technically impossible. Register now.
            <span className="px-5"> <span className="tred">ATTENTION ⏰:</span> Affiliate & Ambassador Program is available exclusively during the Pre-Sale. After token launch, participation will be technically impossible. Register now.</span>
            <span className="px-5"> <span className="tred">ATTENTION ⏰:</span> Affiliate & Ambassador Program is available exclusively during the Pre-Sale. After token launch, participation will be technically impossible. Register now.</span>
          </div>
        </div>
      </div> */}
      {/* <div className="container padSec " id='affilateBg'>
        <Link to='/affiliate' className='text-decoration-none text-white'>
          <section className="affilateBg text-start   " id=''>
            <img src="./images/airdrop1.svg" className="img-fluid airdrop1" />
            <img src="./images/airdrop1.svg" className="img-fluid airdrop2" />
            <div className="row ">
              <div className="col-8 col-md-6">
                <h2 className="h2mY text-start">Affiliate Program 🎉</h2>
                <p>Earn up to 10% by referring MEDCOIN.</p>
                <h5>Join the Global Health Ambassador Program and be rewarded for every new buyer you bring in.</h5>
                <div className="d-flex  ">
                  <Link to='/affiliate' className="mybtn d-flex gap-2 align-items-center mt-4 w-auto"><span className="d-inline-block w-auto">Click here to learn more</span></Link>
                </div>
              </div>
            </div>
          </section>
        </Link>
      </div> */}

      {/*<FAQ />*/}

      <section className="padSec pt-0">
        <div className="container">
          <div className="text-center bgRevolutionary">
            <div className="common_outline_btn btn_fit_width mx-auto mb-3">Revolutionary</div>
            <h2 className="h2mY">Trust & vision</h2>
            <p className="subdecription">
              Backed by science. Driven by people. Powered by AI.
            </p>
            <div className="text-center d-flex justify-content-center">
              <a href='#presaleBox' className="common_btn d-flex gap-2 align-items-center ustify-content-center w-auto m-auto"><span className="d-inline-block w-auto">Get Started</span></a>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndexSections;