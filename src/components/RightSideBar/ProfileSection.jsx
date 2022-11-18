import React from "react";
import { Avatar } from "antd";

import "./RightSideBarCSS_Files/profileSection.css";

export const ProfileSection = () => {
  return (
    <>
      <div className="profile_section">
        <div className="profile_avatar">
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZshQ6qF-w8Ow6LTRAysWJYUWa-I7OmAlKdg&usqp=CAU"
          />
        </div>
      </div>
    </>
  );
};
