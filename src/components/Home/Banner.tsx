import React, { useState } from 'react';
import Slider from 'react-slick';
import { banner1, banner2, banner3 } from '../Header/assets/index';

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots: any) => (
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          width: '210px',
        }}
      >
        <ul
          style={{
            width: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          background: '#131921',
          padding: '8px 0',
          cursor: 'pointer',
          border: '1px solid #f3a847',
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="w-full">
      <div className="w-full h-full relative">
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
    </div>
  );
};

export default Banner;

