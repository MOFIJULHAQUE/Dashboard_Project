import React, { useState } from "react";
import { RiHandCoinLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import Sidebar from "../sidebar/Sidebar";
import { RightSideBar } from "../RightSideBar/RightSideBar";
import { NotificationTheme } from "../RightSideBar/NotificationTheme";
import { ProfileSection } from "../RightSideBar/ProfileSection";

import "./Header.css";

const Header = () => {
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);

  const showSidebar = () => setLeftSidebar(!leftSidebar);

  const showRightSidebar = () => setRightSidebar(!rightSidebar)

  return (
    <>
      <div className="header-screen">
        <div className="left-side">
          <div className="menu-bars">
            <div>
              <AiOutlineMenuUnfold onClick={showSidebar} />
            </div>
          </div>
          <div className="logo">
            <RiHandCoinLine />
            <span className="logo-text">
              Crypto<span>Trade</span>
            </span>
          </div>
        </div>

        <div className="right-side">
          <div className="header_part">
            <NotificationTheme />
            <ProfileSection />
            <BiDotsVerticalRounded onClick={showRightSidebar}/>
          </div>
        </div>
      </div>

      <div className={leftSidebar ? "nav-menu-bar show" : "nav-menu-bar"}>
        <Sidebar />
      </div>

      <div className={rightSidebar ? "right-side-bar show" : "right-side-bar"}>
        <RightSideBar />
      </div>
    </>
  );
};

export default Header;
