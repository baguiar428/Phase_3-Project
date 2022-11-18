import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GrHomeRounded, GrInfo, GrTime } from "react-icons/gr";
import SideBarIconHome from "./SideBarIconHome";
import SideBarIconAbout from "./SideBarIconAbout";

function Stats() {
  const navigate = useNavigate();
  const location = useLocation();
  const [heroData, setHeroData] = useState(location.state.hero)
  
  function home() {
    navigate("/");
  }

  function about() {
    navigate("/about");
  }

  useEffect(()=>{
    fetch(`http://localhost:9292/heros/${heroData.id}`)
    .then(resp => resp.json())
    .then(data => setHeroData(data))
  },[heroData.id])

  function backToMap(){
    navigate('/maps', {state: {hero: heroData}})
  }
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
    </div>
    <div className="display: block text-center text-green-500 
                  font-retro text-5xl pl-10 pr-10 ml-10 mr-10">
        <br></br>
        <br></br>
        <h1>Stats:</h1>
        <br></br>
      </div>
    <div className="font-retro">
      <img className="object-scale-down h-28 w-full" src= {require(`../assets/images/${heroData.spec}.gif`)} alt={heroData.name}/>
      <div className="text-white flex justify-center">
        <table>
          <thead>
            <tr>
              <td>Name: </td>
              <td>{heroData.name}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class: </td>
              <td> {heroData.spec}</td>
            </tr>
            <tr>
              <td>Health: </td>
              <td> {heroData.health}</td>
            </tr>
            <tr>
              <td>Strength: </td>
              <td> {heroData.strength}</td>
            </tr>
              <tr>
                <td>Agility: </td>
                <td> {heroData.agility}</td>
              </tr>
              <tr>
                <td>Intellect: </td>
                <td> {heroData.intellect}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="text-center">
          <button 
            className="bg-black opacity-75 border-2 rounded text-red-500" 
            onClick={backToMap}
          > BACK TO MAP </button>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="display: block text-center text-green-500 
                  font-retro text-3xl pl-10 pr-10 ml-10 mr-10">Greater foes await you...</h1>
        </div>
        </div>
      
    </>
  );
}

export default Stats;
