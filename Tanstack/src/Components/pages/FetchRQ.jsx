
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeletePost, Fetchposts, Updatedata } from "../../API/Apimethods";
import { NavLink } from "react-router";
import { useState } from "react";

export const FetchRQ= () => {
  const [page,setpage]=useState(0);
  const{data,isLoading,isError,error}=useQuery({
    queryKey:["posts",page],//usestate work
    queryFn:()=>Fetchposts(page),//useeffect workflow
    //gcTime:1000
    staleTime:10000,
    placeholderData:keepPreviousData
    // refetchInterval:1000,//5min
    // refreshIntervalInBackground:true
  })//query key is changed then only due to query
const queryclient=useQueryClient();
  ///usemutation
 const deleteMutation= useMutation({
    mutationFn:(id)=>DeletePost(id),
  onSuccess:(data,id)=>{
    queryclient.setQueryData(["posts",page],(curr)=>{
      return curr?.filter((post)=>post.id!==id);
    })
  }
  })
   const UpdateMutation= useMutation({
    mutationFn:(id)=>Updatedata(id),
  onSuccess:(data,id)=>{//here data get sthe updated response
    queryclient.setQueryData(["posts",page],(curr)=>{
      return curr?.map((post)=>{
        return post.id===id?{...post,title:"i have updated"}:post;
      })
      });
    }})

  if(isLoading)
  {
    return <h1>loading</h1>;
  }
  if(isError)
  {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <ul className="section-accordion">
        {data.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
              </NavLink>
              <button onClick={()=>deleteMutation.mutate(id)}>Delete</button>
              <button onClick={()=>UpdateMutation.mutate(id)}>Update</button>
            </li>
          );
        })}
      </ul>
      <div className="pagination-section container">
        <button onClick={()=>{
          if(page-3>=0)setpage(page=>page-3); 
        }}>Prev</button>
        <h2>{page/3+1}</h2>
        <button onClick={()=>setpage(page=>page+3)}>Next</button>
      </div>
    </div>
  );
};