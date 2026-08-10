import { NavLink } from "react-router"

export const ErrorPage=()=>{
    return(
        <div>
            <h1>Error 404</h1>
            <p>The page you are looking for does not exist.</p>
            <button><NavLink to="/">back to home</NavLink></button>
        </div>
    )
}