import React from "react";
import Dice from "react-dice-roll";
import { useLocation } from "react-router-dom";


function Battle() {
    const location = useLocation();

    const heroStats = location.state.currentHero.health/5 + 
                      location.state.currentHero.strength + 
                      location.state.currentHero.agility + 
                      location.state.currentHero.intellect

    const monsterStats = location.state.monster.health/5 +
                         location.state.monster.strength +
                         location.state.monster.agility +
                         location.state.monster.intellect

    const statPercent = (heroStats-monsterStats)/monsterStats * 100
    // console.log(heroStats)
    // console.log(monsterStats)
    console.log(statPercent)
    // function battleResult (){
    //     if (heroStats > monsterStats){
    //         if (statPercent > 83)

    //     }
    //     else{
    //         return (heroStats-monsterStats)/monsterStats
    //     }
    // }

    // console.log(battleResult())
    return (
        <Dice onRoll={(value) => {
            if (statPercent >= 66 && value >= 2)
                console.log( "win")
            else if (statPercent >= 33 && value >=3)
                console.log("win")
            else if (statPercent >= 0 && value >= 4)
                console.log("win")
            else if (statPercent >= -33 && value >=5)
                console.log("win")
            else if (statPercent >= -66 && value === 6)
                console.log("win")
            else
                console.log( "lose")
        }} />
    );
}

export default Battle;