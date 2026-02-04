import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useThemeMode from "../hooks/useThemeMode";

const TeamSlider = () => {
  const darkMode = useThemeMode();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,  // Show 2 full + 1 half
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200, // screens below 1200px
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992, // screens below 992px
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768, // screens below 768px
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const teamMembers = [
    {
      // imgLight: "./images/globe.svg",
      imgLight: "./images/our-team-new.png",
      imgDark: "./images/our-team-new.png",
      name: "", title: "Team MedCoin", desc: "Our team is composed of specialists in blockchain and medicine — visionary professionals committed to transforming global healthcare through innovation, empathy, and technology.", desc2: 'We believe a decentralized approach represents our mission best.'
    },
    // { img: "./images/team1.png", name: "", title: "Team MedCoin", desc: "Our team is composed of specialists in blockchain and medicine — visionary professionals committed to transforming global healthcare through innovation, empathy, and technology.", desc2: 'We believe a decentralized approach represents our mission best.' },
  ];

  return (
    <div className='mt-4'>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} >
            <div className='TeamInfoOuter text-center'>
              <div className='TeamInfo text-center'>
                <div className='teamIn'>
                </div>
                <div className='row align-items-center text-md-start'>
                  <div className='col-md-4'>
                    <img
                      src={darkMode ? member.imgDark : member.imgLight}
                      alt={member.name} className='img-fluid m-auto'
                    />
                  </div>
                  <div className='col-md-8'>
                    <h3>{member.name}</h3>
                    <p className='teamdesc gold_color_text mb-4'>{member.title}</p>
                    <p className='teamdescP'>{member.desc}</p>
                    <p className='teamdescP'>{member.desc2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
