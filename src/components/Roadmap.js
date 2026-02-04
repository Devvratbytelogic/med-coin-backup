import React, { useState, useRef, useEffect } from 'react';
import { LuLoader } from "react-icons/lu";

const ROADMAP_ITEMS = [
  // { date: 'June 2017', title: 'Pre-sale and community activation', description: 'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller trunkfish spiny dogfish! Jewel tetra frigate!', status: 'completed', isActive: false },
  // { date: 'June 2018', title: 'TGE + exchange listings', description: 'Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in.', status: 'completed', isActive: false },
  // { date: 'June 2019', title: 'Active platform with AI consultations', description: 'Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey. Bombay duck sand goby snake mudhead', status: 'in-progress', isActive: true },
  // { date: 'June 2020', title: 'Launch of MEDCOIN Health, Academy, and Lab', description: 'Barbelless catfish pelican gulper candlefish thornfish Gulf menhaden ribbonbearer riffle dace', status: 'in-progress', isActive: false },
  // { date: 'June 2021', title: 'Strategic Partnerships and Global Integrations', description: 'Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.', status: 'in-progress', isActive: false },
  { date: '2026', title: 'Exchange preparation, brand consolidation, ecosystem positioning', description: 'Preparing for exchange listings with brand consolidation and strategic ecosystem positioning.', status: 'in-progress', isActive: true },
  { date: '2026', title: 'Exchange listings, liquidity expansion, market making, community growth', description: 'Major exchange listings, expanding liquidity, market making initiatives, and community growth.', status: 'in-progress', isActive: false },
  { date: '2026', title: 'MVP Beta launch (Telemedicine pilot)', description: 'Onboarding of medical professionals, and first real-world consultations.', status: 'in-progress', isActive: false },
  { date: '2026', title: 'MedCoin Health Phase 1, regional expansion preparation', description: 'Launching MedCoin Health Phase 1 and preparing for regional expansion.', status: 'in-progress', isActive: false },
  { date: '2027', title: 'MedCoin Academy launch', description: 'Launch of MedCoin Academy for education and training.', status: 'in-progress', isActive: false },
  { date: '2027', title: 'DAO activation and first community governance proposals', description: 'Activating the DAO and implementing first community governance proposals.', status: 'in-progress', isActive: false },
];

const Roadmap = () => {
  const roadmapRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(() => ROADMAP_ITEMS.map(() => false));

  useEffect(() => {
    const container = roadmapRef.current;
    if (!container) return;
    const items = container.querySelectorAll('[data-roadmap-index]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.roadmapIndex, 10);
            if (!isNaN(index)) {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="roadmap-section text-center padSec pt-0" id="roadmap" ref={roadmapRef}>
      <div className="container">
        <div className="common_outline_btn btn_fit_width mx-auto mb-3">ABOUT ICO</div>
        <h2 className="roadmap-title h2mY">Road <spna className='gold_color_text'>Map</spna></h2>
        <div className={`roadmap-timeline ${visibleItems.some(Boolean) ? 'in-view' : ''}`}>
          <div className="roadmap-line">
            <div
              className="roadmap-line-solid"
              style={{ height: `${(ROADMAP_ITEMS.filter((item) => item.status === 'completed').length / ROADMAP_ITEMS.length) * 100}%` }}
            />
            <div className="roadmap-line-dotted" />
          </div>
          {ROADMAP_ITEMS.map((item, index) => (
            <div
              key={index}
              data-roadmap-index={index}
              className={`roadmap-item roadmap-item-${index % 2 === 0 ? 'right' : 'left'} ${visibleItems[index] ? 'visible' : ''}`}
            >
              <div className="roadmap-connector" />
              <div className={`roadmap-node ${item.isActive ? 'active' : ''}`} />
              <div className="roadmap-card">
                <div className="roadmap-card-header">
                  <span className="roadmap-date">{item.date}</span>
                  <span className={`roadmap-status roadmap-status-${item.status}`}>
                    {item.status === 'completed' ? (
                      <><i className="fa-solid fa-check" /><span>Completed</span></>
                    ) : (
                      <><LuLoader /><span>In Progress</span></>
                    )}
                  </span>
                </div>
                <h4 className="roadmap-card-title">{item.title}</h4>
                {/* <p className="roadmap-card-desc">{item.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
