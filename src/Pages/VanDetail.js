import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

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
          <Link to={`..?${searchTerm}`} relative='path'>&larr; {`Back to ${query} Vans`}</Link>
            <img src={van.imgaeUrl} alt='v'/>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className='link-button'>Rent this van</button>
        </div>): 'Loading...'
      }
    </div>
  )
}

export default VanDetail
