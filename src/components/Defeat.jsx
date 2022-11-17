import React from "react";
import { useNavigate, useLocation} from 'react-router-dom'

function Defeat() {
    const navigate = useNavigate();
    const location = useLocation();

    // console.log(location.state.hero)
    // console.log(location.state.monster.defeated)

    //save info to table?
    function playAgain(){
        fetch(`http://localhost:9292/heros/${location.state.hero.id}`,{
            method: 'DELETE',
        })
        .then(resp=>resp.json())
        .then(navigate('/'))
   }

    return (
        <div className="font-retro">
            <div>DEFEAT</div>
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={playAgain}
            > PLAY AGAIN! </button>
        </div>
    )
}

export default Defeat;
