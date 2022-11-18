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
      <td className="text-center">{leader.name}</td>
      <td className="text-yellow-500">----</td>
      <td className="text-center">{leader.wins}</td>
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
      <div className = "font-retro text-3xl flex justify-center pt-20">
      <table>
          <thead>
            <tr>
              <td className="px-10 pb-5 text-red-500">Name</td>
              <td></td>
              <td className="px-10 pb-5 text-green-500">Wins</td>
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
