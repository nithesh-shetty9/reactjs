import { useState } from "react";

export const Practice=()=>{
    const [counter,setcount]=useState(0);
    return(
        <>
        <h1>Counter</h1>
        <h1>Count:{counter}</h1>
        <button onClick={
            ()=>setcount(counter+1)
        }>ADD+</button>
        <button onClick={()=>setcount(()=>counter-1>=0?counter-1:0)}>MINUS-</button>
        <button onClick={()=>setcount(0)}>RESET</button>
        </>
    );
};