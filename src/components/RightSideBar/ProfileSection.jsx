import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./RightSideBarCSS_Files/profileSection.css"
export const ProfileSection = () => {
  return (
    <>
      <span>Profile</span>
      <div className="profile_section">
        <span>Good Morning</span>
        <h2>User</h2>
      </div>
      <Avatar size="large" icon={<UserOutlined />} />
    </>
  );
};
