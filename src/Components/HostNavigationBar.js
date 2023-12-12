import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HostNavigationBar() {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink end className={({isActive})=> isActive ? `isActive` : ''} to='.'>Dashboard</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? `isActive` : ''} to='vans'></NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? `isActive` : ''} to='income'>Income</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? `isActive` : ''} to='vans'>Vans</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? `isActive` : ''} to='review'>Reviews</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default HostNavigationBar
