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
}//delete for usemutaution
export const DeletePost=async(id)=>{
    const response=await api.delete("/posts/"+id);
    return response;
}
export const Updatedata=(id)=>{
    const response=api.patch("/posts/"+id,{title:"i have updated by clicked bewakuff"});
    return response;
}
//infinite scrolling
export const Fetchuser=async({pageParam=1})=>{
    try{
        const res=await axios.get("https://api.github.com/users?per_page=10&page="+pageParam);
        return res.data;
    }
     
    catch(error){
        console.log(error);
    }

}