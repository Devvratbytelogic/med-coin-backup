import React from "react";

export default function BinanceHero() {
    return (
        <>
            <div className="powered_by powered_by_with_line">
                <svg
                    className="powered_by_line_svg"
                    viewBox="0 0 200 80"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="binanceLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F0B90B" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#F0B90B" stopOpacity="1" />
                            <stop offset="100%" stopColor="#F0B90B" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <rect
                        x="4"
                        y="4"
                        width="192"
                        height="72"
                        rx="36"
                        ry="36"
                        fill="none"
                        stroke="url(#binanceLineGradient)"
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        pathLength="100"
                        className="powered_by_line_path"
                        transform="translate(100, 40) scale(1, -1) translate(-100, -40)"
                    />
                </svg>
                <div className="powered_by_img">
                    <img
                        src="/images/binance.png"
                        alt="Binance"
                        className="img-fluid img_contain"
                    />
                </div>
                <div className="powered_by_content">
                    <p className="powered_by_name">BINANCE SMART CHAIN</p>
                </div>
            </div>
        </>
    );
}
