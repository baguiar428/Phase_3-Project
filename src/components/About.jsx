import React from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import SideBarIcon from "./SideBarIconHome";

function About() {
  const navigate = useNavigate();

  function home() {
    navigate("/");
  }

  return (
    <div>
      <h1
        className="display: block text-center text-green-500 
                  font-retro text-9xl"
      >
        How To Play:
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="display: block text-center text-green-500 
                  font-retro text-3xl pl-10 pr-10 ml-10 mr-10">
        <p><b className="text-red-500">STEP 1:</b> Create your Hero's name</p>
        <br></br>
        <br></br>
        <p><b className="text-red-500">STEP 2:</b> Click on and explore classes. Once decided click</p>

        <p>"Begin Your Adventure!" </p>
        <br></br>
        <br></br>
        <p><b className="text-red-500">STEP 3:</b> Choose your Adventure Map!</p>

        <p>(The closer to Mount Doom or Diamond Depths the harder the fights!)</p>
        <br></br>
        <br></br>
        <p><b className="text-red-500">STEP 4:</b> Select which monster to battle</p>
        <br></br>
        <br></br>
        <p><b className="text-red-500">STEP 5:</b> Roll the dice to attack the monster,</p>

        <p>if you win collect your loot and increase your stats</p>
      </div>
      <div className="fixed top-0 left-0 h-screen w-16 m-0
          flex flex-col
          bg-gray-900 shadow-lg">
        <div onClick={home}>
          <SideBarIcon icon={<GrHomeRounded size="32" />} />
        </div>
      </div>
    </div >
  );
}

export default About;

