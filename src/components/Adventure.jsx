import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Adventure(){
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    const [currentMap, setCurrentMap] = useState([]);
    
    console.log(location.state.hero)
    useEffect(() => {
        fetch(`http://localhost:9292/maps/${params.id}`)
        .then(resp => resp.json())
        .then(data => setCurrentMap(data))
    }, [params.id])

    const allMonsters = currentMap.monsters ? currentMap.monsters.map((monster) => 
        <div onClick={()=> navigate("/battle", {state: {hero: location.state.hero, monster: monster}})}>
            <span>{monster.name}</span>
            <img src={require(`../assets/images/${monster.image}.gif`)} alt={monster.name}
            />
            </div>) 
        : null;

    return(
        <div className="font-retro">
            <h1 className="text-3xl text-white text-center">{currentMap.name}</h1>
            {/* add map background, monster images */}
            <div className="columns-3">{allMonsters}</div>
        </div>
    )

}

export default Adventure