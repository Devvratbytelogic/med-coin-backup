import React from 'react';
import Menu from "./menu";
import Footer from "./footer";
import Piechart from "./piechart.js";
import Team from "./team.js";
import SplashScreen from "./SplashScreen.js";
import HeroSection from './HeroSection.js';
import Roadmap from './Roadmap.js';
import { FlexiblePaymentsSVG, GlobalHealthcareSVG, MedicalRevolutionSVG, RealUtilitySVG, TechIntegrationSVG, TelemedicinePlatformSVG } from './AllSVG.js';
import HeroWaveBackground, { GoldenTrailCanvas } from './HeroWaveBackground.js';
import WhyMedcoin from './WhyMedcoin.js';
import HowItWorks from './HowItWorks.js';
// import HeroWaveBackground, { GoldenTrailCanvas } from './HeroWaveBackground.js';

const IndexSections = () => {
  return (
    <>

      <SplashScreen />
      <Menu />

      <section className="sliderSec padSec overHide pb-0" id='top'>
        {/* <div className="ParticleCanvas"><ParticleCanvas /></div> */}
        <div className='hero-wrapper'>
          {/* <HeroWaveBackground /> */}
          <GoldenTrailCanvas />
          <div className="container p-0 mt-md-5 mt-lg-0">
            <div className="row align-items-center gy-5">
              <HeroSection />
            </div>
          </div>
        </div>
        <div className="maquee aniSec">
          <div className='ani'><div className='aniIn'>Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span></div></div>

        </div>
      </section>


      <div className='main_content'>
        <section className="text-center padSec" id='features'>
          <div className="container">
            {/* <div className="common_outline_btn btn_fit_width mx-auto mb-3">About MEDCOIN</div> */}
            <h2 className="h2mY">What is <span className='gold_color_text'>MEDCOIN.AI</span></h2>
            <p className='subdecription'>MEDCOIN.AI is a smart health platform that connects multiple specialties in a unified system.</p>
            <p className='subdecription'>Using artificial intelligence and quantum computing, it enables 24/7 consultations via high-performance humanized avatars, offering integrated diagnostics, personalized care paths, and medical support with an unmatched level of accessibility and empathy.</p>
            <p className='subdecription'>It's more than technology — it's a new way of caring for life.</p>
            <div className="mFeatures">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="snFeature features-card">
                    <div className="features-card-icon">
                      {/* <img src="./images/about/about-img1.svg" className="img-fluid" alt="Real Utility" /> */}
                      <RealUtilitySVG />
                    </div>
                    <h4>Real Utility</h4>
                    <p>MEDCOIN is a digital currency with real utility, social impact, and cutting-edge technology.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="snFeature features-card">
                    <div className="features-card-icon">
                      {/* <img src="./images/about/about-img2.svg" className="img-fluid" alt="Tech Integration" /> */}
                      <TechIntegrationSVG />
                    </div>
                    <h4>Tech Integration</h4>
                    <p>Powered by Artificial Intelligence (AI) and Blockchain, MEDCOIN connects people, healthcare professionals, labs, and technology in a new, smarter, and more accessible reality.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="snFeature features-card">
                    <div className="features-card-icon">
                      {/* <img src="./images/about/about-img3.svg" className="img-fluid" alt="Telemedicine Platform" /> */}
                      <TelemedicinePlatformSVG />
                    </div>
                    <h4>Telemedicine Platform</h4>
                    <p>At the core of the ecosystem is the MEDCOIN telemedicine platform, enabling secure, fast, and empathetic digital consultations — connecting patients and health professionals anywhere.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="snFeature features-card">
                    <div className="features-card-icon">
                      {/* <img src="./images/about/about-img4.svg" className="img-fluid" alt="Flexible Payments" /> */}
                      <FlexiblePaymentsSVG />
                    </div>
                    <h4>Flexible Payments</h4>
                    <p>MEDCOIN can also be used as a payment method both inside and outside the platform, in B2B and B2C operations. Payments between labs, clinics, pharmacies, patients, and healthcare companies can be made with ease, safety, and traceability.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="snFeature features-card">
                    <div className="features-card-icon">
                      {/* <img src="./images/about/about-img5.svg" className="img-fluid" alt="Global Healthcare" /> */}
                      <GlobalHealthcareSVG />
                    </div>
                    <h4>Global Healthcare</h4>
                    <p>More than just a technology, MEDCOIN is a tool for connection and innovation, designed to support a new era of global healthcare.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="snFeature features-card">
                    <div className="features-card-icon">
                      {/* <img src="./images/about/about-img6.svg" className="img-fluid" alt="Medical Revolution" /> */}
                      <MedicalRevolutionSVG />
                    </div>
                    <h4>Medical Revolution</h4>
                    <p>We are entering what we call the Golden Age of Medicine — and MEDCOIN is one of the bridges that makes it possible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyMedcoin />
        <HowItWorks />

        <section className="text-center padSec pt-0" id='tokenomics'>
          <div className="container">
            {/* <div className="common_outline_btn btn_fit_width mx-auto mb-3">Tokenomics</div> */}
            <h2 className="h2mY">Token <span className='gold_color_text'>Distribution</span> </h2>
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


        <Roadmap />

        <section className="topnSalw text-center padSec pt-0">
          <div className="container">
            <h2 className="h2mY">Token <span className='gold_color_text'>Sale</span></h2>

            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="brandSS">
                  <div className="brandSSimg">
                    <img src="./images/final/logo.png" className="img-fluid " />

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
                    <span className="text-end"><img src={`./images/final/logo.png`} width={30} /></span>
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

        <section className="text-center padSec pt-0" id='team'>
          <div className="container">
            <h2 className="h2mY">Our <span className='gold_color_text'>Team</span></h2>
            <Team />
          </div>
        </section>


        {/* <section className="padSec trust_vision_section"> */}
        <section className="padSec trust_vision_section pt-0">
          <div className="container">
            <div className="text-center bgRevolutionary">
              <div className="common_outline_btn btn_fit_width mx-auto mb-3"><span className='gold_color_text'>Revolutionary</span></div>
              <div className='my-4 py-2'>
                <h2 className="h2mY">Trust & vision</h2>
                <p className="subdecription">
                  Backed by science. Driven by people. Powered by AI.
                </p>
              </div>
              <div className="text-center d-flex justify-content-center">
                <a href='#presaleBox' className="common_outline_btn d-flex gap-2 align-items-center ustify-content-center w-auto m-auto"><span className="d-inline-block w-auto">Get Started</span></a>
              </div>

            </div>
          </div>
        </section>



      <Footer />
      </div>
    </>
  );
};

export default IndexSections;