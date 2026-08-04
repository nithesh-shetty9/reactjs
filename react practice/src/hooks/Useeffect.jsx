import { useEffect ,useState} from "react"

export const Useeffect=()=>{
    const [count,setcount]=useState(0);
    useEffect(()=>{
       console.log('hello'); 
    },[count])
    return(
        <div>
        <h1>hello usefffect</h1>
        <p>count:{count}</p>
        <button onClick={()=>{
            setcount(count=>count+1);
        }}>Click me</button>
        </div>
    )
}