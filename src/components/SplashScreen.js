import React, { useEffect, useState } from "react";


const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // splash duration in ms

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <div className="splash-container">
      <div className="logo-wrapper">
        <img src='./images/circleLogo.svg' alt="MedCoin Logo" className="splash-logo" />
      </div>
    </div>
  ) : null;
};

export default SplashScreen;
