import React from 'react';
import { ArrowSVG } from './AllSVG';

const TokenRoleSection = () => {
  const roles = [
    'Healthcare service payments',
    'Cross-border medical transactions',
    'Incentive models for professionals and users',
    'Future governance participation',
    'Integration across B2B and B2C healthcare networks',
  ];

  return (
    <section className="text-center padSec token-role-section pt-0" id="token-role">
      <div className="container">
        <h2 className="h2mY">The Role of the <span className="gold_color_text">MEDCOIN Token</span></h2>

        <div className="token-role-card">
          <div className="token-role-card_content">
            <p className="token-role-intro">
              MEDCOIN ($MEDC) is the digital asset that powers every interaction within the MedCoin ecosystem.
              As platform adoption expands globally, the token plays a central role in:
            </p>
            <div className="token-role-list-wrapper">
              {roles.map((item, i) => (
                <span key={i} className="token-role-item">
                  <span className="why_medcoin_dot token-role-dot" />
                  {item}
                </span>
              ))}
            </div>
            <p className="token-role-outro">
              With a fixed total supply and increasing real-world utility, MEDC is designed to align ecosystem growth with token demand.
              Holding MEDC represents participation in the expansion of a technology-driven global healthcare network.
            </p>
            <a
              href="/final-whitepaper.pdf"
              target="_blank"
              rel="noreferrer"
              className="common_outline_btn btn_fit_width token-role-cta"
            >
              Learn more in our Whitepaper
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenRoleSection;
