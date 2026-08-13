import { useState } from "react";
import { PostData } from "../api/Postapi";

export const Form=({data,setData})=>{
    const [postdata,setpostdata]=useState({
        title:"",
        body:"",
    })
    const handleinput=((e)=>{
        console.log(e);
        const name=e.target.name;
        const value=e.target.value;
            setpostdata((prev)=>{
                return {...prev,[name]:value}})
    })
    const handleformSubmit=(event)=>{
        event.preventDefault();
        addpostdata();
    }
    const addpostdata=async()=>{
       const response=await PostData(postdata);
       if(response.status===201)
       {
        setData([...data,response.data]);
       }
    }
    return(
     <form onSubmit={handleformSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={data.title}
          onChange={()=>handleinput(event)}
        />
      </div>

      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Add Post"
          id="body"
          name="body"
          value={data.body}
          onChange={()=>handleinput(event)}
        />
      </div>
      <button type="submit">Add</button>
    </form>);
};