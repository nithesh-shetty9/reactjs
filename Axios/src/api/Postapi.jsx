import axios from "axios";

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"//base url which is consat for this bas
})
//root
//baseurl
//get method
export const Getpost=()=>{
    return api.get("/posts");
}
//delete method
export const Deletepost=(id)=>{
    return api.delete("/posts/"+id)
}
//post method
export const PostData=(post)=>{
    return api.post("/posts",post)
}