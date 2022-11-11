import { ProfileSection } from "./ProfileSection";
import { NotificationTheme } from "./NotificationTheme";
import { TotalBalance } from "./TotalBalance";
import { Coverter } from "./Coverter";
import { Reaction } from "./Reaction";
export const RightSideBar = () => {
  return (
    <>
      <NotificationTheme />
      <ProfileSection />
      <TotalBalance />
      <Coverter />
      <Reaction />
    </>
  );
};
