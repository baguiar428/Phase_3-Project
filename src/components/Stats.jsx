import React from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded, GrInfo, GrTime } from "react-icons/gr";
import SideBarIconHome from "./SideBarIconHome";
import SideBarIconAbout from "./SideBarIconAbout";

function Stats() {
  const navigate = useNavigate();

  function home() {
    navigate("/");
  }

  function about() {
    navigate("/about");
  }

  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-gray-900 shadow-lg"
    >
      <div onClick={home}>
        <SideBarIconHome icon={<GrHomeRounded size="32" />} />
      </div>
      <div onClick={about}>
        <SideBarIconAbout onClick={about} icon={<GrInfo size="32" />} />
      </div>
    </div>
  );
}

export default Stats;