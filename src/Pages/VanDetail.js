import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './vanDetail.css'

function VanDetail() {
    const [van, setVan] = useState(null)
    const vansId = +useParams().id

    const location = useLocation()
    const searchTerm = location.state?.queryString || ''
    const query = location.state?.query || 'All'
    
    useEffect(()=>{
        fetch(`/api/vans/${vansId}`)
        .then(response => response.json())
        .then (data=>setVan(data.vans))
    }, [])
    
    
  return (
    <div className='van-detail-container container'>

      {
        van ? (<div className='van-detail'>
                  <Link to={`..?${searchTerm}`} className='back-btn' relative='path'><span className='back-btn-icon'>&larr;</span> {`Back to ${query} Vans`}</Link>
                    <img src={van.imageUrl} alt={`image of ${van.name} van`}/>
                   <div className='vandetail-content'>
                      <i className={`van-type ${van.type} selected`}>{van.type}</i>
                      <h2 className='van-name'>{van.name}</h2>
                      <p><span className='price'>${van.price}</span>/day</p>
                      <p className='van-description'>{van.description}</p>
                  </div>
                  <div className='rent-van-btn' ><Link className='rent-van-link' >Rent this van</Link></div>
        </div>): 'Loading...'
      }
    </div>
  )
}

export default VanDetail
