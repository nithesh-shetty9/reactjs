import axios from "axios";

const api=axios.create({

    baseURL:"https://jsonplaceholder.typicode.com"
});
// "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20
export const Fetchposts=async(page)=>{
    const response=await api.get("posts?_start="+page+"&_limit=3");
    return response.status==200?response.data:[];
}
//fetch invidiual
//dont miss await
export const FetchInvpost=async(id)=>{
    try{
        const response=await api.get("/posts/"+id);
        return response.status==200?response.data:[];
    }
    catch(error)
    {
        console.log(error);
    }
}
