import { NavLink, useNavigate } from "react-router"

export const ErrorPage=()=>{
    const navigate=useNavigate();

    return(
        <div>
            <h1>Error 404</h1>
            <p>The page you are looking for does not exist.</p>
            <button><NavLink to="/">back to home</NavLink></button>
            <button onClick={() => navigate(-1)}>go to previous page</button>
            {/* <button onClick={()=>window.history.back()}>same as upper</button>alternative */}
        </div>
    )
}