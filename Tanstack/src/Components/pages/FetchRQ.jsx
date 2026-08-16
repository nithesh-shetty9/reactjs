
import { useQuery } from "@tanstack/react-query";
import { Fetchposts } from "../../API/Apimethods";

export const FetchRQ= () => {
  const{data,isLoading,isError,error}=useQuery({
    queryKey:["posts"],//usestate work
    queryFn:Fetchposts,//useeffect workflow
    //gcTime:1000
    staleTime:5000,//5min
  })
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
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};