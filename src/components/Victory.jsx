import React, {useState} from "react";
import { useNavigate, useLocation} from 'react-router-dom'
import Rewards from './Rewards'

function Victory() {
    const navigate = useNavigate();
    const location = useLocation();

    const [hero, setHero] = useState(location.state.hero)
    const [chooseReward, setReward] = useState();

    // console.log(location.state.monster.defeated)

    function chooseLoot(){
        setHero({
            name: hero.name,
            spec: hero.spec,
            health: hero.health + chooseReward.health_boost,
            strength: hero.strength + chooseReward.strength_boost, 
            agility: hero.agility + chooseReward.agility_boost,
            intellect: hero.intellect + chooseReward.intellect_boost,
            wins: hero.wins + 1
        })
    }
 
    console.log(hero)
    console.log(chooseReward)

    function continueAdventure(){
        navigate('/maps', {state: {hero: hero}})
    }

    const rewardMap = location.state.monster.rewards.map((reward) => 
        <Rewards
            key={reward.id}
            reward={reward}
            setReward={setReward}
        />
    )

    return (
        <div className="font-retro">
            <h1 className="text-3xl text-white text-center">VICTORY!</h1>
            <h2 className="text-2xl text-white text-center">Choose Your Reward:</h2>
            <div className="flex">{rewardMap}</div>
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={chooseLoot}
            > Choose Reward </button>
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={continueAdventure}
            > CONTINUE </button>
        </div>
    )
}

export default Victory;

