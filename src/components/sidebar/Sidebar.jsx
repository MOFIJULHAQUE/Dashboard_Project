import React, { useState } from "react";
import { SidebarData } from "../../data/Data";
import { NavLink } from "react-router-dom";
import {
  RiHandCoinLine,
  RiInformationLine,
  RiMenuFoldFill,
} from "react-icons/ri";

import { motion } from "framer-motion";

import "../../components/sidebar/Sidebar.css";

const Sidebar = () => {
  const [expanded, setExpaned] = useState(false);

  const sidebarVariants = {
    open : {
      left : 0
    },
    closed : {
      left : '-100%'
    }
  };

  return (
    <>
      <div
        className="menu-bars"
        style={expanded ? {left: '30%'} : {left: '2%'}}
        onClick={() => setExpaned(!expanded)}
      >
        <RiMenuFoldFill />
      </div>

      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={expanded ? 'open' : 'closed'}
      >
        <div>
        <div className="logo">
          <RiHandCoinLine />
          <span className="logo-text">
            Crypto<span>Trade</span>
          </span>
        </div>

        <div className="nav-menu">
          <div className="links">
            {SidebarData.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={(navClass) =>
                  navClass.isActive ? "menuItem active" : "menuItem"}
              >
                <item.icon />
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>

          <div className="help-box">
            <div className="info-card">
              <RiInformationLine className="icon" />
              <div className="card-content">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble in CryptoTrade, Connect us for more info.</p>
                <NavLink to="/support" className="btn">
                  Know More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
