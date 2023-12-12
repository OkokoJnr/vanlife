import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div>
      <header>
        <nav>
          <h1><Link>#VanLife</Link></h1>
          <ul>
            <li><Link>About</Link></li>
            <li><Link>Vans</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavigationBar
