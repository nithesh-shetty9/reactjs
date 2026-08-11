import {createBrowserRouter,RouterProvider }from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactdata } from "./pages/Contact";
import { Applayout } from "./components/layout/Applayout";
import "./App.css";
import { ErrorPage } from "./pages/Errorpage";
import { moviesdata } from "./API/getapi";
import { Getmovies} from "./components/UI/MovieDetails";
import {moviedetails } from "./components/UI/Getmovies";
const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
      path:"/",
      element:<Home/>
    },
      {
      path:"/about",
      element:<About/>
    },
      {
      path:"/movie",
      element:<Movie/>,
      loader:moviesdata//function me he ggand
    } , 
    {
      path:"/movie/:movieID",
      element:<Getmovies/>,
      loader:moviedetails
    },
    {
      path:"/contact",
      element:<Contact/>,
      action:contactdata
    }

      ]
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>
}
export default App;
//........................older method
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/movie" element={<Movie />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }