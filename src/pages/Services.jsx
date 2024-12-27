import React from "react";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import backgroundImage from "../images/banner1.png"; // Adjust path as needed
import "./Service.css";

const Services = () => {
  const testimonials = [
    {
      text: "This platform has transformed our business! We've doubled our event bookings in just three months.",
      author: "Chef Anthony, Italian Bistro",
    },
    {
      text: "We've seen remarkable growth in revenue since joining. Highly recommended!",
      author: "Sarah Thompson, Event Planner",
    },
    {
      text: "An amazing tool to connect with clients. It’s simple and effective!",
      author: "Michael Davis, Catering Manager",
    },
  ];

  const images = [
    "/path/to/image1.jpg", // Replace with actual image paths
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
  ];

  return (
    <>
      <div className=" service-top bg-gray-50 py-16 mt-16">
        <div className="container-services mx-auto px-6 lg:px-16 text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Turn Opportunities into Bookings
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-600 mb-12">
            Fill empty tables, boost your visibility, and grow your revenue. Our
            platform helps you connect with event organizers looking for your
            services.
          </p>

          <ServiceCard />

          {/* Slider Section */}
          <div className="overflow-hidden ">
            <h2 className="text-3xl font-bold text-gray-800 m-8">
              Success Stories
            </h2>
            <div className="flex gap-4 animate-scroll whitespace-nowrap  ">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className=" text-gray-800 p-4  h-[100px] py-8 rounded-lg shadow-lg min-w-[300px]  bg-[#d3d7e9]"
                >
                  <p className="italic">{item.text}</p>
                  <p className="text-sm font-semibold mt-2">{item.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="bg-[#7489e3] h-[250px] pt-20 p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-10">
            <h2 className="text-2xl font-semibold mb-4">Sign up today and start winning more business!</h2>
            <button className="bg-white text-[#2b3560] font-semibold py-1 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
          </div> */}

          <div
            className="work-button relative h-[250px] pt-20 mt-10 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`, // Use imported image
            }}
          >
            {/* Blurred Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md rounded-lg"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4">
                Sign up today and start winning more business!
              </h2>
              <button className="bg-white text-[#0a0a0a] font-semibold py-2 px-6 rounded-lg hover:bg-orange-500 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
