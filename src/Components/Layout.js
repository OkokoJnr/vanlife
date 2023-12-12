import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";
import Footer from './Footer'
function Layout(){
    return <>
        <NavigationBar/>
        <Outlet/>
        <Footer/>
    </>
}

export default Layout