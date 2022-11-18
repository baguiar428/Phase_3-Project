import React, {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import ClassItem from './ClassItem'
import { GrHomeRounded, GrInfo } from "react-icons/gr";
import SideBarIconHome from "./SideBarIconHome";
import SideBarIconAbout from "./SideBarIconAbout";
// import SideBarIconStats from "./SideBarIconStats";

//import characterData 

function ChooseClass (){

    function home() {
        navigate("/");
      }
    
      function about() {
        navigate("/about");
      }
    
    //   function stats() {
    //     navigate("/stats");
    //   }
    

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
            health: 60,
            strength: 9,
            agility: 3,
            intellect: 1,
        },
        {   
            id:2,
            spec: "Mage",
            health: 50,
            strength: 2,
            agility: 3,
            intellect: 10,    
        },
        {   
            id:3,
            spec:"Archer",
            health: 45,
            strength: 5,
            agility: 9,
            intellect: 2,
        },
        {   
            id:4,
            spec: "Rogue",
            health: 50,
            strength: 2,
            agility: 8,
            intellect: 5,  
        },
        {   
            id:5,
            spec: "Amazonian",
            health: 55,
            strength: 7,
            agility: 5,
            intellect: 2,
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
        .then(data => navigate('/maps', {state: {hero: data}}))
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
        <>
            <div
        className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-gray-900 shadow-lg"
      >
        <div onClick={home}>
          <SideBarIconHome icon={<GrHomeRounded size="32" />} />
        </div>
        <div onClick={about}>
          <SideBarIconAbout onClick={about} icon={<GrInfo size="32" />} />
        </div>
      </div>
        <div className='font-retro'>
        <h1 className="text-3xl text-white text-center">CHOOSE YOUR CLASS!</h1>
        <br></br>
        {/* character info here */}
        <div className="columns-5 ml-12 pl-20 pr-10 mr-12"> {characterMap} </div>
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
        </>
    )
}

export default ChooseClass