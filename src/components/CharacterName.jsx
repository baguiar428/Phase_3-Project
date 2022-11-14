import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom'

//need to setup css for this
function CharacterName(){
    const [charName, setCharName] = useState('');
    const navigate = useNavigate();
    
    function handleSubmit(e){
        setCharName(e.target.value)
        navigate(`/characters`)
    }

    return(
        <div className='characterName'>
            <form onSubmit = {handleSubmit}>
                <label>Choose your name:</label>
                <input type='text' placeholder='Enter Name...' value={charName}/>
                <button>Press Me!</button>
            </form>
        </div>
    )
}

export default CharacterName