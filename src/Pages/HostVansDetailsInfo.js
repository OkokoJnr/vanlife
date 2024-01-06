import React from 'react'
import { useOutletContext } from 'react-router'
function HostVansDetailsInfo() {
  const {hostVans} = useOutletContext()
  console.log(hostVans)
  return  (
            <div className='host-van-detail-infor'>
                <strong>Name:</strong>{hostVans.name}<h2>{}</h2>
                <strong>Category: {hostVans.category}</strong><h2>{}</h2>
                <strong>Description</strong><p>{hostVans.description}</p>
                <p><strong>Visibility</strong>:{hostVans.visibility}</p>
            </div>)
}

export default HostVansDetailsInfo
