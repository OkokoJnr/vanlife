import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";

function Layout(){
    return <>
        <NavigationBar/>
        <Outlet/>
    </>
}

export default Layout