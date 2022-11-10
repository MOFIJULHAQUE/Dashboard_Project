import React, { useState } from "react";

import { RiHandCoinLine } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import {
  MdOutlineHome,
  MdOutlineDashboard,
  MdOutlineAccountBalanceWallet,
  MdOutlineNotificationsNone,
  MdOutlineQuestionAnswer,
  MdOutlineSupportAgent,
  MdOutlinePolicy,
  MdOutlineInfo
} from "react-icons/md";

import "../leftSection/LeftSection.css";

function LeftSection() {
  const [currentLink, setCurrentLink] = useState(1);

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
              <ul>
                <li
                  onClick={() => setCurrentLink(1)}
                  className={currentLink === 1 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlineHome />
                    <span>Home</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(2)}
                  className={currentLink === 2 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlineDashboard />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(3)}
                  className={currentLink === 3 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlineAccountBalanceWallet />
                    <span>Wallet</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(4)}
                  className={currentLink === 4 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlineNotificationsNone />
                    <span>Notification</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(5)}
                  className={currentLink === 5 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlineQuestionAnswer />
                    <span>FAQ</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(6)}
                  className={currentLink === 6 ? "active" : ""}
                >
                  <a href="#">
                    <FaBlog />
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="links">
              <ul>
                <li
                  onClick={() => setCurrentLink(7)}
                  className={currentLink === 7 ? "active" : ""}
                >
                  <a href="#">
                    <RiHandCoinLine />
                    <span>Core Team</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(8)}
                  className={currentLink === 8 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlineSupportAgent />
                    <span>Support Channel</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(9)}
                  className={currentLink === 9 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlinePolicy />
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(10)}
                  className={currentLink === 10 ? "active" : ""}
                >
                  <a href="#">
                    <MdOutlineInfo />
                    <span>About Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default LeftSection;
