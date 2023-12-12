import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function VanDetail() {
    const [van, setVan] = useState(null)
    const vansId = +useParams().id
    console.log(van)
    useEffect(()=>{
        fetch(`/api/vans/${vansId}`)
        .then(response => response.json())
        .then (data=>setVan(data.vans))
    }, [])
  return (
    <div className='van-detail-container container'>

      {
        van ? (<div className='van-detail'>
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
