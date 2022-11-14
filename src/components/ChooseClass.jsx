import React from 'react'
import {useLocation} from 'react-router-dom'

//import characterData 

function ChooseClass ({characterData}){
    const location = useLocation();
    // const characterMap = characterData.map(
    //     (character) => <ClassItem key={character.id} character={character}/>
    //     )
    
    return(
        <>
        {location.state.name}
        {/* character info here */}
        {/* {characterMap} */}
        </>
    )
}

export default ChooseClass