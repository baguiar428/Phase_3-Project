import React from "react";
import { useNavigate } from "react-router-dom";
import { GrGamepad } from "react-icons/gr";

function Home() {
  const navigate = useNavigate();

  function chooseName() {
    navigate("/choose_name");
  }

  return (
    <div className="grid h-screen place-items-center">
      <HomeIcon icon={<GrGamepad size="140" />} />
    </div>
  );
}

const HomeIcon = ({icon}) => (
  <div className="home-icon">
    {icon}
  </div>
)

export default Home;
