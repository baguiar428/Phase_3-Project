import React, {useState} from "react";
import Dice from "react-dice-roll";
import { useLocation, useNavigate } from "react-router-dom";


function Battle() {
    const location = useLocation();
    const navigate = useNavigate();

    const [monster, setMonster] = useState(location.state.monster);
    const [hero, setHero] = useState(location.state.hero);
    const [dice, setDice] = useState(false);
    const [showVictory, setShowVictory] = useState(false);
    const [showDefeat, setShowDefeat] = useState(false);

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
    // console.log(showVictory)
    // console.log(showDefeat)

    function handleDice(){
        setDice(true)
    }
    
    function victory(){
        navigate('/victory', {state: {hero: hero, monster: monster}})
    }

    function defeat(){
        navigate('/defeat', {state: {hero: hero, monster: monster}})
    }

    //for dice, size sets....size, change disabled prop to true after one roll
    return (
        <div className="font-retro text-center">
            <h1 className="text-3xl text-white">BATTLE!</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="justify-center columns-2 px-20">
                <div className=" bg-gradient-to-r from-black to-blue-700 rounded-xl opacity-75 text-white text-center px-10">
                    <div className="flex justify-evenly items-center space-y-5 h-1/3">
                        <span className="display: block text-center font-retro text-5xl">{hero.name}</span>
                        <img className="flex flex-wrap justify-center items-center h-80 w-80" src= {require(`../assets/images/${hero.spec}.gif`)} alt={hero.name}/>
                    </div>
                    <br></br>
                    <div className="flex justify-evenly items-center space-y-5 h-1/3">
                        <img className="flex flex-wrap justify-center items-center h-80 w-80" src= {require(`../assets/images/${monster.image}.gif`)} alt={monster.name}/>
                        <span className="display: block text-center font-retro text-5xl">{monster.name}</span>
                    </div>
                </div>
            </div>

            <br></br>

            <div onClick={handleDice}>
                <Dice disabled={dice} size={100} onRoll={(value) => {
                    if (statPercent >= 66 && value >= 2)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                            setShowVictory(true)
                        }          
                    else if (statPercent >= 33 && value >=3)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                            setShowVictory(true)
                        }
                    else if (statPercent >= 0 && value >= 4)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                            setShowVictory(true)
                        }
                    else if (statPercent >= -33 && value >=5)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                            setShowVictory(true)
                        }
                    else if (statPercent >= -66 && value === 6)
                        {
                            console.log( "win")
                            setMonster({...monster, defeated: true})
                            setShowVictory(true)
                        }
                    else
                        {
                            console.log( "lose")
                            setShowDefeat(true)
                        }
                }} />
            </div>

            <br></br>
            {/* hide button at first, show based off outcome of dice roll */}
            {showVictory ? 
                <button 
                    className="bg-black opacity-75 border-2 rounded text-red-500"
                    onClick={victory}
                >VICTORY</button> : null} 
            {showDefeat ? 
                <button 
                    className="bg-black opacity-75 border-2 rounded text-red-500"
                    onClick={defeat}
                > DEFEAT </button> : null} 
        </div>
    );
}

export default Battle;


// dice bundle installation:
// npm install react-dice-roll --legacy-peer-deps
