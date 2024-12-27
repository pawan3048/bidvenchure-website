import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Slider2.css";

const Carousel = () => {
  const sliderImg1 = require("../images/BidVentureSliderImage (1).png");
  const sliderImg2 = require("../images/BidVentureSliderImage (2).png");
  const sliderImg3 = require("../images/BidVentureSliderImage (3).png");
  const images = [sliderImg1, sliderImg2, sliderImg3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="">
        <ul className="flex justify-center">
          {dots.map((dot, index) => (
            <li key={index} className="">
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 slick-active:bg-blue-600 slick-active:w-4 slick-active:h-4 transition-all duration-300"></div>
    ),
  };

  return (
    <div className=" Container mt-20 w-full  sm:pt-1 sm:pb-1  lg:pt-0  relative sm:h[150px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-6">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="sliderContainer w-full object-cover  bg-center border shadow-md max-sm:h-[150px] max-md:h-[200px] lg:h-[470px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
      onClick={onClick}
    >
      <GoChevronRight className="text-2xl" />
    </button>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
      onClick={onClick}
    >
      <GoChevronLeft className="text-2xl" />
    </button>
  );
};

export default Carousel;
