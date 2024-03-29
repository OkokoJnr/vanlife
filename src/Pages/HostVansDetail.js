import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

function HostVansDetail() {

    const [hostVans, setHostVans] = useState({})
    const hostVansID = useParams().id
    
    useEffect(()=>{
        fetch(`/api/host/vans/${hostVansID}`)
        .then(response => response.json())
        .then(data => setHostVans(data.vans))
    },[])
    
  return (
    <section>
            <Link to={`..`} relative='path' className='back-button'>&larr; Back to all vans</Link>
            <div className='host-van-detail-layout-container'>
            {
                hostVans ? (
                    <div className='host-van-detail'>
                        <img src={hostVans.imageUrl} className='host-van-detail-image' alt={hostVans.name}/>
                        <div className='host-van-detail-info-text'> 
                            <i className={`van-type ${hostVans.type} selected`}>{hostVans.type}</i>
                            <h2>{hostVans.name}</h2>
                            <p><span>${hostVans.price}</span>/day</p>
                        </div>
                </div>): 'Loading...'
            }
   
    <nav className='host-nav-bar'>
        <span className='host-nav-bar-link'><NavLink className={({isActive})=> isActive ? `isActive` : ''} end to={'.'}>Details</NavLink></span>
        <span className='host-nav-bar-link'><NavLink className={({isActive})=> isActive ? `isActive` : ''} to={'photos'}>Photos</NavLink></span>
        <span className='host-nav-bar-link'><NavLink className={({isActive})=> isActive ? `isActive` : ''} to={'pricing'}>Pricing</NavLink></span>
    </nav>
    <Outlet context={{hostVans}}/>
    </div>
    </section>
  )
}



export default HostVansDetail
