import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavigationBar() {
  return (
    <React.Fragment>
            <div>
              <header>
                <nav>
                  <h1><Link to={'/'} className='site-logo'> #VanLife</Link></h1>
                  <ul>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/vans'}>Vans</Link></li>
                    <li><Link to={'/host'}>Host</Link></li>
                  </ul>
                </nav>
              </header>
            </div>
    </React.Fragment>
  )
}

export default NavigationBar
