import { createBrowserRouter, RouterProvider } from "react-router";
import { Mainlayout } from "./Components/layout/Mainlayout";
import { Home } from "./Components/pages/Home";
import { Fetchold } from "./Components/pages/FetchOld";
import { FetchRQ } from "./Components/pages/FetchRQ";

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
      }
    ]
  }
])

const App=()=>{
  return( <RouterProvider router={router}></RouterProvider>
  )
}
export default App;