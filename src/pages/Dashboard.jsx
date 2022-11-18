import React from "react";
import { RightSideBar } from "../components/RightSideBar/RightSideBar";

import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-layout">
        <div className="main-screen">
          <h1>Dashboard</h1>
        </div>
        <div className="right-sidebar">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
