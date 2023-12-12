import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function NavigationBar() {
  return (
    <React.Fragment>
            <div>
              <header>
                <nav>
                  <h1><NavLink to={'/'} className='site-logo'> #VanLife</NavLink></h1>
                  <ul>
                    <li><NavLink className={({isActive})=> isActive ? `isActive` : ''} to={'/about'}>About</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? `isActive` : ''} to={'/vans'}>Vans</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? `isActive` : ''} to={'/host'}>Host</NavLink></li>
                  </ul>
                </nav>
              </header>
            </div>
    </React.Fragment>
  )
}

export default NavigationBar
