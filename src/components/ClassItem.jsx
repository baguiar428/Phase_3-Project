import React from 'react'
// import {useNavigate} from 'react-router-dom'

function ClassItem({character}){

    //add route to Maps
    function handleClick(){
        console.log(character.spec)
    }

    return(
        <div className="text-white text-center px-10" onClick={handleClick}>
            <img src={character.img} alt={character.name}/>
            <div className="bg-black opacity-75">
                <span>Class: {character.spec}</span>
                <br></br>
                <span>Health: {character.health}</span>
                <br></br>
                <span>Str: {character.str}</span>
                <br></br>
                <span>Agi: {character.agi}</span>
                <br></br>
                <span>Int: {character.int}</span>
            </div>
        </div>
    )
}

export default ClassItem