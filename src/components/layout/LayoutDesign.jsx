import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../sidebar/Sidebar";

import "./LayoutDesign.css";


const LayoutDesign = () => {
  return (
    <>
      <div className="layout">
        <div className="sidebar-screen">
          <Sidebar />
        </div>
        <div className="main-screen">
          <Router />
        </div>
      </div>
    </>
  );
};

export default LayoutDesign;
