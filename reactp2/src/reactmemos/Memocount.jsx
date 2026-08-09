import { useRef,memo } from "react"
 const Counts=memo(()=>{
    const rendercount=useRef(0);
    console.log(rendercount);
    return(
        <div>
            <p>Nothing changed here but i have rendered:{rendercount.current++}</p>
        </div>
    )
})
export default Counts;