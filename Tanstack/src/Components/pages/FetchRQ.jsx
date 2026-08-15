import {  useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import { Fetchposts } from "../../API/Apimethods";

export const FetchRQ= () => {
  const{data,isLoading,isError}=useQuery({
    queryKey:["posts"],//usestate work
    queryFn:Fetchposts//useeffect workflow
  })
  if(!data)
  {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <ul className="section-accordion">
        {data.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};