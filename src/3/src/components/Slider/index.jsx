import React from 'react';
import Slider from 'react-slick';
import './slider.scss';
import PropTypes from 'prop-types';


const Glider = ({ children, category }) => {
  const settings = {
    infinite: !category,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !category,
    swipeToSlide: true,
    swipe: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      { children }
    </Slider>
  );
};

Glider.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.bool,
};

Glider.defaultProps = {
  category: false,
};

export default Glider;
