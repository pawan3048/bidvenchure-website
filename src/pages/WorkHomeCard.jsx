import { useState } from "react";
// import "./HomeCard.css";
import joinasrestaurent from "../images/joinasrestaurent.png";
import postyourevent from "../images/postyourevent.png";
import "./WorkHomeCard.css";

const WorkHomeCard = () => {
  const [isRestaurantPopupVisible, setIsRestaurantPopupVisible] =
    useState(false);

  const toggleRestaurantPopup = () => {
    setIsRestaurantPopupVisible(!isRestaurantPopupVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-3 ">
      {/* Main Container with responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 md:px-8">
        {/* Customers Card */}
        <div className=" shadow-lg rounded-lg flex flex-col items-center justify-center overflow-hidden">
          <img
            src={postyourevent}
            alt="Post Event"
            className="w-full h-48 md:h-72 object-cover"
          />

          {/* <div className="text-center px-4 py-4 w-full">
           
          </div> */}
        </div>

        {/* Restaurants Card */}
        <div className=" shadow-lg rounded-lg flex flex-col items-center justify-center overflow-hidden">
          <img
            src={joinasrestaurent}
            alt="Join as Restaurant"
            className="w-full h-48 md:h-72 object-cover"
          />
          {/* <div className="text-center px-4 py-4 w-full">
            

          



          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WorkHomeCard;
