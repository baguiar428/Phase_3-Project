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
      {/* <img
        className="display: block ml-20 mr-auto h-3/5 rounded-2xl my-5"
        src={adventureMap}
        alt="Adventure Map"
      /> */}
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10" >STEP 1: Create your Hero's name</p>
      <br></br>
      <br></br>
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10" >STEP 2: Click on and explore classes. Once decided click</p>
      <br></br>
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10" >"Begin Your Adventure!" </p>
      <br></br>
      <br></br>
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10">STEP 3: Choose your Adventure Map!</p>
      <br></br>
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10">(The closer to Mount Doom the harder the fights!)</p>
      <br></br>
      <br></br>
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10">STEP 4: Select which monster to battle</p>
      <br></br>
      <br></br>
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10">STEP 5: Roll the dice to attack the monster,</p>
      <br></br>
      <p className="display: block text-center text-green-500 
                  font-retro text-4xl pl-10 pr-10 ml-10 mr-10">if you win collect your loot and increase your stats</p>
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

