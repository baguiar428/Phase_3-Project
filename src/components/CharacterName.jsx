import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded, GrInfo } from "react-icons/gr";
import SideBarIconHome from "./SideBarIconHome";
import SideBarIconAbout from "./SideBarIconAbout";

//need to setup css for this
function CharacterName() {
  const [charName, setCharName] = useState();
  const navigate = useNavigate();

  function home() {
    navigate("/");
  }

  function about() {
    navigate("/about");
  }

  function handleSubmit() {
    navigate(`/characters`, { state: { name: charName } });
  }

  function handleChange(e) {
    setCharName(e.target.value);
  }

  function continueAdventure(){
    navigate('/saved_games')
  }
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-16 m-0
          flex flex-col
          bg-gray-900 text-white shadow-lg"
      >
        <div onClick={home}>
          <SideBarIconHome onClick={home} icon={<GrHomeRounded size="32" />} />
        </div>
        <div onClick={about}>
          <SideBarIconAbout onClick={about} icon={<GrInfo size="32" />} />
        </div>
      </div>

    
      <div
        className="display: block text-center text-red-500
                  font-retro text-5xl pl-10 pr-10 ml-10 mr-10 hover:bg-blue-800"
      >
        <button onClick={continueAdventure}>Continue Adventure</button>
      </div>

      <div
        className="display: block text-center text-green-500
                font-retro text-5xl pl-10 pr-10 ml-10 mr-10"
      >
        <p></p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center space-y-5 h-screen">
            <label>What is your name, Hero?</label>
            <input
              className="text-black"
              type="text"
              placeholder="Enter Name..."
              value={charName}
              onChange={handleChange}
            />
            <button type="submit">Submit </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CharacterName;
