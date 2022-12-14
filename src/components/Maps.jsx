import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GrHomeRounded, GrInfo, GrTime } from "react-icons/gr";
import SideBarIconHome from "./SideBarIconHome";
import SideBarIconAbout from "./SideBarIconAbout";
import SideBarIconStats from "./SideBarIconStats";

//use location.state.hero to grab hero info
function Maps() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mapData, setMapData] = useState();

  function home() {
    navigate("/");
  }

  function about() {
    navigate("/about");
  }

  function stats() {
    navigate("/stats", {state: {hero: location.state.hero}});
  }

  //fetch map data
  useEffect(() => {
    fetch("http://localhost:9292/maps")
      .then((resp) => resp.json())
      .then((data) => setMapData(data));
  }, []);

  //mapData isnt populated at first, so need to setup a ternary to check and map only after fetch has happened
  //interpolate img route
  const allMaps = mapData
    ? mapData.map((environment) => (
        <div
          className="w-full bg-black opacity-75 rounded-xl text-white text-center my-4 transform transition duration-500 hover:scale-110 m-5 "
          onClick={() =>
            navigate(`/maps/${environment.id}`, {
              state: { hero: location.state.hero },
            })
          }
        >
          <span>{environment.name}</span>

          <img
            className="h-full w-full object-cover object-center rounded-xl inset-0 hover:-bottom-4"
            src={require(`../assets/images/${environment.image_URL}.png`)}
            alt={environment.name}
          />
        </div>
      ))
    : null;

  return (
    <>
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
        <div onClick={stats}>
          <SideBarIconStats onClick={stats} icon={<GrTime size="32" />} />
        </div>
      </div>
      <div className="font-retro">
        <h1 className="text-3xl text-white text-center">
          CHOOSE YOUR ADVENTURE!
        </h1>
        <br></br>
        <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-5 w-1/2 h-1/3">
          {allMaps}
        </div>
      </div>
    </>
  );
}

export default Maps;
