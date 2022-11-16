import React, {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import ClassItem from './ClassItem'

//import characterData 

function ChooseClass (){
    const location = useLocation();
    const navigate = useNavigate();

    const [hero, setHero] = useState({
        name: location.state.name,
        spec: "",
        health: "",
        strength: "", 
        agility: "",
        intellect: "",
        wins: "",
    })

    const characterData = 
        [
            {
                spec: "Warrior",
                health: 25,
                str: 6,
                agi: 3,
                int: 1,
            },
            {
                spec: "Mage",
                health: 15,
                str: 2,
                agi: 3,
                int: 7,    
            },
            {
                spec:"Archer",
                health: 15,
                str: 3,
                agi: 7,
                int: 2,
            },
            {
                spec: "Rogue",
                health: 15,
                str: 2,
                agi: 6,
                int: 4,  
            },
            {   spec: "Amazonian",
                health: 20,
                str: 5,
                agi: 4,
                int: 2,
            }
        ]
    
    //navigate to maps page
    //setup post request to backend using "hero" state
    function startAdventure(){
        navigate('/maps', {state: {hero: hero}})
    }

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
        <div className='font-retro'>
        <h1 className="text-3xl text-white text-center">CHOOSE YOUR CLASS!</h1>
        <br></br>
        {/* character info here */}
        <div className="columns-5"> {characterMap} </div>
        <br></br>
        <div className="bg-black opacity-75 border-2 text-white rounded flex justify-center">
                <table>
                    <thead>
                        <tr>
                            <td>Name: </td>
                            <td> {location.state.name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Class: </td>
                            <td> {hero.spec}</td>
                        </tr>
                        <tr>
                            <td>Health: </td>
                            <td> {hero.health}</td>
                        </tr>
                        <tr>
                            <td>Strength: </td>
                            <td> {hero.strength}</td>
                        </tr>
                        <tr>
                            <td>Agility: </td>
                            <td> {hero.agility}</td>
                        </tr>
                        <tr>
                            <td>Intellect: </td>
                            <td> {hero.intellect}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <br></br>
        <div className="flex justify-center border-0">
            <button className="bg-black opacity-75 border-2 rounded text-red-500" onClick={startAdventure}> BEGIN YOUR ADVENTURE! </button>
        </div>
        </div>
    )
}

export default ChooseClass