import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GrAchievement, GrTime, GrUserNew } from "react-icons/gr";


function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-gray-900 text-white shadow-lg">

    <SideBarIcon icon={<GrUserNew size='32'/>} />
    <SideBarIcon icon={<GrTime size='32' />} />
    <SideBarIcon icon={<GrAchievement size='32' />} />

    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tool-tip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;
