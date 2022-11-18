import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function SavedGame(){
    const navigate = useNavigate()

    const [saveData, setSaveData] = useState([])
    const [hero, setHero] = useState({
        id:"",
        name: "",
        spec: "",
        health: "",
        strength: "", 
        agility: "",
        intellect: "",
        wins: 0,
    })

    console.log(hero)
    useEffect(()=>{
        fetch('http://localhost:9292/heros')
        .then(resp => resp.json())
        .then(data => setSaveData(data))
    },[])

    const characterMap = saveData.map(
        (character) => 
            <> 
                <div className="bg-gradient-to-r from-black to-blue-700 rounded-xl opacity-75 text-white text-center text-5xl" 
                    onClick={ ()=>   
                        setHero({
                            id: character.id,
                            name: character.name,
                            spec: character.spec,
                            health: character.health,
                            strength: character.strength, 
                            agility: character.agility,
                            intellect: character.intellect,
                            wins: character.wins
                        })
                    }
                >
                    <div>
                        <span>{character.name}</span>
                        <img className="object-scale-down h-64 w-full" src= {require(`../assets/images/${character.spec}.gif`)} alt={character.name}/>
                    </div>
                </div>
            </>
        )

        function continueAdventure(){
            navigate('/maps', {state: {hero: hero}})
        }

        return(
        <div className="font-retro">
                <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-5 w-1/2 h-1/3"> {characterMap} </div>
            <br></br>
            <div className="text-white flex justify-center">
                    <table>
                        <thead>
                            <tr>
                                <td>Name: </td>
                                <td>{hero.name}</td>
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
                    onClick={continueAdventure}
                > CONTINUE YOUR ADVENTURE! </button>
            </div>
        </div>
            
        )
}

export default SavedGame