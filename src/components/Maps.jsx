import React from 'react'
import {useLocation} from 'react-router-dom'

function Maps(){
    const location = useLocation()
    console.log(location.state.hero)
}

export default Maps