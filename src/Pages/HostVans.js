import React, { useEffect, useState } from 'react'
import { Link, useSearchParams} from 'react-router-dom'

function HostVans() {
  const [searchTerm, setSearchParams] = useSearchParams()
  const [hostVans, updateHostVans] = useState([])
  useEffect(()=>{
    fetch('/api/host/vans')
    .then(response => response.json())
    .then(data => updateHostVans(data.vans))
  })
  console.log(searchTerm.get('type'))
  const filteredVans = searchTerm.get('type') ? hostVans.filter(hostVan=> hostVan.type === searchTerm.get('type')) : hostVans
  const hostVanElement = filteredVans.map((hostVan)=> <Link to={`${hostVan.id}`} className='link'><HostVanItem van={hostVan}/></Link>)
  return (
    <div className='host host-van'>
      <h2>Your listed vans</h2>
      <div className='van-type-btns'>
            <button onClick={()=>setSearchParams({type:'simple'})} className='van-type simple'>Simple</button>
            <button onClick={()=>setSearchParams({type:'rugged'})} className='van-type rugged'>Rugged</button>
            <button onClick={()=>setSearchParams({type:'luxury'})} className='van-type luxury'>Luxury</button>
            <button onClick={()=>setSearchParams({})} className='van-type clear-filters'>Clear</button>
        </div>
        <div className='host-vanList-container'>
          {hostVanElement}
        </div>
    </div>
  )
}


function HostVanItem({van}){
  return (<>
        <div className='host-van-tile'>
            <img src={van.imageUrl}/>
            <div className='host-van-info'>
                <h3>{van.name}</h3>
                <p className='price'>${van.price}<span>/day</span></p>
            </div>
        </div> 
  </>)
}


export default HostVans
