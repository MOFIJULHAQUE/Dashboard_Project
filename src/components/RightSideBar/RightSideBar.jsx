import { ProfileSection } from "./ProfileSection";
import { NotificationTheme } from "./NotificationTheme";
import { Coverter } from "./Coverter";

import "./RightSideBarCSS_Files/RightSideBar.css";
import Comment from "../comments/Comment";

export const RightSideBar = () => {
  return (
    <>
      <div className="Right_sidebar_section">
        <div>
          <div className="Converter_section">
            <h3>Convert</h3>
            <Coverter />
          </div>
          <div className="comment_section_screen">
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};
