import axios from "axios";

const api=axios.create({

    baseURL:"https://jsonplaceholder.typicode.com/"
});
export const Fetchposts=async()=>{
    const response=await api.get("/posts");
    return response.status==200?response.data:[];
}