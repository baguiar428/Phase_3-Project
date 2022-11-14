import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){
    const navigate = useNavigate();

    function chooseName(){
        navigate('/choose_name')
    }

    return(
        <button onClick={chooseName}>Play</button>
    )
}

export default Home