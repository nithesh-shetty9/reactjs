export const moviesdata=async()=>{
    try{
        const response=await fetch("https://www.omdbapi.com/?apikey="+import.meta.env.VITE_API_KEY+"&s=titanic&page=1");
        const data=await response.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }

}