import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './vansList.css'

function VansList() {

    const [vans, updateVans] = useState([])
    const [searchTerm, setSearchParams] = useSearchParams()
    const query = searchTerm.get('type')
    
    const filteredVans = searchTerm.get('type') ? vans.filter(van=>van.type === searchTerm.get('type')) : vans

    useEffect(()=>{
        fetch('/api/vans')
        .then(response=>response.json())
        .then(data=>updateVans(data.vans))
    }, [])

    const vansElement = filteredVans.map (van=> <Link to={`${van.id}`} className='link'key={van.id} state={{queryString:searchTerm.toString(), query:searchTerm.get('type')}}><VanItem  van={van} ></VanItem> </Link>)

    function generateNewSearchParamString(key, value){
        const sp = new URLSearchParams(searchTerm)
        if(value === null){
            sp.delete(key)
        }else{
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }

    function handleFilterChange(key, value){
        setSearchParams(prevParams => {
            if(value === null){   
                prevParams.delete(key)
            }else{
                prevParams.set(key, value)
            }
            console.log(prevParams)
            return prevParams
        })
    }
    
  return (
    <div className='van-list-container'>

        {/* <div>
            <Link to={'?type=simple'} className='van-type simple'>Simple</Link>
            <Link to={'?type=rugged'} className='van-type rugged'>Rugged</Link>
            <Link to={'?type=luxury'} className='van-type luxury'>Luxury</Link>
            <Link to={'.'} className='van-type clear-filters'>Clear</Link>
        </div> */}
        {/* <div>
            <button onClick={()=>setSearchParams({type:'simple'})} className='van-type simple'>Simple</button>
            <button onClick={()=>setSearchParams({type:'rugged'})} className='van-type rugged'>Rugged</button>
            <button onClick={()=>setSearchParams({type:'luxury'})} className='van-type luxury'>Luxury</button>
            <button onClick={()=>setSearchParams({type:'luxury'})} className='van-type clear-filters'>Clear</button>
        </div> */}


        {/*<div>
             <Link to={generateNewSearchParamString('type','simple')}>Simple</Link>
            <Link to={generateNewSearchParamString('type','rugged')}>Rugged</Link>
            <Link to={generateNewSearchParamString('type','luxury')}>Luxury</Link>
            <Link to={generateNewSearchParamString('type',null)}>Clear</Link>
        </div> */}

        <div>           
            <button onClick={()=> handleFilterChange('type','simple') } className='van-type simple'>Simple</button>
            <button onClick={()=> handleFilterChange('type','rugged') } className='van-type rugged'>Rugged</button>
            <button onClick={()=> handleFilterChange('type','luxury') } className='van-type luxury'>Luxury</button>
            <button onClick={()=> handleFilterChange('type',null) } className='van-type clear-filters'>{query ? 'Clear' :''}</button>
        </div> 
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
                </div>
        </>
    )
}


export default VansList
