

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// // import Footer from "../components/Footer";

// const Steps = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

//   // Resize logic
//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 780);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const cardVariants = {
//     initial: { opacity: 0, x: 50 },
//     whileInView: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//   };

//   const customersSteps = [
//     {
//       title: "Sign up and fill out a simple event form",
//       description: "Create an account and share the details of your upcoming event.",
//       icon: "fas fa-user-plus",
//     },
//     {
//       title: "Get personalized bids from nearby restaurants",
//       description: "Restaurants in your area will send you custom offers based on your needs.",
//       icon: "fas fa-envelope-open-text",
//     },
//     {
//       title: "Chat, compare, and confirm your booking",
//       description: "Communicate with restaurants, compare offers, and finalize your booking.",
//       icon: "fas fa-comments",
//     },
//   ];

//   const restaurantsSteps = [
//     {
//       title: "Create a profile to highlight your services",
//       description: "Sign up and build your restaurant profile to showcase your offerings.",
//       icon: "fas fa-utensils",
//     },
//     {
//       title: "Browse active event opportunities in your area",
//       description: "Look for events in your area and start bidding on those that match your expertise.",
//       icon: "fas fa-search",
//     },
//     {
//       title: "Submit bids and secure bookings effortlessly",
//       description: "Submit your offers and secure bookings with just a few clicks.",
//       icon: "fas fa-handshake",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-gray-50 py-16">
//         {/* Heading */}
//         <motion.div
//           className="container-step12 mx-auto  lg:px-16 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">
//             How It Works
//           </h1>
//           <p className="text-lg text-gray-600 mb-12">
//             See how our platform connects customers and restaurants seamlessly.
//           </p>
//         </motion.div>

//         {/* Timeline Container */}
//         <div className="container-steps mx-auto ml-[22px]  mr-[22px] lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* For Customers */}
//           <div>
//             <h2 className="text-3xl font-bold text-[#d2273f] mb-6  text-left">
//               For Customers
//             </h2>
//             <div className="relative">
//               {customersSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className="mb-12 flex items-center lg:items-start lg:flex-row"
//                   variants={cardVariants}
//                   initial="initial"
//                   whileInView="whileInView"
//                   viewport={{ once: true }}
//                 >
//                   {/* Icon */}

//                   <div className="icon-custom bg-[#d2273f] mr-2 text-white p-3 rounded-full flex justify-center items-center text-base shadow-lg lg:mr-4 w-3 h-3 sm:w-12 sm:h-12">
//                     <i className={`${step.icon}`}></i>
//                   </div>

//                   {/* Step Text */}
//                   <div className="lg:w-3/4 text-left">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* For Restaurants */}
//           <div>
//             <h2 className="text-3xl font-bold text-blue-600 mb-6 ml-[22px]  mr-[22px] text-left">
//               For Restaurants
//             </h2>
//             <div className="relative">
//               {restaurantsSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className="mb-12 flex items-center lg:items-start lg:flex-row"
//                   variants={cardVariants}
//                   initial="initial"
//                   whileInView="whileInView"
//                   viewport={{ once: true }}
//                 >
//                   {/* Icon */}

//                   <div className="icon-custom mr-2 bg-blue-600 text-white p-3 rounded-full flex justify-center items-center text-base shadow-lg lg:mr-4 w-3 h-3 sm:w-12 sm:h-12">
//                     <i className={`${step.icon}`}></i>
//                   </div>


//                   {/* Step Text */}
//                   <div className="lg:w-full text-left">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Steps;



import React, { useState, useEffect } from "react";
import "./Steps.css";

// Removed import for Framer Motion
// import Footer from "../components/Footer";

const Steps = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  // Resize logic
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 780);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customersSteps = [
    {
      title: "Sign up and fill out a simple event form",
      description: "Create an account and share the details of your upcoming event.",
      icon: "fas fa-user-plus",
    },
    {
      title: "Get personalized bids from nearby restaurants",
      description: "Restaurants in your area will send you custom offers based on your needs.",
      icon: "fas fa-envelope-open-text",
    },
    {
      title: "Chat, compare, and confirm your booking",
      description: "Communicate with restaurants, compare offers, and finalize your booking.",
      icon: "fas fa-comments",
    },
  ];

  const restaurantsSteps = [
    {
      title: "Create a profile to highlight your services",
      description: "Sign up and build your restaurant profile to showcase your offerings.",
      icon: "fas fa-utensils",
    },
    {
      title: "Browse active event opportunities in your area",
      description: "Look for events in your area and start bidding on those that match your expertise.",
      icon: "fas fa-search",
    },
    {
      title: "Submit bids and secure bookings effortlessly",
      description: "Submit your offers and secure bookings with just a few clicks.",
      icon: "fas fa-handshake",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 py-16">
        {/* Heading */}
        <div className="container-step12 mx-auto lg:px-16 text-center fade-in">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">
            How It Works
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            See how our platform connects customers and restaurants seamlessly.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="container-steps mx-auto ml-[22px] mr-[22px] lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Customers */}
          <div>
            <h2 className="text-3xl font-bold text-[#d2273f] mb-6 text-left">
              For Customers
            </h2>
            <div className="relative">
              {customersSteps.map((step, index) => (
                <div
                  key={index}
                  className="mb-12 flex items-center lg:items-start lg:flex-row slide-in"
                >
                  {/* Icon */}
                  <div className="icon-custom bg-[#d2273f] mr-2 text-white p-3 rounded-full flex justify-center items-center text-base shadow-lg lg:mr-4 w-3 h-3 sm:w-12 sm:h-12">
                    <i className={`${step.icon}`}></i>
                  </div>

                  {/* Step Text */}
                  <div className="lg:w-3/4 text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Restaurants */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-left">
              For Restaurants
            </h2>
            <div className="relative">
              {restaurantsSteps.map((step, index) => (
                <div
                  key={index}
                  className="mb-12 flex items-center lg:items-start lg:flex-row slide-in"
                >
                  {/* Icon */}
                  <div className="icon-custom mr-2 bg-blue-600 text-white p-3 rounded-full flex justify-center items-center text-base shadow-lg lg:mr-4 w-3 h-3 sm:w-12 sm:h-12">
                    <i className={`${step.icon}`}></i>
                  </div>

                  {/* Step Text */}
                  <div className="lg:w-full text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;



