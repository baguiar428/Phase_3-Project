import React from 'react'
import {useLocation} from 'react-router-dom'
import ClassItem from './ClassItem'

//import characterData 

function ChooseClass (){

    const characterData = 
        [
            {
                spec: "Warrior",
                health: 20,
                str: 8,
                agi: 6,
                int: 3
            },
            {
                spec: "Mage",
                health: 15,
                str: 3,
                agi: 4,
                int: 8
            },
            {
                spec:"Archer"
            },
            {
                spec: "Rogue"
            }
        ]

    console.log(characterData)
    const location = useLocation();

    const characterMap = characterData.map(
        (character) => 
            <>
                <ClassItem key={character.index} character={character}/>
            </>
        )

    // {location.state.name} grabs the name you created
    return(
        <>
        <b>{location.state.name}</b>
        {/* character info here */}
        <div className="columns-4">
        {characterMap}
        </div>
        </>
    )
}

export default ChooseClass