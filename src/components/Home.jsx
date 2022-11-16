import React from "react";
import { useNavigate } from "react-router-dom";
import { GrGamepad, GrInfo, GrAchievement } from "react-icons/gr";

function Home() {
  const navigate = useNavigate();

  function chooseName() {
    navigate("/choose_name");
  }

  function about() {
    navigate("/about")
  }

  function leaderboard() {
    navigate("/leaderboard")
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      <div onClick={about} className="grid h-screen place-items-end">
        <HomeIcon icon={<GrInfo size="140" />} />
      </div>
      <div onClick={chooseName} className="grid h-screen place-items-center">
        <HomeIcon icon={<GrGamepad size="140" />} />
      </div>
      <div onClick={leaderboard} className="grid h-screen place-items-end">
        <HomeIcon icon={<GrAchievement size="140" />} />
      </div>
    </div>
  );
}

const HomeIcon = ({ icon }) => <div className="home-icon">{icon}</div>;

export default Home;


// return (
//   <div className="grid grid-cols-3 gap-3">
//     <div onClick={about} className="grid h-screen place-items-end">
//       <HomeIcon icon={<GrInfo size="140" />} />
//     </div>
//     <div onClick={chooseName} className="grid h-screen place-items-center">
//       <HomeIcon icon={<GrGamepad size="140" />} />
//     </div>
//     <div className="grid h-screen place-items-end">
//       <HomeIcon icon={<GrAchievement size="140" />} />
//     </div>
//   </div>
// );
// }
