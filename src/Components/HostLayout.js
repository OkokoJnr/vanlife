import React from 'react'
import HostNavigationBar from './HostNavigationBar'
import { Outlet, Navigate } from 'react-router'
import './../Pages/Host.css'
// function HostLayout() {
//   return (
//     <>
//         <HostNavigationBar/>
//         <Outlet/> 
//     </>
//   )
// }

//ADDING PROTECTED ROUTES
function HostLayout() {
  const isLoggedIn = false
  if(!isLoggedIn){
    return <Navigate to='/login'/>
  }
  return (
    <>
        <HostNavigationBar/>
        <Outlet/> 
    </>
  )
}

export default HostLayout
