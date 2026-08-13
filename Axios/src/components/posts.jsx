import { useEffect, useState } from "react";
import { Getpost, Deletepost } from "../api/Postapi";
import "../App.css"
import { Form } from "./Form";
export const Posts=() =>{
    const [data,setData]=useState(null);
const getpostdata=async()=>
  {
  const response=await Getpost();
  console.log(response.data);
  setData(response.data);
  }
  useEffect(()=>{
    getpostdata();
  },[])
  if(!data)
  {
    return<h1>Loading</h1>
  }
  return(
    <>
    <section className="section-form">
    <Form data={data}setData={setData}/>
    </section>
    <section className="section-post">
        <ol>
            {
                data.map((curr)=>{
                    return<Card curr={curr}key={curr.id}setData={setData}data={data}/>
                })
            }
        </ol>
    </section>
    </>
  )
};
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
const Card=({curr,setData,data})=>{
    const{body,title,id}=curr;
    return(<li>
        <p>Title:{title}</p>
        <p>Body:{body}</p>
        <button >Edit</button>
        <button className="btn-delete"onClick={
            ()=>handledeletepost(id,setData,data)
        }>Delete</button>
    </li>);
}