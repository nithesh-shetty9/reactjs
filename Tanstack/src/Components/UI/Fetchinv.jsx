import { useQuery } from "@tanstack/react-query"
import { FetchInvpost } from "../../API/Apimethods"
import { NavLink, useParams } from "react-router"

export const FetchInv=()=>{
    const {id}=useParams()

    const{data,isLoading,isError}=useQuery({
    queryKey:["posts",id],//usestate work
    queryFn:()=>FetchInvpost(id)//useeffect
    });
    console.log(data);
    if(isLoading)return <h1>Loading</h1>
    if(isError)return <h1>Something went wrong</h1>
    return(
        <div>
        <ul className="section-accordion">
            <li>
                <p>ID:{data.id}</p>
                <p>Title:{data.title}</p>
                <p>Body:{data.body}</p>
                 <NavLink to="/rq">
                <button>go back</button>
                </NavLink>
            </li>
        </ul>
        </div>
    )
}