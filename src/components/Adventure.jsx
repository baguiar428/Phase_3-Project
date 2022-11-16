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

    console.log(currentMap.name)

}

export default Adventure