import React from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import SideBarIcon from "./SideBarIcon";

function About() {
  const navigate = useNavigate();

  function home() {
    navigate("/");
  }

  return (
      <div className="fixed top-0 left-0 h-screen w-16 m-0
          flex flex-col
          bg-gray-900 shadow-lg">
        <div onClick={home}>
          <SideBarIcon icon={<GrHomeRounded size="32" />} />
        </div>
      </div>
  );
}

export default About;

