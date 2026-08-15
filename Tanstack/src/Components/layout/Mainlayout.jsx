import { Footer } from "./Footer"
import { Header } from "./Header"
import {Outlet} from "react-router"
export const Mainlayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}