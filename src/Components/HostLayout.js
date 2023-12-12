import React from 'react'
import HostNavigationBar from './HostNavigationBar'
import { Outlet } from 'react-router'
function HostLayout() {
  return (
    <>
        <HostNavigationBar/>
        <Outlet/> 
    </>
  )
}

export default HostLayout
