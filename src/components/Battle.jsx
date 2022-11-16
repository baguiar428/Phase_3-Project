import React from "react";
import Dice from "react-dice-roll";
import { useLocation } from "react-router-dom";


function Battle() {

    const location = useLocation();

    console.log(location.state.currentHero)
    console.log(location.state.monster)
    return (
        <Dice onRoll={(value) => console.log(value)} />
    );
}

export default Battle;