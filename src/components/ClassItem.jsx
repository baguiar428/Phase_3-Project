import React from 'react'


function ClassItem({character, name, setHero}){
    //save hero name, stats to state
    function chooseClass(){
        setHero({
            id:'',
            name: name,
            spec: character.spec,
            health: character.health,
            strength: character.str, 
            agility: character.agi,
            intellect: character.int,
            wins:0,
        })
    }
    
    return(
        <div className=" bg-gradient-to-r from-black to-blue-700 rounded-xl opacity-85 text-green-500 text-center text-4xl mr-4 transition duration-500 hover:scale-110" onClick={chooseClass}>
            <div>
                <span>{character.spec}</span>
                <img className="object-scale-down h-80 w-full" src= {require(`../assets/images/${character.spec}.gif`)} alt={character.name}/>
            </div>
        </div>
    )
}

export default ClassItem