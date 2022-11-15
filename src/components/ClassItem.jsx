import React, {useState} from 'react'

function ClassItem({character, name, setHero}){
    //add route to Maps
    //save hero name, stats to state
    //send state to backend
    function chooseClass(){
        setHero({
            name: name,
            spec: character.spec,
            health: character.health,
            strength: character.str, 
            agility: character.agi,
            intellect: character.int,
            img_url: character.img,
        })
        // console.log(character.spec)
        // navigate(`/maps`, {state: {hero: hero}})
    }

    return(
        <div className="text-white text-center px-10" onClick={chooseClass}>
            <div className="bg-black opacity-75">
                <span>Class: {character.spec}</span>
                <img src={character.img} alt={character.name}/>
            </div>
        </div>
    )
}

export default ClassItem