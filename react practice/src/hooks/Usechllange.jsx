import { useEffect, useState } from "react"

export const Challenge=()=>{
    const [count,setcount]=useState(0);
    const [user,setuser]=useState("");
    useEffect(()=>{
        console.log(count);
        const s="count :"+count;
        document.getElementById('title').innerHTML=s;
    },[count])
    useEffect(()=>{
        console.log(user);
    },[user])
;
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={()=>{
            setcount(count=>count+1);
        }}>Click me</button>
        <input type="text"placeholder="enter you name" value={user} onChange={(event)=>{
            setuser(event.target.value)}}></input>
        </>
    )
}