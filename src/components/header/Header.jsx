import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHandCoinLine, RiMenuUnfoldLine } from "react-icons/ri";

import { SidebarData } from "../../data/Data";

import { NotificationTheme } from "../RightSideBar/NotificationTheme";
import { ProfileSection } from "../RightSideBar/ProfileSection";

import "./Header.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="header-screen">
        <div className="left-side">
          <div className="menu-icon">
            <RiMenuUnfoldLine />
          </div>

          <div className="nav-menu">
            <div className="links">
              {SidebarData.map(({ path, icon, title }, index) => {
                return (
                  <NavLink
                    to={path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "menuItem active" : "menuItem"
                    }
                  >
                    {icon}
                    <span>{title}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="header_part">
            <NotificationTheme />
            <ProfileSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
