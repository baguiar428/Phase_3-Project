import React from 'react'
// import warrior from "../assets/images/Warrior.gif"


function ClassItem({character, name, setHero}){
    //save hero name, stats to state
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
    }

    return(
        <div className="text-white text-center px-10" onClick={chooseClass}>
            <div className="bg-black opacity-75">
                <span>Class: {character.spec}</span>
                <img src= {character.img} alt={character.name}/>
            </div>
        </div>
    )
}

export default ClassItem

// require(character.img)