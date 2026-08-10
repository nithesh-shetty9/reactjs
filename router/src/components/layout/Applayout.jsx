import { Outlet, useNavigation } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading";

export const Applayout=()=>{
    const navigation=useNavigation();
    if(navigation.state==="loading") {
        return <Loading/>
    }
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
       </>
    )
}