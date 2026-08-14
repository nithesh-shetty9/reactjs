import { useEffect, useState } from "react";
import { Getpost, Deletepost } from "../api/Postapi";
import "../App.css"
import { Form } from "./Form";
export const Posts=() =>{
    const [data,setData]=useState([]);
    const [updatedapi,setupdateapi]=useState({});
const getpostdata=async()=>
  {
  const response=await Getpost();
  console.log(response.data);
  setData(response.data);
  }
  useEffect(()=>{
    getpostdata();
  },[])
  const handledeletepost=async(id,setData,data)=>{
    try{
   const response=await Deletepost(id);
   if(response.status===200)
   {
    const newupdates=data.filter((curr)=>{
        return curr.id!==id;
    });
    setData(newupdates);
   }
    }
    catch(error)
    {
        console.log(error);
    }
 }
 const handleupdatepost=(curr)=>{
   setupdateapi(curr)

 }
  return(
    <>
    <section className="section-form">
    <Form data={data}setData={setData} updatedapi={updatedapi} setUpdatedapi={setupdateapi}/>
    </section>
    <section className="section-post">
        <ol>
            {
                data.map((curr)=>{
                    const{body,title,id}=curr;
                                return(
                    <li key={id}>
                    <p>Title:{title}</p>
                    <p>Body:{body}</p>
                    <button  onClick={()=>{
                        handleupdatepost(curr);
                    }} >Edit</button>
                    <button className="btn-delete"onClick={
                        ()=>handledeletepost(id,setData,data)
                    }>Delete</button>
                         </li>   
                );
            })
                }</ol>
    </section>
    </>
  )
};