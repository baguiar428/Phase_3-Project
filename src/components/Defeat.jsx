import React, {useState} from "react";
import { useNavigate, useLocation} from 'react-router-dom'
import skull from "../assets/images/skull.png";

function Defeat() {
    const navigate = useNavigate();
    const location = useLocation();
    const [hero, setHero] = useState(location.state.hero)

    // console.log(location.state.hero)
    // console.log(location.state.monster.defeated)

    //save info to table?

    function playAgain(){
        fetch('http://localhost:9292/champions', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: hero.name,
                spec: hero.spec,
                wins: hero.wins
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(fetch(`http://localhost:9292/heros/${location.state.hero.id}`,{
            method: 'DELETE',
        })
        .then(resp=>resp.json())
        .then(navigate('/')))
   }

    return (
        <div className="font-retro display: block ml-auto mr-auto text-center">
            <img className="ml-auto mr-auto py-10" src={skull} alt="skull"/>
            <div className="text-3xl mb-5 text-red-500">DEFEAT</div>
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={playAgain}
            > PLAY AGAIN! </button>
        </div>
    )
}

export default Defeat;
