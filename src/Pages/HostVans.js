import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HostVans() {

  const [hostVans, updateHostVans] = useState([])
  useEffect(()=>{
    fetch('/api/host/vans')
    .then(response => response.json())
    .then(data => updateHostVans(data.vans))
  })
  
  const hostVanElement = hostVans.map((hostVan)=> <Link to={`${hostVan.id}`}><HostVanItem van={hostVan}/></Link>)
  return (
    <div>
      <h2>Your listed vans</h2>
      {hostVanElement}
    </div>
  )
}


function HostVanItem({van}){
  return (<>
        <div className='van-tile'>
            <img src={van.imageUrl}/>
            <div className='van-info'>
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
        </div> 
  </>)
}


export default HostVans
