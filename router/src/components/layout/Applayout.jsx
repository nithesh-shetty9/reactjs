import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Applayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}