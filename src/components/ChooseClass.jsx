import React, {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import ClassItem from './ClassItem'
import warrior from "../assets/images/Warrior.gif"
import rogue from "../assets/images/Rogue.gif"
import archer from "../assets/images/Archer.gif"
import mage from "../assets/images/Mage.gif"
import amazonian from "../assets/images/Amazonian.gif"

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
        img_url: "",
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
                img: {warrior}
            },
            {
                spec: "Mage",
                health: 15,
                str: 2,
                agi: 3,
                int: 7,
                img: {mage}
            },
            {
                spec:"Archer",
                health: 15,
                str: 3,
                agi: 7,
                int: 2,
                img: {archer}
            },
            {
                spec: "Rogue",
                health: 15,
                str: 2,
                agi: 6,
                int: 4,
                img: {rogue}
            },
            {   spec: "Amazonian",
                health: 20,
                str: 5,
                agi: 4,
                int: 2,
                img: {amazonian}
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
        {/* character info here */}
        <div className="columns-5"> {characterMap} </div>
        <div className="bg-black opacity-75 text-white content-center">
            {/* <div> */}
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
        {/* </div> */}
        <button onClick={startAdventure}>BEGIN YOUR ADVENTURE!</button>
        </div>
    )
}

export default ChooseClass