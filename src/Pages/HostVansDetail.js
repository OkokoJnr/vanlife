import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function HostVansDetail() {
    const [hostVans, setHostVans] = useState({})
    const hostVansID = useParams().id
    
    useEffect(()=>{
        fetch(`/api/host/vans/${hostVansID}`)
        .then(response => response.json())
        .then(data => setHostVans(data.vans))
    },[])
  return (<>
            <div className='van-detail-container container'>
                <p><Link>&larr; Back to all vans</Link></p>
            {
                hostVans ? (<div className='van-detail'>
                            <img src={hostVans.imgaeUrl} alt={hostVans.name}/>
                            <i className={`van-type ${hostVans.type} selected`}>{hostVans.type}</i>
                            <h2>{hostVans.name}</h2>
                            <p><span>${hostVans.price}</span>/day</p>
                            <p>{hostVans.description}</p>
                            <button className='link-button'>Rent this van</button>
                        </div>): 'Loading...'
            }
            </div>
    </>
  )
}

export default HostVansDetail
