import { useState } from "react";

export const Practice=()=>{
    const [counter,setcount]=useState(0);
    const [step,setstep]=useState("");
    return(
        <>
        <h1>Counter</h1>
        <h1>Count:{counter}</h1>
        <h2>step<input type="number" value={step} onChange={(event)=>{
            if(event.target.value===""){
                setstep("");
            }else{
                let temp = Number(event.target.value);
                setstep(temp);
            }
        }}></input></h2>
        <button onClick={() =>
    setcount(prev => prev + (Number(step) > 0 ? Number(step) : 1))
  }>ADD+</button>
        <button onClick={()=>setcount(()=>counter-Number(step)>=0?counter-Number(step):0)}>MINUS-</button>
        <button onClick={()=>setcount(0)}>RESET</button>
        </>
    );
};
