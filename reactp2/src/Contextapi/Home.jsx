import { useContext } from "react"
import { Biocontext } from "./Cont"

export const Home=()=>{
    const {name, age}=useContext(Biocontext)
    return <h1>hello {name}, you are {age}</h1>
}