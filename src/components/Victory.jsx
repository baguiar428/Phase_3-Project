import React, {useState} from "react";
import { useNavigate, useLocation} from 'react-router-dom'
import Rewards from './Rewards'

function Victory() {
    const navigate = useNavigate();
    const location = useLocation();

    const [hero, setHero] = useState(location.state.hero)
    const [chooseReward, setReward] = useState({
        item_name: "",
        health_boost: 0,
        strength_boost:0,
        agility_boost:0,
        intellect_boost:0,
    });

    function continueAdventure(){
        fetch(`http://localhost:9292/heros/${hero.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id: hero.id,
                name: hero.name,
                spec: hero.spec,
                health: hero.health + chooseReward.health_boost,
                strength: hero.strength + chooseReward.strength_boost, 
                agility: hero.agility + chooseReward.agility_boost,
                intellect: hero.intellect + chooseReward.intellect_boost,
                wins: hero.wins + 1
            })
        })
            .then(resp =>resp.json())
            .then(data => navigate('/stats', {state: {hero: data}}))
        }

    const rewardMap = location.state.monster.rewards.map((reward) => 
        <div>
        <Rewards
            key={reward.id}
            reward={reward}
            setReward={setReward}
        />
        </div >
        
    )

    return (
        <div className="font-retro">
            <h1 className="text-3xl text-yellow-500 text-center pt-20">VICTORY!</h1>
            <h2 className="text-2xl text-white text-center">Choose Your Reward:</h2>
            <br></br>
            <div className=" grid grid-cols-4 grid-rows-2 gap-3.5 grid-flow-row w-auto h-auto text-center pl-10 ml-10 mr-10 pr-10">{rewardMap}</div>
            <br></br>
            <br></br>
            <div className="flex justify-center">
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={continueAdventure}
            > CONTINUE </button>
        </div>
        </div>
    )
}

export default Victory;

