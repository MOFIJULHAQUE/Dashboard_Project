import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";

import { RiHandCoinLine, RiInformationLine } from "react-icons/ri";

import "../leftSection/LeftSection.css";

const LeftSection = () => {
  return (
    <>
      <section>
        <div className="brand">
          <RiHandCoinLine />
          <span>
            Crypto<span className="logo-text">Trade</span> 
          </span>
        </div>
        <div className="toggle"></div>

        <nav>
          <div className="top">
            <div className="links">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__link"
                          : "nav__link"
                      }
                    >
                      <i className={item.icon}></i>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bottom">
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
        </nav>
      </section>
    </>
  );
};

export default LeftSection;
