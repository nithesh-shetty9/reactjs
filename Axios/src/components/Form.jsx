import { useEffect, useState } from "react";
import { PostData, Updatedata } from "../api/Postapi";

export const Form=({data,setData,updatedapi,setUpdatedapi})=>{
    const [postdata,setpostdata]=useState({
        title:"",
        body:"",
    })
    let isEmpty=Object.keys(updatedapi).length===0;
    useEffect(()=>{
     updatedapi&&setpostdata({
        title:updatedapi.title||"",
        body:updatedapi.body||""
     });
    },[updatedapi])
    const handleinput=((e)=>{
        console.log(e);
        const name=e.target.name;
        const value=e.target.value;
            setpostdata((prev)=>{
                return {...prev,[name]:value}})
    })
    //updatepost;
    const updatepostdata = async () => {
    try {
      const res = await Updatedata(updatedapi.id, postdata);
      console.log(res);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });

        setpostdata({ title: "", body: "" });
        setUpdatedapi({});
      }
    } catch ({ error }) {
      console.log(error);
    }
  };



    const handleformSubmit=(event)=>{
        event.preventDefault();
        const action=event.nativeEvent.submitter.value;
        if(action==="Add")
        {
           addpostdata();
        }
        else if(action==="Edit")
        {
          updatepostdata();
        }
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
          value={postdata.title}
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
          value={postdata.body}
          onChange={()=>handleinput(event)}
        />
      </div>
      <button type="submit"value={isEmpty?"Add":"Edit"}>{isEmpty?"Add":"Edit"}</button>
    </form>);
};