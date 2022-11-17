import React from "react";
import { useNavigate, useLocation} from 'react-router-dom'

function BattleResult() {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.state.hero)
    console.log(location.state.monster.defeated)

    return (
        <div></div>
    )
}

export default BattleResult;

