import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./RightSideBarCSS_Files/profileSection.css";
export const ProfileSection = () => {
  return (
    <>
      <h2>Profile</h2>
      <div className="profile_section">
      <div>
        <h5>Good Morning</h5>
        <h2>User</h2>
      </div>
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
      </div>
    </>
  );
};
