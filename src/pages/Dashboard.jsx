import React from "react";
import { MainSection } from "../components/MainSection/MainSection";
import { RightSideBar } from "../components/RightSideBar/RightSideBar";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-layout">
        <div className="main-screen"> 
         <MainSection/>
        </div>
        <div className="right-sidebar">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
