import React from "react";
import { Button } from "antd";

import teamImage from "../Images/team.png";
import team_memberImage from "../Images/Happy Bunch - Desk.png";
import member1 from "../Images/abhi.jpg";
import member2 from "../Images/mofi.jpg";
import member3 from "../Images/rajesh.jpg";

import { Footer } from ".././components/footer/Footer";

import "../styles/Team.css";

const Team = () => {
  return (
    <>
      <div>
        <div className="team_member">
          <h3>The People Behind This Project</h3>
          <div className="member_image">
            <div>
              <img src={member1} alt="member" />
              <div className="member_details">
                <h1>Abhishek Kolapkar</h1>
                <div>
                  <a href="https://www.linkedin.com/in/mofijul-haque-359941230/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/Mofijul71136321">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://github.com/MOFIJULHAQUE">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img src={member2} alt="member" />
              <div className="member_details">
                <h1>Mofijul Haque</h1>
                <a href="https://www.linkedin.com/in/mofijul-haque-359941230/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/Mofijul71136321">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/MOFIJULHAQUE">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div>
              <img src={member3} alt="member" />
              <div className="member_details">
                <h1>Rajesh Saini</h1>
                <a href="https://www.linkedin.com/in/mofijul-haque-359941230/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/Mofijul71136321">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/MOFIJULHAQUE">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="team_section">
          <h1>About us</h1>
          <div className="contentt">
            <p>
              We didn't become India's biggest crypto company overnight. The
              journey to make money equal for all began in 2017 with just a
              handful of us.
              <br />
              <br />
              Crypto Trade is now India's largest crypto app with over 18
              million users and more than 500 employees. We're backed by some of
              the world's leading investors including a16z, Tiger Global and
              Sequoia Capital.
              <br />
              <br />
              The cornerstones of our culture are customer obsession and an
              employee-first approach. We're building a platform that
              democratises investments for everyone — making them simple, safe
              and accessible to every Indian.
            </p>
            <div>
              <img src={teamImage} alt="team" />
            </div>
          </div>
          <div className="follow_us">
            <span>Follow us on </span>
            <div className="icons">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        {/* <div className="crypto_trade_community">
          <div className="inner_section">
            <div>
              <h1>
                Crypto Trade <br />
                Community
              </h1>
            </div>
            <div className="member_icons">
              <div>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
              <div>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-quora"></i>
                <i class="fa-solid fa-blog"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
          </div>
        </div> */}
        <div className="bootom_text">
          <h4>Your crypto journey starts here!</h4>
          <p>Download Crypto Trade now</p>
        </div>

        {/* <div className="contact_section">
          <div className="inside_contact_section">
            <div className="headphone_icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <div>
              <h3>
                We're here to help! Speak to our 24/7 customer support team
                anytime!
              </h3>
            </div>
          </div>
          <div>
            <Button type="primary" shape="round">
              Contact now
            </Button>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Team;
