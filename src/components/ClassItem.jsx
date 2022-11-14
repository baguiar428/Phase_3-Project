import React from 'react'
import {useNavigate} from 'react-router-dom'

function ClassItem({character}){

    const navigate = useNavigate();

    //change navigation path as necessary
    function showHero(){
        navigate(`/characters/${character.id}`)
    }

    return(
        <div>
            <span><bold>{character.name}</bold></span>
            <img className="characterImg" src={character.img} alt={character.name} onClick={showHero}/>
            <div>
                <span>Character Attributes:</span>
                <span>Health: {character.health}</span>
                <span>Str: {character.str}</span>
                <span>Agi: {character.agi}</span>
                <span>Int: {character.int}</span>
            </div>
        </div>
    )
}

export default ClassItem