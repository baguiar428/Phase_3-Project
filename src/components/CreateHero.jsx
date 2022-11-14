import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';

function CreateHero(){
    const [char, setChar] = useState([])
    const params = useParams();

    //fill in url for character class here
    character_url = ""

    //grab json info for that character
    useEffect(()=>{
        fetch(`${character_url}/${params.id}`)
        .then(resp => resp.json())
        .then(data => setChar(data))
    }, [params.id])

}

export default CreateHero