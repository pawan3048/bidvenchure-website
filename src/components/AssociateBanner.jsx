import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import restaurentlogo from "../images/restaurentlogo.png"; // Ensure path is correct

const AssociateBanner = () => {
  // Use the same image multiple times to match the captions count
  const images = Array(10).fill(restaurentlogo); // Repeat the image 10 times

  const captions = [
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
    "Restaurent Name",
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 8, // Adjust for smaller screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable the arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="sliderContainer mt-10 w-full lg:p-4 sm:pt-1 sm:pb-1 md:p-6 lg:pt-0 relative">
      <h1 className="heading text-center text-4xl font-bold">Our Associates</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="text-center my-4">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[120px] h-[120px] rounded-full object-cover bg-center border shadow-md mx-auto"
            />

            {/* <p className="text-[18px] font-medium relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full" > */}
            {/* <p className="text-[18px] font-medium mt-2 text-gray-700  after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"> */}
            {/* {captions[index]} */}
            {/* </p> */}
            <p
              className="text-[18px] font-medium mt-2 text-gray-700 relative 
                                 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 
                                 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {captions[index]}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AssociateBanner;
