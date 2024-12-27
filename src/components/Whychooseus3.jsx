// import React from "react";
// import "./Whychooseus3.css";
// import { IoMdPhonePortrait } from "react-icons/io";
// import financial from "../images/target.png"; // Import your image properly
// import { RiTimeZoneLine } from "react-icons/ri";
// import { RiMoneyRupeeCircleLine } from "react-icons/ri";
// import { RiRestaurant2Line } from "react-icons/ri";
// import { FaRegFaceGrinWink } from "react-icons/fa6";
// import img from '../images/target.png'

// const Whychooseus3 = () => {
//   const features = [
//     {
//       id: 1,
//       icon: <RiTimeZoneLine />,
//       title: "Save Time",
//       description: " Receive tailored offers from multiple restaurants without lifting a finger.",
//       color: "purple",
//     },
//     {
//       id: 2,
//       icon: <RiMoneyRupeeCircleLine />,
//       title: "Transparent Pricing",
//       description:
//         "Compare competitive bids and choose the best fit for your budget.",
//       color: "yellow",

//     },
//     {
//       id: 2,
//       icon: <RiRestaurant2Line />,
//       title: " Endless Options",
//       description:
//         " Access a variety of restaurants and event services for every occasion.",
//       color: "green",
//     },
//     {
//       id: 2,
//       icon: <FaRegFaceGrinWink />,
//       title: "Win-Win Model",
//       description:
//         " Customers get great deals; restaurants fill bookings and boost revenue.",
//       color: "red",
//     },
//   ];

//   const headerData = {
//     title: "Why Choose Us",
//     highlight: "",
//     description:
//       "Choose us to transform your financial outlook. With tailored solutions and expert guidance, we're dedicated to empowering your journey towards stability, growth, and prosperity. Your success starts here.",
//   };

//   const illustration = "illustration.png"; // Replace with your image path

//   return (
//     <div className="container">
//       {/* Features and Illustration Section */}
//       {/* 50% this one  */}
//       <div   className="main-content">
//       <div className="features-illustration">
//         <div className="features">



//           {/* Header Section */}
//           <div className="header  ">
//             <h1 className="text-4xl font-bold mb-3 ">
//               {headerData.title} <br />
//               <span className="highlight">{headerData.highlight}</span>
//             </h1>
//             <p className="description1">{headerData.description}</p>
//           </div>


//           {features.map((feature) => (
//             <div key={feature.id} className="feature-card">
//               <div className={`icon-circle ${feature.color}`}>
//                 {feature.icon}
//               </div>
//               <div className="feature-text">
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

      
        


//       </div>
// </div>

//      {/* 50% width illustration for images*/}

//       <div >
//             <img  className="sideimage" src={img} alt="image not found" />
//         </div>

//     </div>
//   );
// };

// export default Whychooseus3;









// // 17-12-2024
// import React from "react";
// import "./Whychooseus3.css";
// import { IoMdPhonePortrait } from "react-icons/io";
// import { RiTimeZoneLine, RiMoneyRupeeCircleLine, RiRestaurant2Line } from "react-icons/ri";
// import { FaRegFaceGrinWink } from "react-icons/fa6";
// import img from "../images/target.png"; // Correct path to your image
// import event from '../images/event.jpg'

// const Whychooseus3 = () => {
//   const features = [
//     {
//       id: 1,
//       icon: <RiTimeZoneLine />,
//       title: "Save Time",
//       description: "Receive tailored offers from multiple restaurants without lifting a finger.",
//       color: "purple",
//     },
//     {
//       id: 2,
//       icon: <RiMoneyRupeeCircleLine />,
//       title: "Transparent Pricing",
//       description: "Compare competitive bids and choose the best fit for your budget.",
//       color: "yellow",
//     },
//     {
//       id: 3,
//       icon: <RiRestaurant2Line />,
//       title: "Endless Options",
//       description: "Access a variety of restaurants and event services for every occasion.",
//       color: "green",
//     },
//     {
//       id: 4,
//       icon: <FaRegFaceGrinWink />,
//       title: "Win-Win Model",
//       description: "Customers get great deals; restaurants fill bookings and boost revenue.",
//       color: "red",
//     },
//   ];

