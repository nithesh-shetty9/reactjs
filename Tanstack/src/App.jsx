import {ReactQueryDevtools}from "@tanstack/react-query-devtools"
import { createBrowserRouter, RouterProvider } from "react-router";
import { Mainlayout } from "./Components/layout/Mainlayout";
import { Home } from "./Components/pages/Home";
import { Fetchold } from "./Components/pages/FetchOld";
import { FetchRQ } from "./Components/pages/FetchRQ";
import "./App.css"
import {QueryClient, QueryClientProvider}from "@tanstack/react-query"
import { FetchInv } from "./Components/UI/Fetchinv";
import { InfiniteScrolling } from "./INFINITE/Infinitescrolling";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Mainlayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
      ,{
        path:"/trad",
        element:<Fetchold/>
      }
      ,{
        path:"/rq",
        element:<FetchRQ/>
      },
      {
        path:"/rq/:id",
        element:<FetchInv/>
      },
      {
        path:"/infinite",
        element:<InfiniteScrolling/>
      }
    ]
  }
])

const App=()=>{
  const queryClient=new QueryClient();
      return( 
    <>
    <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}></RouterProvider>
  <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
  </>
  )
}
export default App;