import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function VansList() {

    const [vans, updateVans] = useState([])
    useEffect(()=>{
        fetch('/api/vans')
        .then(response=>response.json())
        .then(data=>updateVans(data.vans))
    }, [])

    const vansElement = vans.map (van=> <Link to={`${van.id}`}><VanItem key={van.id} van={van} ></VanItem></Link>)

  return (
    <div className='van-list-container'>
        <h1>Explore Our Vans </h1>
        <div className='van-list'>
            {vansElement}
        </div>        
    </div>
  )
}


function VanItem ({van}){
    return(
        <>
        <div className='van-tile'>
            <img src={van.imageUrl}/>
            <div className='van-info'>
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </>
    )
}


export default VansList
