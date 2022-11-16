import React, {useEffect, useState} from 'react'
// import {useLocation} from 'react-router-dom'

//use location.state.hero to grab hero info
function Maps(){
    // const location = useLocation()
    const [mapData, setMapData] = useState()

    //add url for map info here
    // const map_url = 'http://localhost:9292/maps'
    //fetch map data
    useEffect(() => {
        fetch('http://localhost:9292/maps')
        .then(resp => resp.json())
        .then(data => setMapData(data))
    },[])

    //mapData isnt populated at first, so need to setup a ternary to check and map only after fetch has happened
    //interpolate img route
    const allMaps = mapData ? mapData.map((environment)=> 
        <div className="bg-black opacity-75 rounded-xl text-white text-center">
            <span>{environment.name}</span>
            <img src={environment.img_URL} alt={environment.name}/>
        </div>
        ) : null

    return(
        <div className="font-retro">
            <h1 className="text-white text-3xl text-center">CHOOSE YOUR ADVENTURE!</h1>
            <br></br>
            <div className="columns-5">{allMaps}</div>
        </div>
    )

}

export default Maps