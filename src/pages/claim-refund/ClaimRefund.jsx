import React from 'react'
import SplashScreen from '../../components/SplashScreen'
import Menu from '../../components/menu'
import Presale from '../../components/presale'

export default function ClaimRefund() {
    return (
        <>
            <SplashScreen />
            <Menu />
            <section className="common_top_space padSec overHide pb-0 pb-md-5 min-vh-100 d-grid align-items-center justify-content-center text-center position-relative" id="top" >
                <div className="relative ">
                    <div className="px-3">
                        <Presale />
                    </div>
                </div>
            </section>
        </>
    )
}
