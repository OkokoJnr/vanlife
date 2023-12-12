import React from 'react'
import { Link } from 'react-router-dom'

function HostNavigationBar() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to='.'>Dashboard</Link></li>
            <li><Link to='income'>Income</Link></li>
            <li><Link to='review'>Reviews</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default HostNavigationBar
