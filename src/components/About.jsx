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
        <p>STEP 1: Create your Hero's name</p>
        <br></br>
        <br></br>
        <p>STEP 2: Click on and explore classes. Once decided click</p>

        <p>"Begin Your Adventure!" </p>
        <br></br>
        <br></br>
        <p>STEP 3: Choose your Adventure Map!</p>

        <p>(The closer to Mount Doom the harder the fights!)</p>
        <br></br>
        <br></br>
        <p>STEP 4: Select which monster to battle</p>
        <br></br>
        <br></br>
        <p>STEP 5: Roll the dice to attack the monster,</p>

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

