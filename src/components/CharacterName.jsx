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
        <div className='font-retro'>
            <form onSubmit = {handleSubmit}>
                <label>Choose your name:</label>
                <input type='text' placeholder='Enter Name...' value={charName} onChange={handleChange}/>
                <button type='submit'>Submit </button>
            </form>
        </div>
    )
}

export default CharacterName