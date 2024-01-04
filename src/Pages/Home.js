import React from 'react'
import { Link } from 'react-router-dom'

function Home (){

    return (
        <>
        <div className='home-container container'>
            <div className='overlay'>
                <div className='home-content'>
                    <h1>You have got the travel plans, we got the vans</h1>
                    <p>Add adventure to your life by joining the   #VanLife movement. <br/>
                    Rent the perfect van to make your perfect road trip.
                    </p>
                    <div className='find-van-btn' ><Link className='find-van-link' >Find your van</Link></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
