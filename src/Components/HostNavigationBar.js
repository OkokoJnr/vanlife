import React from 'react'
import {NavLink } from 'react-router-dom'
function HostNavigationBar() {
  return (
    <div>
      <nav className='host-nav-bar'>
        <ul>
            <li><NavLink className={({isActive})=> isActive ? 'isActive' : ''} end to='.'>Dashboard</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'isActive' : ''} to='vans'></NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'isActive' : ''} to='income'>Income</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'isActive' : ''} to='vans'>Vans</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'isActive' : ''} to='review'>Reviews</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default HostNavigationBar
