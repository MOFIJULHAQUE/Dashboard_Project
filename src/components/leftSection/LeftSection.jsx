import React from "react";
import { NavLink } from "react-router-dom";

import { RiHandCoinLine } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdOutlineAccountBalanceWallet,
  MdOutlineNotificationsNone,
  MdOutlineQuestionAnswer,
  MdOutlineSupportAgent,
  MdOutlinePolicy,
  MdOutlineInfo,
} from "react-icons/md";

import "../leftSection/LeftSection.css";

function LeftSection() {

  return (
    <>
      <section>
        <div className="brand">
          <RiHandCoinLine />
          <span>
            Crypto
            <span className="logo-text">Trade</span>
          </span>
        </div>
        <div className="toggle"></div>

        <nav>
          <div className="top">
            <div className="links">
              <NavLink to="/dashboard" className="nav-link">
                <MdOutlineDashboard className="white" />
                <span className="white">Dashboard</span>
              </NavLink>
              <NavLink to="/wallet" className="nav-link">
                <MdOutlineAccountBalanceWallet className="white" />
                <span className="white">Wallet</span>
              </NavLink>
              <NavLink to="/notification" className="nav-link">
                <MdOutlineNotificationsNone className="white" />
                <span className="white">Notification</span>
              </NavLink>
              <NavLink to="faq" className="nav-link">
                <MdOutlineQuestionAnswer className="white" />
                <span className="white">FAQ</span>
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                <FaBlog className="white" />
                <span className="white">Blog</span>
              </NavLink>
            </div>
          </div>
          <div className="bottom">
            <div className="links">
              <NavLink to="/team" className="nav-link">
                <RiHandCoinLine className="white" />
                <span className="white">Core Team</span>
              </NavLink>
              <NavLink to="/support" className="nav-link">
                <MdOutlineSupportAgent className="white" />
                <span className="white">Support Channel</span>
              </NavLink>
              <NavLink to="/policy" className="nav-link">
                <MdOutlinePolicy className="white" />
                <span className="white">Privacy Policy</span>
              </NavLink>
              <NavLink to="/about-us" className="nav-link">
                <MdOutlineInfo className="white" />
                <span className="white">About Us</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default LeftSection;
