import React from "react";
import { useNavigate, useLocation} from 'react-router-dom'

function Victory() {
    const navigate = useNavigate();
    const location = useLocation();

    // console.log(location.state.hero)
    // console.log(location.state.monster.defeated)

    //pass down hero info 
    function continueAdventure(){
        navigate('/maps', {state: {hero: location.state.hero}})
    }

    return (
        <div>
            <div>VICTORY</div>
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={continueAdventure}
            > CONTINUE </button>
        </div>
    )
}

export default Victory;

