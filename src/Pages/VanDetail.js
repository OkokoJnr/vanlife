import React, { useEffect, useState } from 'react'
import { useLocation, useLoaderData } from 'react-router'
import { Link } from 'react-router-dom'
import './vanDetail.css'
import { getVans } from '../api'

export function loader({params}){
  console.log(params)
  return getVans(params.id)
}
function VanDetail() {
    const van = useLoaderData()

    const location = useLocation()
    const searchTerm = location.state?.queryString || ''
    const query = location.state?.query || 'All'
    
    
  return (
    <div className='van-detail-container container'>
        <div className='van-detail'>
                  <Link to={`..?${searchTerm}`} className='back-btn' relative='path'><span className='back-btn-icon'>&larr;</span> {`Back to ${query} Vans`}</Link>
                    <img src={van.imageUrl} alt={`image of ${van.name} van`}/>
                   <div className='vandetail-content'>
                      <i className={`van-type ${van.type} selected`}>{van.type}</i>
                      <h2 className='van-name'>{van.name}</h2>
                      <p><span className='price'>${van.price}</span>/day</p>
                      <p className='van-description'>{van.description}</p>
                  </div>
                  <div className='rent-van-btn' ><Link className='rent-van-link' >Rent this van</Link></div>
        </div>
    </div>
  )
}

export default VanDetail
