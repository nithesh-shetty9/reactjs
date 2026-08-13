import axios from "axios"
import {NavLink} from "react-router"
import { useEffect, useState } from "react";
import { Getmoviesdata } from "./CutsomAxios";
export const Movie=()=>{
    const [data,setdata]=useState([]);
    const API="https://www.omdbapi.com/?apikey="+import.meta.env.VITE_API_KEY+"&s=titanic&page=1"
    const getmoviesdata=async()=>{
       try{
       const response= await Getmoviesdata();
       setdata(response.data.Search||[]);
       }
       catch(error){
        console.log("requestfailed",error);
       }
    }
    useEffect(()=>{
        getmoviesdata();
    },[])
    return <ul>
        {
            data.map((curr)=>{
                return <Movies curr={curr}key={curr.imdbID}/>

            })
        }
    </ul>
}
const Movies=({curr})=>{
    const {Poster,imdbID}=curr;
    return(
        <>
        <h1>hi</h1>
         <li className="hero-container">
             <div className="main-container">
                 <div className="poster-container">
                     <img src={Poster} className="poster" alt={imdbID}/>
                 </div>
                 <div className="ticket-container">
                     <div className="ticket__content">
                         <button className="ticket__buy-btn">Watch now</button>
                     </div>
                 </div>
             </div>
         </li>
        </>
    );
}