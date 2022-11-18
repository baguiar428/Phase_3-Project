import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded, GrInfo } from "react-icons/gr";
import SideBarIconHome from "./SideBarIconHome";
import SideBarIconAbout from "./SideBarIconAbout";

function Leaderboard() {
  const navigate = useNavigate();
  const [leaderBoard, setLeaderBoard] = useState([])

  function home() {
    navigate("/");
  }

  function about() {
    navigate("/about");
  }

  useEffect(()=>{
    fetch('http://localhost:9292/heros')
    .then(resp => resp.json())
    .then(data => setLeaderBoard(data))
  },[])

  console.log(leaderBoard)
  const highScores = leaderBoard ? leaderBoard.map((leader) => {
    return (
    <tr>
      <td>{leader.name}</td>
      <td></td>
      <td>{leader.wins}</td>
    </tr>
  
  )}) : null

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
      <div className = "font-retro text-3xl flex justify-center text-white">
      <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Wins</td>
            </tr>
          </thead>
          <tbody>
            {highScores}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaderboard;
