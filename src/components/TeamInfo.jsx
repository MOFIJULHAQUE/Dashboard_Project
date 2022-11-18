import React from "react";

import { Members } from "../data/Data";

import "../styles/Team.css";

const TeamInfo = () => {
  return (
    <>
      <div className="team_member">
        <h1 className="heading">Our Management Team</h1>
        <div className="members_list">
          {Members.map(
            ({
              img,
              name,
              title,
              linkedin,
              github,
              twitter,
              icon1,
              icon2,
              icon3,
            }) => {
              return (
                <>
                  <div className="member_details">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <div className="social-icons">
                      <a href={linkedin}>{icon1}</a>
                      <a href={github}>{icon2}</a>
                      <a href={twitter}>{icon3}</a>
                    </div>
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default TeamInfo;
