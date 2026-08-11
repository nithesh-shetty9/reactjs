import { NavLink, useLoaderData } from "react-router"
import "./card.css"
export const Movie=()=>{
    const moviesdata=useLoaderData();
   return(
    <>
    <ul className="container grid grid-four--cols">
    {moviesdata.Search.map((curr)=>{
        return <Card key={curr.imdbID}movie={curr}/>;
    })}
    </ul>
    </>
   )
}
const Card=({movie})=>{
    const {imdbID,Poster}=movie;
    return(
        <>
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} className="poster" alt={imdbID}/>
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                        <NavLink to={"/movie/"+imdbID}>
                        <button className="ticket__buy-btn">Watch now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </li>
        </>
    );
}