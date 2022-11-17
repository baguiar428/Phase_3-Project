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

    // console.log(location.state.monster.defeated)
 
    console.log(hero)
    console.log(chooseReward)

    function continueAdventure(){
        setHero({
            name: hero.name,
            spec: hero.spec,
            health: hero.health + chooseReward.health_boost,
            strength: hero.strength + chooseReward.strength_boost, 
            agility: hero.agility + chooseReward.agility_boost,
            intellect: hero.intellect + chooseReward.intellect_boost,
            wins: hero.wins + 1
        })

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
            <br></br>
            <div>
                <img className="object-scale-down h-20 w-full" src= {require(`../assets/images/${hero.spec}.gif`)} alt={hero.name}/>
                <div className="text-white flex justify-center">
                    <table>
                        <thead>
                            <tr>
                                <td>Name: </td>
                                <td>{hero.name}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Class: </td>
                                <td> {hero.spec}</td>
                            </tr>
                            <tr>
                                <td>Health: </td>
                                <td> {hero.health + chooseReward.health_boost}</td>
                            </tr>
                            <tr>
                                <td>Strength: </td>
                                <td> {hero.strength + chooseReward.strength_boost}</td>
                            </tr>
                            <tr>
                                <td>Agility: </td>
                                <td> {hero.agility + chooseReward.agility_boost}</td>
                            </tr>
                            <tr>
                                <td>Intellect: </td>
                                <td> {hero.intellect + chooseReward.intellect_boost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={continueAdventure}
            > CONTINUE </button>
        </div>
    )
}

export default Victory;

