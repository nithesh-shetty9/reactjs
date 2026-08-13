import axios from "axios"
const api=axios.create({
    baseURL:"https://www.omdbapi.com/"
})
export const Getmoviesdata=()=>{
    return api.get("/?apikey="+import.meta.env.VITE_API_KEY+"&s=titanic&page=1");
}
