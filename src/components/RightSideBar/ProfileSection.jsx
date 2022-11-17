import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import "./RightSideBarCSS_Files/profileSection.css";

export const ProfileSection = () => {
  return (
    <>
      <div className="profile_section">
        <div>
          <span>Good Morning.</span>
          <h2>Trader</h2>
        </div>
        <div className="profile_avatar">
          <Avatar size={37} icon={<UserOutlined />} />
        </div>
      </div>
    </>
  );
};