import { useEffect, useState } from "react"

export const Practiceapi = () => {
    const [poke,setpoke]=useState(null);
    useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu").
    then((res)=>res.json())
    .then((data)=>setpoke(data)).catch((error)=>console.log(error))
    },[])
    return(
        <div>
            <h1>Practice API</h1>
            <h2>{poke?.name}</h2>
        </div>
    )
}