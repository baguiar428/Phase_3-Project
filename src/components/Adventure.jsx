import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Adventure(){
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    const [currentMap, setCurrentMap] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:9292/maps/${params.id}`)
        .then(resp => resp.json())
        .then(data => setCurrentMap(data))
    }, [params.id])

    const allMonsters = currentMap.monsters ? currentMap.monsters.map((monster) => 
        <div onClick={()=> navigate("/battle", {state: {hero: location.state.hero, monster: monster}})}>
            <span className="font-retro text-justify text-green-500 ">{monster.name}</span>
            <img className="w-96 bg-gradient-to-r from-black to-blue-500 opacity-90 rounded-xl transform transition my-10 duration-500 hover:scale-150 pl-16 ml-28 mt-28" src={require(`../assets/images/${monster.image}.gif`)} alt={monster.name}
            />
            </div>) 
        : null;

    return(
        <div className="font-retro text-center">
            <h1 className="text-4xl text-white text-center">{currentMap.name}</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* add map background, monster images */}
            <div className="grid grid-cols-3 grid-rows-1 gap-5 gap-x-5 grid-flow-row w-auto h-auto">{allMonsters}</div>
        </div>
    )

}

export default Adventure