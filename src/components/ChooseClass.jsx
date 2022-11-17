import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import ClassItem from './ClassItem'

//import characterData 

function ChooseClass (){
    const location = useLocation();
    const navigate = useNavigate();

    const [hero, setHero] = useState({
        id:"",
        name: location.state.name,
        spec: "",
        health: "",
        strength: "", 
        agility: "",
        intellect: "",
        wins: 0,
    })

    const characterData = 
    [
        {   
            id:1,
            spec: "Warrior",
            health: 35,
            str: 9,
            agi: 3,
            int: 1,
        },
        {   
            id:2,
            spec: "Mage",
            health: 25,
            str: 2,
            agi: 3,
            int: 10,    
        },
        {   
            id:3,
            spec:"Archer",
            health: 20,
            str: 5,
            agi: 9,
            int: 2,
        },
        {   
            id:4,
            spec: "Rogue",
            health: 25,
            str: 2,
            agi: 8,
            int: 5,  
        },
        {   
            id:5,
            spec: "Amazonian",
            health: 30,
            str: 7,
            agi: 5,
            int: 2,
        }
    ]
    
    //navigate to maps page
    //setup post request to backend using "hero" state
    function startAdventure(){
        fetch('http://localhost:9292/heros', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(hero)
        })
        .then(resp => resp.json())
        .then(hero => setHero(hero))
        .then(navigate('/maps', {state: {hero: hero}}))
    }

    const characterMap = characterData.map(
        (character) => 
            <> 
                <ClassItem 
                    name={location.state.name} 
                    setHero={setHero}
                    key={character.id} 
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
        <div className="text-white flex justify-center">
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
            <button 
                className="bg-black opacity-75 border-2 rounded text-red-500" 
                onClick={startAdventure}
            > BEGIN YOUR ADVENTURE! </button>
        </div>
        </div>
    )
}

export default ChooseClass