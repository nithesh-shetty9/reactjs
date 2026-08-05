import { useEffect, useState } from "react"

export const Cleanup=()=>{
    const [count,setcount]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("im here");
            setcount(count=>count+1);
        },1000);
        return ()=>clearInterval(interval);
    },[]);
    return(
    <>
         <p>subscribers</p>
         <div>{count}</div>
    </>
    )
}