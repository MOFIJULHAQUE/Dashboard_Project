import { ProfileSection } from "./ProfileSection";
import { NotificationTheme } from "./NotificationTheme";
import { TotalBalance } from "./TotalBalance";
import { Coverter } from "./Coverter";
import { Reaction } from "./Reaction";

import "./RightSideBarCSS_Files/RightSideBar.css";

export const RightSideBar = () => {
  return (
    <>
      <div className="Right_sidebar">
        <div>
          <div className="theme_bell">
            <NotificationTheme />
            <ProfileSection />
          </div>
          <div className="Total_balance">
            <TotalBalance />
          </div>
          <div className="Converter_section">
            <h1>Convert</h1>
            <Coverter />
          </div>
        </div>
        <div className="Chatbot_section">
          <Reaction />
        </div>
      </div>
    </>
  );
};
