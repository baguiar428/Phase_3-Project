import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom'

//need to setup css for this
function CharacterName(){
    const [charName, setCharName] = useState();
    const navigate = useNavigate();
    
    function handleSubmit(){
        navigate(`/characters`, {state: {name: charName}})
    }

    function handleChange(e){
        setCharName(e.target.value)
    }

    return(
        <div className="display: block text-center text-green-500
                font-retro text-5xl pl-10 pr-10 ml-10 mr-10">
            <p></p>
            <form onSubmit = {handleSubmit}>
                <div className="flex flex-col justify-center items-center space-y-5 h-screen">
                <label>What is your name Hero?</label>
                <input type='text' placeholder='Enter Name...' value={charName} onChange={handleChange}/>
                <button type='submit'>Submit </button>
                </div>
            </form>
        </div>
    )
}

export default CharacterName