//   const headerData = {
//     title: "Why Choose Us",
//     highlight: "Discover the Benefits",
//     description:
//       "We offer tailored solutions that save time, reduce costs, and deliver value for both customers and restaurants.",
//   };

//   return (
//     <div className="container1">
//       {/* Main Flex Container */}
//       <div className="flex-container">
//         {/* Left Section - Features */}
//         <div className="features-section">
//           {/* Header */}
//           <div className="header">
//             <h1 className="text-4xl font-bold">
//               {headerData.title} <br />
//               <span className="highlight">{headerData.highlight}</span>
//             </h1>
//             <p className="description1">{headerData.description}</p>
//           </div>
//           {/* Features */}
//           {features.map((feature) => (
//             <div key={feature.id} className="feature-card">

//               <div className={`icon-circle ${feature.color}`}>
//                 {feature.icon}
//               </div>
              
//               <div className="feature-text">
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>


//         {/* Right Section - Image */}
//         <div className="image-section">
//           <img className="side-image  " src={event} alt="Illustration" />
//         </div>



//       </div>
//     </div>
//   );
// };

// export default Whychooseus3;



import React from "react";
import { RiTimeZoneLine, RiMoneyRupeeCircleLine, RiRestaurant2Line } from "react-icons/ri";
import { FaRegFaceGrinWink } from "react-icons/fa6";
import event from '../images/event.jpg'; // Ensure path is correct

const Whychooseus3 = () => {
  const features = [
    {
      id: 1,
      icon: <RiTimeZoneLine />,
      title: "Save Time",
      description: "Receive tailored offers from multiple restaurants without lifting a finger.",
      color: "purple",
    },
    {
      id: 2,
      icon: <RiMoneyRupeeCircleLine />,
      title: "Transparent Pricing",
      description: "Compare competitive bids and choose the best fit for your budget.",
      color: "yellow",
    },
    {
      id: 3,
      icon: <RiRestaurant2Line />,
      title: "Endless Options",
      description: "Access a variety of restaurants and event services for every occasion.",
      color: "green",
    },
    {
      id: 4,
      icon: <FaRegFaceGrinWink />,
      title: "Win-Win Model",
      description: "Customers get great deals; restaurants fill bookings and boost revenue.",
      color: "red",
    },
  ];

  const headerData = {
    title: "Why Choose Us",
    highlight: "Discover the Benefits",
    description:
      "We offer tailored solutions that save time, reduce costs, and deliver value for both customers and restaurants.",
  };

  return (
    <div className="container-choose mx-auto px-4  mt-4  lg:ml-6 ">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left Section - Features */}
        <div className="flex-1">
          {/* Header */}
          <div className="text-center lg:text-left mb-6">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {headerData.title} <br />
              <span className="text-orange-500  text-xl  lg:text-2xl ">{headerData.highlight}</span>
            </h1>
            <p className="text-gray-600  text-sm">{headerData.description}</p>
          </div>
          {/* Features */}
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center mb-6 p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow">

              {/* <div className={`flex justify-center items-center ml-1 hover:bg-orange-400  w-12 h-12 rounded-full ${feature.color === "purple" ? 'bg-purple-500' : feature.color === "yellow" ? 'bg-yellow-500' : feature.color === "green" ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {feature.icon}
              </div> */}

<div
  className={`flex justify-center items-center ml-1 hover:bg-orange-400 
  w-10 h-8 p-2 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-16 lg:h-16
  rounded-full 
  ${
    feature.color === "purple"
      ? "bg-purple-500"
      : feature.color === "yellow"
      ? "bg-yellow-500"
      : feature.color === "green"
      ? "bg-green-500"
      : "bg-red-500"
  } text-white`}
>
  {feature.icon}
</div>


              <div className="ml-6">
                <h3 className=" font-semibold   text-lg  lg:text-xl">{feature.title}</h3>
                <p className="text-sm text-gray-500  lg:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Image */}

        <div className="flex-1 hidden lg:block  pt-56 ">
          <img className="w-full h-auto rounded-lg object-cover" src={event} alt="Illustration" />
        </div>

      </div>
    </div>
  );
};

export default Whychooseus3;


