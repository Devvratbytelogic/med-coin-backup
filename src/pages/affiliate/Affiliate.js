import React from 'react'
import SplashScreen from '../../components/SplashScreen'
import Menu from '../../components/menu'
import ParticleCanvas from '../../components/ParticleCanvas'
import PresaleAffiliate from '../../components/presaleAffiliate'

export default function Affiliate() {
    return (
        <>
            <SplashScreen />
            <Menu />
            <section className="sliderSec padSec overHide pb-0 pb-md-5 min-vh-100 d-grid align-items-center justify-content-center text-center position-relative" id="top" >

                {/* Particle Background */}
                <div className="ParticleCanvas position-absolute w-100 h-100">
                    <ParticleCanvas />
                </div>
                {/* <div className="maquee aniSec d-none d-md-block mt-0 "><div className='ani'><div className='aniIn'>Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span></div></div></div> */}

                <div className="container position-relative">
                    <div className="px-3">
                        <h1 className="fw-bold text-white">
                            Affiliate Program 🎉
                        </h1>
                        <p >Earn up to 10% by referring MedCoin.</p>
                    </div>

                    {/* Steps */}
                    <div className="d-flex justify-content-center align-items-center text-white small gap-3 my-4 flex-wrap text-center">
                        <span className="d-flex align-items-center gap-1">
                            <i className="fa-solid fa-wallet"></i> Connect Your Wallet
                        </span>
                        <span className="d-none d-md-inline mx-2 text-secondary">|</span> {/* hidden on mobile */}
                        <span className="d-flex align-items-center gap-1">
                            <i className="fa-solid fa-link"></i> Copy Your Unique Link
                        </span>
                        <span className="d-none d-md-inline mx-2 text-secondary">|</span> {/* hidden on mobile */}
                        <span className="d-flex align-items-center gap-1">
                            <i className="fa-solid fa-share-nodes"></i> Share and earn flat 10%
                        </span>
                    </div>

                    {/* Button */}
                    <div className="mt-4">
                        <div className="px-3">
                            <PresaleAffiliate />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}








// import React from 'react'
// import SplashScreen from '../../components/SplashScreen'
// import Menu from '../../components/menu'
// import ParticleCanvas from '../../components/ParticleCanvas'
// import PresaleAffiliate from '../../components/presaleAffiliate'

// export default function Affiliate() {
//     return (
//         <>
//             <SplashScreen />
//             <Menu />
//             <section className="sliderSec padSec overHide pb-0 pb-md-5 min-vh-100" id='top'>
//                 <div className="ParticleCanvas"><ParticleCanvas /></div>
//                 <div className="maquee aniSec d-none d-md-block mt-0 "><div className='ani'><div className='aniIn'>Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span> <span className="px-5">  Pre-sale Live | Limited Time | TGE Coming Soon | Buy Now Real Utility Token | Telemedicine Platform | AI + Blockchain</span></div></div></div>
//                 <div className="container position-relative z-3">
//                     <div className="px-3">
//                         <h1 className="fw-bold text-white">
//                             Affiliate Program 🎉
//                         </h1>
//                         <p >Earn up to 10% by referring MedCoin.</p>
//                     </div>

//                     {/* Steps */}
//                     <div className="d-flex justify-content-center align-items-center text-white small gap-3 my-4 flex-wrap">
//                         <span className="d-flex align-items-center gap-1">
//                             <i className="fa-solid fa-wallet"></i> Connect Your Wallet
//                         </span>
//                         <span className="mx-2 text-secondary">|</span>
//                         <span className="d-flex align-items-center gap-1">
//                             <i className="fa-solid fa-link"></i> Copy Your Unique Link
//                         </span>
//                         <span className="mx-2 text-secondary">|</span>
//                         <span className="d-flex align-items-center gap-1">
//                             <i className="fa-solid fa-share-nodes"></i> Share and earn flat 10%
//                         </span>
//                     </div>

//                     {/* Button */}
//                     <div className="mt-4">
//                         <div className="px-3">
//                             <PresaleAffiliate />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }