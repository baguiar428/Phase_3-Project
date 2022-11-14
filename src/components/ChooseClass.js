import React from 'react'

//import characterData 

function ChooseClass ({characterData}){
    const characterMap = characterData.map(
        (character) => <ClassItem key={character.id} character={character}/>
        )

    return(
        <>
        {characterMap}
        </>
    )
}

export default ChooseClass