import React from "react";
import image1 from "../Images/privacy (1).png";
import image2 from "../Images/privacy (4).png";
import image3 from "../Images/privacy (3).png";
import image4 from "../Images/privacy (2).png";

import Signup from "../components/Login_signUp/Signup";

import { DumyText } from "../components/constant/DumyText";

import "./CSS_of_Pages/policy.css";

const Policy = () => {
  return (
    <>
      <div className="policy_section">
        <h1>PRIVACY POLICY</h1>
        <h3>Crypto Trade</h3>

        <div className="privacy_policy">
          <div>
            <p>
              <DumyText />
            </p>
          </div>
          <div>
            <img src={image1} alt="image1" />
          </div>
        </div>

        <div className="privacy_policy">
          <div>
            <img src={image2} alt="image1" />
          </div>
          <div>
            <p>
              <DumyText />
            </p>
          </div>
        </div>

        <div className="privacy_policy">
          <div>
            <p>
              <DumyText />
            </p>
          </div>
          <div>
            <img src={image4} alt="image1" />
          </div>
        </div>

        <div className="privacy_policy">
          <div>
            <img src={image3} alt="image3" />
          </div>
          <div>
            <p>
              <DumyText />
            </p>
          </div>
        </div>
      </div>

        <Signup />
      
    </>
  );
};

export default Policy;
