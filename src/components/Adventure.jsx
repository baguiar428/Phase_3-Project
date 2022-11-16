import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

function Adventure(){
    const location = useLocation()
    const params = useParams()
    const [currentMap, setCurrentMap] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/maps/${params.id}`)
        .then(resp => resp.json())
        .then(data => setCurrentMap(data))
    }, [params.id])

    const allMonsters = currentMap.monsters ? currentMap.monsters.map((monster) => 
        <div>{monster.name}</div>) : null

    return(
        <div className="font-retro">
            <h1 className="text-3xl text-white text-center">{currentMap.name}</h1>
            {/* add map url to table */}
            {/* <img src= {require(`../assets/images/${currentMap.url}.png`)} alt={currentMap.name}/> */}
            <div className="columns-3">{allMonsters}</div>
        </div>
    )

}

export default Adventure