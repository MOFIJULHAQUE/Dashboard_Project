import React from "react";
import LeftSection from "../leftSection/LeftSection";
import Router from "../../routes/Router";


import './layout.css'

const Layout = () => {
  return (
    <>
      <div className="layout">
        <LeftSection />
        <div className="main-layout">
        <Router/>
        </div>
      </div>
    </>
  );
};

export default Layout;
