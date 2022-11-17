import React from "react";
import SideBarIcon from "./SideBarIconHome";
import { GrAchievement, GrTime, GrUserNew, GrHomeRounded } from "react-icons/gr";


function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<GrHomeRounded size='32' />} />
      <SideBarIcon icon={<GrUserNew size='32' />} />
      <SideBarIcon icon={<GrTime size='32' />} />
      <SideBarIcon icon={<GrAchievement size='32' />} />

    </div>
  );
};

export default SideBar;
