import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

//use location.state.hero to grab hero info
function Maps(){
    const location = useLocation()
    const navigate = useNavigate()
    const [mapData, setMapData] = useState()

    //fetch map data
    useEffect(() => {
        fetch('http://localhost:9292/maps')
        .then(resp => resp.json())
        .then(data => setMapData(data))
    },[])

    // console.log(location.state.hero)

    //mapData isnt populated at first, so need to setup a ternary to check and map only after fetch has happened
    //interpolate img route
    const allMaps = mapData ? mapData.map((environment)=> 
    <div 
    className="flex flex-col bg-black opacity-75 rounded-xl text-white text-center" 
    onClick={()=>navigate(`/maps/${environment.id}`, {state: {currentHero: location.state.hero}})}
    >
        <span>{environment.name}</span>
            
            <img className= "object-contain" src={require(`../assets/images/${environment.image_URL}.png`)} alt={environment.name}/>
        </div>
        ) : null



    return(
        <div className="font-retro">
            <h1 className="text-3xl text-white text-center">CHOOSE YOUR ADVENTURE!</h1>
            <br></br>
            <div className="grid overflow-hidden grid-cols-2 grid-rows-3 gap-5 w-auto h-screen">{allMaps}</div>
        </div>
    )

}

export default Maps