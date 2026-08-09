import { useState } from "react"
import  Counts  from "./Memocount";

export const Reactmemo = () => {
    const [count,setcount]=useState(0);
    console.log("Rendering");
    return(
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(prev=>prev+1)}>Increment</button>
        </div>
        <Counts/>
        </>
    )
}