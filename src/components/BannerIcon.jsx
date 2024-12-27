// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const BannerIcon = () => {
//   const images = [
//     "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   ];

//   const captions = [
//     "Birthday Party",
//     "Wedding",
//     "Ceremony",
//     "Divorce Party",
//     "Office Meeting",
//     "Graduation Party",
//     "Baby Shower",
//     "Festival Event",
//     "Corporate Gathering",
//     "Anniversary ",
//   ];

//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 1200,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,




//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//         },


        
//       },
//     ],
//   };

//   return (
//     <div className="sliderContainer mt-10 w-full lg:p-4 sm:pt-1 sm:pb-1 md:p-6 lg:pt-0  relative">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="text-center">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-[120px] h-[120px] rounded-full object-cover bg-center border shadow-md mx-auto"
//             />

//             <p className="text-[18px] font-medium mt-2 text-gray-700">
//               {captions[index]}
//             </p>

//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BannerIcon;



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerIcon = () => {
  const images = [
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const captions = [
    "Birthday Party",
    "Wedding",
    "Ceremony",
    "Divorce Party",
    "Office Meeting",
    "Graduation Party",
    "Baby Shower",
    "Festival Event",
    "Corporate Gathering",
    "Anniversary ",
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  // Disable the arrows

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
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[120px] h-[120px] rounded-full object-cover bg-center border shadow-md mx-auto"
            />
            <p className="text-[18px] font-medium mt-2 text-gray-700">
              {captions[index]}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerIcon;

