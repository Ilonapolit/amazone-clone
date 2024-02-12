// import React, { useState } from 'react';
import Slider from 'react-slick';
import { banner1, banner2, banner3 } from '../Header/assets/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import "./Banner.css"; 
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div className="dots-container">
        <ul className="dots">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="dot"></div>
    )
  };
  return (
    <div className="banner-container">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="banner1" />
        </div>
        <div>
          <img src={banner2} alt="banner2" />
        </div>
        <div>
          <img src={banner3} alt="banner3" />
        </div>
      </Slider>
    </div>
  );
};
export default Banner;