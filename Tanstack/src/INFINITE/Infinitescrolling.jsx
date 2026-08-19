import { useInfiniteQuery } from "@tanstack/react-query"
import { Fetchuser } from "../API/Apimethods"
import { useEffect } from "react";

export const InfiniteScrolling=()=>{
     const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } =useInfiniteQuery({
        queryKey:["users"],
        queryFn:Fetchuser,
        initialPageParam: 1,
        getNextPageParam:(lastpage,allpages)=>{
            console.log(lastpage,allpages);
            return lastpage.length===10?allpages.length+1:undefined;
        }
    })

    useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (bottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);
//alterate to this is intersection observers in react pacakage usein viwe
    return<div>

     <h1>Infinite Scrolling</h1>
     {data?.pages?.map((page,index)=>(
        <ul key={index}>{
            page.map((user)=>(
                <li key={user.id}
                style={{padding:"10px",border:"1px solid #ccc"}}>
                    <p>{user.login}</p>
                    <img src={user.avatar_url}
                    alt={user.login}
                    width={50}
                    height={50}/>
                </li>
            )
        )}</ul>
     ))
     }
    </div>
}