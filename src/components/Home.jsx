import React from "react";
import { useNavigate } from "react-router-dom";
import { GrGamepad, GrInfo, GrAchievement } from "react-icons/gr";
import adventureMap from "../assets/images/adventure_map.jpg";

function Home() {
  const navigate = useNavigate();

  function chooseName() {
    navigate("/choose_name");
  }

  function about() {
    navigate("/about");
  }

  function leaderboard() {
    navigate("/leaderboard");
  }

  return (
    <>
      <h1
        className="display: block text-center text-green-500 
                  font-retro text-9xl"
      >
        Bandersnatch
      </h1>
      <img
        className="display: block ml-auto mr-auto h-3/5 rounded-2xl my-5"
        src={adventureMap}
        alt="Adventure Map"
      />
      <div className="flex">
        <div onClick={about} className="flex-1">
          <HomeIcon icon={<GrInfo size="140" />}/>
        </div>
        <div onClick={chooseName} className="flex-1">
          <HomeIcon icon={<GrGamepad size="140" />} />
        </div>
        <div onClick={leaderboard} className="flex-1">
          <HomeIcon icon={<GrAchievement size="140" />} />
        </div>
      </div>
    </>
  );
}

const HomeIcon = ({ icon }) => <div className="home-icon">{icon}</div>;

export default Home;
