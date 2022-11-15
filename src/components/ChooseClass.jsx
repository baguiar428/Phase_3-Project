import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import ClassItem from './ClassItem'

//import characterData 

function ChooseClass (){
    const location = useLocation();
    const [hero, setHero] = useState({
        name: location.state.name,
        spec: "",
        health: "",
        strength: "", 
        agility: "",
        intellect: "",
        img_url: "",
    })

    const characterData = 
        [
            {
                spec: "Warrior",
                health: 20,
                str: 8,
                agi: 6,
                int: 3,
                // img
            },
            {
                spec: "Mage",
                health: 15,
                str: 3,
                agi: 4,
                int: 8,
                
            },
            {
                spec:"Archer"
            },
            {
                spec: "Rogue"
            }
        ]

    console.log(characterData)

    const characterMap = characterData.map(
        (character) => 
            <> 
                <ClassItem 
                    name={location.state.name} 
                    setHero={setHero}
                    key={character.index} 
                    character={character}/> 
            </>
        )

    // {location.state.name} grabs the name you created
    return(
        <>
        <div className="text-center"> Choose your class! </div>
        {/* character info here */}
        <div className="columns-4"> {characterMap} </div>
        <div className="bg-black opacity-75 text-white content-center">
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name: </td>
                            <td>{location.state.name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Class: </td>
                            <td>{hero.spec}</td>
                        </tr>
                        <tr>
                            <td>Health: </td>
                            <td>{hero.health}</td>
                        </tr>
                        <tr>
                            <td>Strength: </td>
                            <td>{hero.strength}</td>
                        </tr>
                        <tr>
                            <td>Agility: </td>
                            <td>{hero.agility}</td>
                        </tr>
                        <tr>
                            <td>Intellect: </td>
                            <td>{hero.intellect}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}

export default ChooseClass