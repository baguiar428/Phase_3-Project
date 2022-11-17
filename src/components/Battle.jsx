import React, {useState} from "react";
import Dice from "react-dice-roll";
import { useLocation, useNavigate } from "react-router-dom";


function Battle() {
    const location = useLocation();
    const navigate = useNavigate();

    const [monster, setMonster] = useState(location.state.monster);
    const [hero, setHero] = useState(location.state.currentHero);
    const [dice, setDice] = useState(false);

    const heroStats = hero.health/5 + 
                      hero.strength + 
                      hero.agility + 
                      hero.intellect

    const monsterStats = monster.health/5 +
                         monster.strength +
                         monster.agility +
                         monster.intellect

    const statPercent = (heroStats-monsterStats)/monsterStats * 100
    // console.log(heroStats)
    // console.log(monsterStats)
    // console.log(statPercent)
    // console.log(monster.defeated)

    function handleDice(){
        setDice(true)
    }

    function battleResult(){
        navigate('/battle_result', {state: {hero: hero, monster: monster}})
    }
    //for dice, size sets....size, change disabled prop to true after one roll
    return (
        <div className="font-retro text-center">
            <div onClick={handleDice}>
                <Dice disabled={dice} size={100} onRoll={(value) => {
                    if (statPercent >= 66 && value >= 2)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                        }          
                    else if (statPercent >= 33 && value >=3)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                        }
                    else if (statPercent >= 0 && value >= 4)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                        }
                    else if (statPercent >= -33 && value >=5)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                        }
                    else if (statPercent >= -66 && value === 6)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                        }
                    else
                        console.log( "lose")
                }} />
            </div>
            <br></br>
            {/* hide button at first, show after dice roll */}
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500"
                onClick={battleResult}
            >
                BATTLE RESULT
            </button>
        </div>
    );
}

export default Battle;


// dice bundle installation:
// npm install react-dice-roll --legacy-peer-deps
