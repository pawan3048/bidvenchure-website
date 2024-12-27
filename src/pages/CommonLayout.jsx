import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const CommonLayout = () => {
  return (
    <>
      <div className="border border-4">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
