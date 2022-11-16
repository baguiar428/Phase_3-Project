import React from 'react'


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

    console.log(character.img)
    return(
        <div className="text-white text-center px-10" onClick={chooseClass}>
            <div className="bg-black rounded-xl opacity-75">
                <span>{character.spec}</span>
                <img className="object-scale-down h-20 w-full" src= {require(`../assets/images/${character.spec}.gif`)} alt={character.name}/>
            </div>
        </div>
    )
}

export default ClassItem

// require(character.img)