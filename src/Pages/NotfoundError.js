import React from 'react'
import { Link } from 'react-router-dom'

function NotfoundError() {
  return (
    <div>
      <h2>Sorry, the page you are looking for is not found</h2>
      <Link to={'/'}>Return Home</Link>
    </div>
  )
}

export default NotfoundError
